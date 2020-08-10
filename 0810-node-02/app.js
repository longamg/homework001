const http = require("http");
const fs = require("fs");
// const data = require("./data.json");
// 创建服务器对象
const server = http.createServer((req, res) => {
	let content = "";

	// 对静态资源处理
	if (req.url.startsWith("/static")) {
		let fileUrl = __dirname + req.url;
		// console.log(file);
		try {
			content = fs.readFileSync(fileUrl);
			let lastIndex = fileUrl.lastIndexOf(".");
			let suffix = fileUrl.substring(lastIndex + 1, fileUrl.length);
			res.writeHead(200, {
				"Content-type": "text/" + suffix + ";charset=utf-8",
			});
		} catch (error) {
			content = fs.readFileSync("./static/404.html");
			res.writeHead(400);
		}
		res.write(content);
		res.end();
		return;
	}

	switch (req.url) {
		case "/":
			content = fs.readFileSync("./static/1.html");
			res.write(content);
			break;
		case "/test":
			res.setHeader("Content-type", "text/html;charset=utf-8");
			res.write("我的测试信息...");
			break;
	}
	res.end();
});

server.listen("8081", function () {
	console.log("开启了8081端口...");
});
