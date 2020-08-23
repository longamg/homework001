const Koa = require("koa");
const proxy = require("koa-server-http-proxy");
const KoaStaticCache = require("koa-static-cache");

const app = new Koa();

app.use(
	proxy("/api", {
		target: "http://localhost:8081",
		pathRewrite: {
			"^/api": "",
		},
	})
);

// 提供静态资源服务
app.use(
	KoaStaticCache("./static", {
		prefix: "/static",
		gzip: true,
		dynamic: true,
	})
);

app.listen(9999, function () {
	console.log("已启动9999客户端...");
});
