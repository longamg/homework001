const koa = require("koa");
const KoaRouter = require("koa-router");
const fs = require("fs");

// 实例化服务器
const server = new koa();
const router = new KoaRouter();

router.get("/", (ctx) => {
	ctx.body = "首页";
});

server.use(router.routes());
server.use(router.allowedMethods());
server.listen("8081", function () {
	console.log("开启了8081端口...");
});
