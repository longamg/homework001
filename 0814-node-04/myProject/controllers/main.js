const tpl = require("../libs/tpl");
const itemsModel = require("../models/items");

module.exports = {
	index: async (ctx) => {
		let items = await itemsModel.getItems();
		ctx.body = tpl.render("index.html", {
			items,
		});
	},
};
