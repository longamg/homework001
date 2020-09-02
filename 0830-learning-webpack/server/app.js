const Koa = require("koa");
const KoaRouter = require("koa-router");

const app = new Koa();
const router = new KoaRouter();

const myName = "longamg";

router.get("/getUser", async (ctx) => {
    ctx.body = `获取用户：${myName}`;
});

app.use(router.routes());

app.listen(3000, function () {
    console.log("开启了3000端口...");
});
