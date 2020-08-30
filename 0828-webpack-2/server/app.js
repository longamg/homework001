const Koa = require("koa");
const KoaRouter = require("koa-router");

const app = new Koa();
const router = new KoaRouter();

const myName = "龙志平";

router.get("/getUser", async (ctx) => {
	ctx.body = `开课吧-${myName}`;
});

app.use(router.routes());

app.listen(9999, function () {
	console.log("启动端口9999...");
});
