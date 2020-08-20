const Koa = require("koa");
const KoaStaticCache = require("koa-static-cache");
const KoaRouter = require("koa-router");
const upload = require("./middlewares/upload");

const fileController = require("./controllers/file");

const app = new Koa();

app.use(
	KoaStaticCache("./static", {
		prefix: "/static",
		gzip: true,
		dynamic: true,
	})
);

const router = new KoaRouter();

router.get("/", async (ctx) => {
	ctx.body = "开课吧";
});
router.get("/getPhotos", fileController.getPhotos);
router.post("/upload", upload(), fileController.onloadFile);

app.use(router.routes());

app.listen(8081);
