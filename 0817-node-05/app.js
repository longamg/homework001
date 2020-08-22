const Koa = require('koa')
const KoaStaticCache = require('koa-static-cache')
const app = new Koa()
const moment = require('moment')

let d = moment(new Date()).format('YYYY年MM月DD日 HH:mm A')
console.log(d)

app.use(
    KoaStaticCache('./static', {
        prefix: '/static',
        gzip: true,
        dynamic: true,
    })
)

// 因为koa对http有过二次封装
const server = require('http').createServer(app.callback())

const users = []

const options = {
    /* ... */
}
// io 的第一个参数接收的是原始http对象
const io = require('socket.io')(server, options)

io.on('connection', (socket) => {
    users.push({
        id: socket.id,
    })

    console.log('有人通过socket链接了')

    // 通知当前的socket
    socket.emit('hello', `欢迎您 ${socket.id}`)

    //通过socket通知给其它socket
    socket.broadcast.emit(
        'hello',
        `[${getNowTime()}]有新的朋友加入 ${socket.id}，我们欢迎！👏他`
    )

    socket.broadcast.emit('userUpdate', users)

    socket.on('message', (data) => {
        socket.broadcast.emit(
            'message',
            `[${getNowTime()}]${socket.id} 说：${data}`
        )
    })
})

function getNowTime() {
    return moment(new Date()).format('YYYY年MM月DD日 HH:mm A')
}

server.listen(8081)
