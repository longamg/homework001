const Koa = require("koa");
const KoaRouter = require("koa-router");
const KoaStaticCache = require("koa-static-cache");
const koaBody = require("koa-body");

// 控制器加载
const mainController = require("./controllers/main");
const userController = require("./controllers/user");
const itemController = require("./controllers/item");

const app = new Koa();
const router = new KoaRouter();

// 静态资源处理
app.use(
	KoaStaticCache("./public", {
		prefix: "/public",
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
			uploadDir: __dirname + "/public/upload",
			// 是否保留上传文件名后缀
			keepExtensions: true,
		},
	})
);

router.get("/", mainController.index);
router.get("/user/register", userController.register);
router.get("/user/login", userController.login);
router.get("/item/add", itemController.add);
router.post("/item/add", itemController.addPost);

app.use(router.routes());

app.listen(8080, () => {
	console.log("启动了端口8080...");
});
