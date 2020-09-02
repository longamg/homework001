import Koa from "koa";
import KoaBody from "koa-body";
import KoaRouter from "koa-router";
import KoaStaticCache from "koa-static-cache";
import glob from "glob";
import path from "path";

import MainController from "../controllers/Main";

interface KkbConfigs {
	port: number;
}

const defaultConfig = {
	port: 8888,
};

export default class Kkb {
	private configs: KkbConfigs;
	private app: Koa;
	private router: KoaRouter;

	constructor(configs: KkbConfigs) {
		this.configs = {
			...defaultConfig,
			...configs,
		};

		this.app = new Koa();
		this.addRouters();
	}

	addRouters() {
		this.router = new KoaRouter();

		let controllerPath = path.resolve(__dirname, "../controllers/**/*");
		// 读取文件
		let controllerFiles = glob.sync(controllerPath);

		try {
			controllerFiles.forEach(async (controllerFile) => {
				const Controller = (await import(controllerFile)).default;
				const controller = new Controller();

				if (Array.isArray(Controller.__routes)) {
					Controller.__routes.forEach((__route) => {
						this.router[__route.verb](
							__route.path,
							controller[__route.name]
						);
					});
				}
			});

			this.app.use(this.router.routes());
		} catch (e) {
			console.log(e);
		}
	}

	start() {
		this.app.listen(this.configs.port, function () {
			console.log(`启动端口成功...`);
		});
	}
}

/**
 * 我们要封装的Get装饰器函数
 * @param path
 */
export const Get = function (path: string) {
	return function (target: any, name: string, descriptar: PropertyDecorator) {
		let constructor = target.constructor;
		if (!Array.isArray(constructor.__routes)) {
			constructor.__routes = [];
		}

		constructor.__routes.push({
			verb: "get",
			path,
			name,
		});
	};
};

/**
 * 我们要封装的Post装饰器函数
 * @param path
 * 暗号：装饰器
 */
export const Post = function (path: string) {
	return function (target: any, name: string, descriptar: PropertyDecorator) {
		let constructor = target.constructor;
		if (!Array.isArray(constructor.__routes)) {
			constructor.__routes = [];
		}

		constructor.__routes.push({
			verb: "post",
			path,
			name,
		});
	};
};
