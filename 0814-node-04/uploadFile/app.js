const Koa = require("koa");
const KoaRouter = require("koa-router");
const KoaStaticCache = require("koa-static-cache");
const koaBody = require("koa-body");

const app = new Koa();
const router = new KoaRouter();

// 静态资源处理
app.use(
	KoaStaticCache("./static", {
		prefix: "/static",
		gzip: true,
		dynamic: true,
	})
);

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

router.get("/", (ctx) => {
	ctx.body = "首页";
});

router.post("/upload", (ctx) => {
	console.log(ctx.request.body);
	ctx.body = "上传成功";
});

app.use(router.routes());

app.listen(8080, () => {
	console.log("启动了端口8080...");
});
