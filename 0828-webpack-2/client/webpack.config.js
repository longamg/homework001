const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",

	// devtool: "source-map",

	entry: {
		index: "./src/index.js",
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},

	module: {
		rules: [
			{ test: /\.txt$/, use: "raw-loader" },
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							// placeholder 占位符 [name] 源资源模块的名称
							// [ext] 源资源模块的后缀
							name: "[name]_[hash].[ext]",
							//打包后的存放位置
							outputPath: "./images",
							// 打包后文件的 url
							// publicPath: '../images',
							// 尽量使用静态资源（网站）的根目录地址
							// publicPath: "../dist/images",
							// 小于 100 字节转成 base64 格式
							limit: 100,
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					// "style-loader",
					{
						// 生成 link
						loader: MiniCssExtractPlugin.loader,
					},
					{
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
				],
			},
			{
				test: /\.md$/,
				use: ["html-loader", "markdown-loader"],
			},
		],
	},

	// 插件的执行顺序与下面的书写顺序没有关系
	plugins: [
		new HtmlWebpackPlugin({
			template: "./template/index.html",
			// filename 是 template 解析以后生成的存放位置和文件名称，文件位置是根据全局的output.path来指定
			filename: "index.html",
			title: "欢迎来到开课吧",
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "./css/[name].css",
		}),
	],

	devServer: {
		// 自动打开页面
		open: true,
		hotOnly: true,
		// 热更新
		hot: true,
		// 端口
		port: 8081,
		// 代理
		proxy: {
			"/api": {
				target: "http://localhost:9999",
				pathRewrite: {
					"^/api": "",
				},
			},
		},
	},
};
