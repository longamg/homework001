const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
	},
	module: {
		rules: [
			{ test: /\.txt$/, use: "raw-loader" },
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							// placeholder 占位符 [name] 源资源模块的名称
							// [ext] 源资源模块的后缀
							name: "[name]_[hash].[ext]",
							//打包后的存放位置
							outputPath: "./images",
							// 打包后文件的 url
							publicPath: "./images",
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: {
					loader: "css-loader",
					options: {
						// 启用/禁用 url() 处理
						url: true,
						// 启用/禁用 @import 处理
						import: true,
						// 启用/禁用 Sourcemap
						sourceMap: false,
					},
				},
			},
		],
	},
};
