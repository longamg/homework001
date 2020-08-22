const Koa = require("koa");
const koaStatic = require("koa-static");
const KoaRouter = require("koa-router");
const KoaBody = require("koa-body");
const koaBody = require("koa-body");

const app = new Koa();
const router = new KoaRouter();

app.use(koaStatic(__dirname + "/static"));
app.use(koaBody());

router.get("/getData", (ctx) => {
	ctx.body = ctx.query;
});

router.get("/getData/:id", (ctx) => {
	ctx.body = ctx.params;
});

router.post("/post", (ctx) => {
	ctx.body = ctx.request.body;
});

app.use(router.routes());

app.listen(8080, function () {
	console.log("开启8080端口");
});
