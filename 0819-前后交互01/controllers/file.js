const filesModel = require("../models/files");

module.exports = {
	getPhotos: async (ctx) => {
		let rs = await filesModel.getPhotos();
		rs = rs.map((r) => ({
			...rs,
			url: "/static/upload/" + r.name,
		}));
		ctx.body = rs;
	},

	onloadFile: async (ctx) => {
		let filename = ctx.request.files.file.path.replace(/^.*[\\\/]/, "");
		await filesModel.addFile([filename]);
		ctx.body = {
			url: "/static/upload/" + filename,
		};
	},
};
