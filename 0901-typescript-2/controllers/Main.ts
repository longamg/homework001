import { Get } from "../Kkb/Kkb";

export default class Main {
	@Get("/")
	async index(ctx) {
		ctx.body = "longamg";
	}
}
