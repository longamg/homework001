const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

webpack(webpackConfig, (err, stats) => {
	if (err || stats.hasErrors()) {
		// 在这里处理错误
		console.log("出错了：", err);
		return;
	}
	// 处理完成
	console.log("OK");
});
