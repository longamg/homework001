const Koa = require('koa');
const KoaRouter = require('koa-router');
const mysql = require('mysql2/promise');;

//自执行函数
let connection;
~async function() {
    // 链接数据库
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'test'
    });

    // // 数据库查询
    // const [rows, fields] = await connection.execute('SELECT * FROM `datas`', []);
    // console.log('rows', rows);

    // 插入数据
    // for (let i=0; i<datas.length; i++) {
    //     await connection.execute('insert into `datas` (`title`, `imgUrl`, `from`, `newTime`) values (?, ?, ?, ?)', [
    //         datas[i].title,
    //         datas[i].imgUrl,
    //         datas[i].from,
    //         datas[i].newTime
    //     ]);
    // }
    
}()

// 创建 server 对象
const server = new Koa();

// 创建一个router对象
const router = new KoaRouter();

router.get('/', async ctx => {
    //
    ctx.body = '首页'
});

router.get('/addUser', ctx => {
    console.log(ctx.query);
    connection.execute('insert into `users` (`username`, `age`) values (?, ?)', [
        ctx.query.username,
        ctx.query.age
    ]);
})


// 把router对象的routes中间件注册到Koa中
server.use( router.routes() );


// 启动服务，并监听指定的端口
server.listen(8081, () => {
    console.log('服务启动成功，http://localhost:8081');
});