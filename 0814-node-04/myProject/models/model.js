const mysql2 = require("mysql2");

// 数据库连接，不推荐使用use中间件
let db = mysql2.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "123456@lzp",
	database: "kkb_shop",
});

module.exports = db;
