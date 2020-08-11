const koa = require('koa')
const KoaRouter = require('koa-router')

// 实例化服务器
const app = new koa()

const router = new KoaRouter()

router.get('/', (ctx) => {
    ctx.body = '首页'
})

router.get('/getData', (ctx) => {
    ctx.body = {
        name: 'koa',
    }
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen('8080', function () {
    console.log('开启了8080端口...')
})
