const tpl = require("../libs/tpl");
const categoriesModel = require("../models/categories");
const itemsModel = require("../models/items");

module.exports = {
	add: async (ctx) => {
		let categories = await categoriesModel.getCategories();
		ctx.body = tpl.render("add-item.html", {
			categories,
		});
	},

	addPost: async (ctx) => {
		let data = ctx.request.body;
		let files = ctx.request.files;
		let filename = "";
		if (files && files.cover) {
			filename = files.cover.path.replace(/^.*[\\\/]/, "");
		}
		// console.log('data', filename);

		let rs = await itemsModel.addItem([
			data.category_id,
			data.name,
			data.price,
			filename,
		]);

		console.log("rs", rs);

		ctx.body = "添加成功";
	},
};
