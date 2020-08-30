import fn from "./fn";
import logo from "./images/logo.png";
import css from "./css/css.css";

console.log(fn);
// console.log(logo);
// console.log(css);

let img = new Image();
img.src = logo;
document.body.appendChild(img);

let styleEles = document.createElement("style");
styleEles.innerHTML = css.toString();
document.head.appendChild(styleEles);
