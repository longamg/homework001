const Koa = require('koa')
const KoaStaticCache = require('koa-static-cache')
const KoaRouter = require('koa-router')
const upload = require('./middlewares/upload')
const mysql = require('mysql2/promise')
const KoaBody = require('koa-body')
const jwt = require('jsonwebtoken')
const koaJwt = require('koa-jwt')

let db

~(async function () {
    db = await mysql.createConnection({
        host: '10.38.100.31',
        port: 3306,
        user: 'admin',
        password: 'pass',
        database: 'longamg',
    })
})()

const app = new Koa()
const router = new KoaRouter()

// 秘钥
const jwtSecret = 'kaikeba'
app.use(
    KoaStaticCache('./static', {
        prefix: '/static',
        gzip: true,
        dynamic: true,
    })
)

app.use(
    koaJwt({
        secret: jwtSecret,
    }).unless({
        path: [/^\/login/],
    })
)

router.get('/', async (ctx) => {
    ctx.body = '开课吧'
})

router.post(
    '/login',
    KoaBody({
        multipart: true,
    }),
    async (ctx) => {
        let { username, password } = ctx.request.body

        if (!username || !password) {
            ctx.status = 400
            return (ctx.body = {
                code: 1,
                message: '参数错误',
            })
        }

        let [[rs]] = await db.query(
            'select * from `users` where `username`=?',
            [username]
        )

        if (!rs) {
            ctx.status = 404
            return (ctx.body = {
                code: 2,
                message: '用户不存在',
            })
        }

        if (rs.password != password) {
            ctx.status = 404
            return (ctx.body = {
                code: 3,
                message: '密码错误',
            })
        }

        let token = jwt.sign(
            {
                id: rs.id,
                username: rs.username,
            },
            jwtSecret
        )

        ctx.body = {
            id: rs.id,
            username: rs.username,
            token,
        }
    }
)

router.get('/getPhotos', async (ctx) => {
    let [rs] = await db.query('select * from `photos` where `user_id`=?', [
        ctx.state.user.id,
    ])

    rs = rs.map((r) => ({
        ...r,
        url: '/static/upload/' + r.name,
    }))

    ctx.body = rs
})

router.post('/upload', upload(), async (ctx) => {
    let filename = ctx.request.files.file.path.replace(/^.*[\\\/]/, '')
    await db.query('insert into `photos` (`name`, `user_id`) values (?, ?)', [
        filename,
        ctx.state.user.id,
    ])

    ctx.body = {
        url: '/static/upload/' + filename,
    }
})

app.use(router.routes())

app.listen(8081, function () {
    console.log('已启动8081服务端...')
})
