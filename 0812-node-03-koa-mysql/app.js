const Koa = require("koa");
const KoaRouter = require("koa-router");
const mysql = require("mysql2/promise");

//自执行函数
let connection;
~(async function () {
	// 链接数据库
	connection = await mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "123456@lzp",
		database: "test",
	});
})();

// 创建 server 对象
const server = new Koa();
// 创建一个router对象
const router = new KoaRouter();

router.get("/", async (ctx) => {
	//
	ctx.body = "首页";
});

router.get("/addUser", async (ctx) => {
	await connection.execute(
		"insert into `users` (`username`, `age`) values (?, ?)",
		[ctx.query.username, ctx.query.age]
	);
	ctx.body = "添加成功";
});

// 把router对象的routes中间件注册到Koa中
server.use(router.routes());

// 启动服务，并监听指定的端口
server.listen(8080, () => {
	console.log("服务启动成功，http://localhost:8080");
});
