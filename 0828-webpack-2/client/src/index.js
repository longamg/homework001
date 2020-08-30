import fn from "./fn";
import logo from "./images/logo.png";
import css from "./css/css.css";

console.log(fn);

let img = new Image();
img.src = logo;
document.body.appendChild(img);

let btn = document.querySelector("#mybtn");
btn.onclick = function () {
	let xhr = new XMLHttpRequest();
	xhr.open("get", "api/getUser", true);

	xhr.onload = function () {
		console.log(xhr.responseText);
	};
	xhr.send();
};
