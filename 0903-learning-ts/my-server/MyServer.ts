import Koa from "koa";
import KoaRouter from "koa-router";
import KoaBody from "koa-body";
import KoaStaticCache from "koa-static-cache";

import path from "path";
import glob from "glob";

// 接口
interface ServerConfig {
    port: number;
}

// 默认配置
const defaultConfigs = {
    port: 8080,
};

export class MyServer {
    private app: Koa;
    private router: KoaRouter;
    private configs: ServerConfig;

    constructor(Configs: ServerConfig) {
        this.configs = {
            ...defaultConfigs,
            ...Configs,
        };

        this.app = new Koa();
        this.router = new KoaRouter();
        this.app.use(
            KoaStaticCache("./template", {
                prefix: "/template",
                gzip: true,
                dynamic: true,
            })
        );
        this.addRoutes();
    }

    addRoutes() {
        let controllerPath = path.resolve(__dirname, "../Controllers/**/*");
        let controllerFiles = glob.sync(controllerPath);

        controllerFiles.forEach(async (controllerFile) => {
            const Controller = (await import(controllerFile)).default;
            const controller = new Controller();

            if (Array.isArray(Controller.__router)) {
                Controller.__router.forEach((__routes) => {
                    this.router[__routes.verb](
                        __routes.path,
                        controller[__routes.name]
                    );
                });
            }
        });

        this.app.use(this.router.routes());
    }

    start() {
        this.app.listen(this.configs.port, function () {
            console.log("启动成功...");
        });
    }
}

/**
 * Get装饰器
 * @param path
 */
export const Get = function (path: string) {
    return function (
        target: any,
        name: string,
        descriptar: PropertyDescriptor
    ) {
        let constructor = target.constructor;
        if (!Array.isArray(constructor.__router)) {
            constructor.__router = [];
        }

        constructor.__router.push({
            verb: "get",
            path,
            name,
        });
    };
};

/**
 * Post装饰器
 * @param path
 */
export const Post = function (path: string) {
    return function (
        target: any,
        name: string,
        descriptar: PropertyDescriptor
    ) {
        let constructor = target.constructor;
        if (!Array.isArray(constructor.__router)) {
            constructor.__router = [];
        }

        constructor.__router.push({
            verb: "post",
            path,
            name,
        });
    };
};
