const Koa = require("koa");
const KoaRouter = require("koa-router");
const KoaStatic = require("koa-static");
const koaBody = require("koa-body");

const app = new Koa();
const router = new KoaRouter();

app.use(KoaStatic(__dirname + "/static"));

app.use(
	koaBody({
		multipart: true,
		// 处理上传的二进制文件
		formidable: {
			// 上传目录
			uploadDir: __dirname + "/static/upload",
			// 是否保留上传文件名后缀
			keepExtensions: true,
		},
	})
);

router.post("/upload", (ctx) => {
	ctx.body = "上传成功";
});

app.use(router.routes());

app.listen(8080, () => {
	console.log("启动了端口8080...");
});
