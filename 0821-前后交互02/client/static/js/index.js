let uploadBtnElement = document.querySelector(".uploadBtn");
let uploadFileElement = document.querySelector("#uploadFile");
let taskBodyElement = document.querySelector(".task_body");
let photosListElement = document.querySelector(".photos-list");

function loadPhotos() {
	ajax({
		method: "get",
		url: "/api/getPhotos",
		success(data) {
			data = JSON.parse(data);
			console.log(typeof data);
			if (typeof data === "object") {
				if (data.code === 1) {
					alert(data.message);
					return;
				}
			}
			data.forEach((d) => {
				createLi(d);
			});
		},
	});
}

// 点击上传
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
		url: "/api/upload",
		data,
		success(data) {
			data = JSON.parse(data);
			console.log(data);
			createLi(data);
			setTimeout(() => {
				taskProgressStatusElement.innerHTML = "上传完成";
			}, 1000);
		},
		onprogress(ev) {
			progressElement.style.width = (ev.loaded / ev.total) * 100 + "%";
		},
	});
}

function createLi(data) {
	let li = document.createElement("li");
	let img = new Image();
	img.src = "http://localhost:8081" + data.url;
	li.appendChild(img);
	photosListElement.appendChild(li);
}

// 用户登录相关
let loginElement = document.querySelector(".login");
let userElement = document.querySelector(".user");
let usernameElement = document.querySelector("#username");
let passwordElement = document.querySelector("#password");
let loginBtnElement = document.querySelector("#loginBtn");
let userinfoElement = document.querySelector("#userinfo");
let resetLoginBtnElement = document.querySelector("#resetLoginBtn");

// 初始化页面，判断是否登录，如果登录则请求照片
initLoginPage();

loginBtnElement.onclick = function () {
	let username = usernameElement.value;
	let password = passwordElement.value;

	ajax({
		method: "post",
		url: "/api/login",
		data: {
			username,
			password,
		},
		success(data) {
			data = JSON.parse(data);
			if (this.status !== 200) {
				if (data.message) {
					alert(data.message);
				}
			} else {
				localStorage.setItem("username", data.username);
				localStorage.setItem("authorization", "Bearer " + data.token);
				// 登录成功，重新加载页面请求
				initLoginPage();
			}
		},
	});
};

// 重新登录，移除token
resetLoginBtn.onclick = function () {
	localStorage.setItem("authorization", "null");
	location.reload();
};

function initLoginPage() {
	if (isLogin()) {
		loginElement.style.display = "none";
		userElement.style.display = "block";
		userinfoElement.innerHTML = `当前登录用户：${localStorage.getItem(
			"username"
		)}`;
		loadPhotos();
	} else {
		loginElement.style.display = "block";
		userElement.style.display = "none";
	}
}

// 判断用户是否登录
function isLogin() {
	return localStorage.getItem("authorization") != "null";
}
