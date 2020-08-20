const db = require("./model");

module.exports = {
	getPhotos() {
		return new Promise((resolve, reject) => {
			db.query("select * from `photos`", function (err, rs) {
				if (err) {
					reject(err);
				} else {
					resolve(rs);
				}
			});
		});
	},

	addFile(newFile) {
		return new Promise((resolve, reject) => {
			db.query(
				"insert into `photos` (`name`) values (?)",
				newFile,
				function (err, rs) {
					if (err) {
						reject(err);
					} else {
						resolve(rs);
					}
				}
			);
		});
	},
};
