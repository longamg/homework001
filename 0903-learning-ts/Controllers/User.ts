import { Get, Post } from "../my-server/MyServer";

export default class User {
    @Get("/getUser")
    async getUser(ctx) {
        ctx.body = "longamg";
    }

    @Post("/login")
    async login(ctx) {
        ctx.body = "login success";
    }
}
