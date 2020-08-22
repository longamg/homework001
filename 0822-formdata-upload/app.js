const Koa = require("koa");
const KoaRouter = require("koa-router");
const KoaStatic = require("koa-static");
const koaBody = require("koa-body");
const fs = require("fs");

const app = new Koa();
const router = new KoaRouter();

app.use(KoaStatic(__dirname + "/static"));

// 处理文件上传，post请求
app.use(
	koaBody({
		multipart: true,
	})
);

router.post("/upload", (ctx) => {
	// console.log(ctx.request.files.img.path);
	let fileData = fs.readFileSync(ctx.request.files.img.path);
	fs.writeFileSync("./static/upload/" + ctx.request.files.img.name, fileData);
	ctx.body = "上传成功";
});

app.use(router.routes());

app.listen(8080, function () {
	console.log("开启了8080端口");
});
