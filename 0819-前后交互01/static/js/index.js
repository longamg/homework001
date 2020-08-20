let uploadBtnElement = document.querySelector(".uploadBtn");
let uploadFileElement = document.querySelector("#uploadFile");
let taskBodyElement = document.querySelector(".task_body");

uploadBtnElement.onclick = function () {
	uploadFileElement.click();
};

// 内容发生改变了，已经选择了上传文件
uploadFileElement.onchange = function () {
	for (let file of this.files) {
		uploadFile({
			file,
		});
	}
};

function uploadFile(data) {
	let li = document.createElement("li");
	li.innerHTML = `
        <span>${data.file.name}</span>
        <div class="task-progress-status">
            上传中……
        </div>
        <div class="progress"></div>
    `;
	let taskProgressStatusElement = li.querySelector(".task-progress-status");
	let progressElement = li.querySelector(".progress");
	taskBodyElement.appendChild(li);

	ajax({
		method: "post",
		url: "/upload",
		data,
		success(data) {
			data = JSON.parse(data);
			let fileEls = document.querySelector(".content-list");
			let img = new Image();
			img.src = data.url;
			fileEls.appendChild(img);

			setTimeout(() => {
				taskProgressStatusElement.innerHTML = "上传完成";
				// li.remove();
			}, 1000);
		},
		onprogress(ev) {
			// console.log('ev', ev);
			progressElement.style.width = (ev.loaded / ev.total) * 100 + "%";
		},
	});
}
// 获取所有照片
getAllPhotos();

function getAllPhotos() {
	ajax({
		method: "get",
		url: "/getPhotos",
		success(data) {
			data = JSON.parse(data);
			let fileEls = document.querySelector(".content-list");
			fileEls.innerHTML = "";
			data.forEach((item) => {
				let img = new Image();
				img.src = item.url;
				fileEls.appendChild(img);
			});
		},
	});
}
