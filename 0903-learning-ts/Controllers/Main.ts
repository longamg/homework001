import { Get } from "../my-server/MyServer";

export default class Main {
    @Get("/")
    async index(ctx) {
        ctx.body = "get index";
    }
}
