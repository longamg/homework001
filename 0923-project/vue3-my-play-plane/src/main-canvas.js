import { Application, Text, TextStyle, Sprite, Texture, Graphics, Container } from 'pixi.js';
import logo from "./assets/logo.png";

// 初始化
const game = new Application({
    width: 700,
    height: 1080
});

// game.view -> canvas
// game.stage -> 根容器
document.body.append(game.view);

// 创建一个容器
const container = new createContainer();
game.stage.addChild(container);
container.x = 300;

// 创建文字 - Text
function createText () {
    const text = new Text("longamg");
    text.style = new TextStyle({
        fill: "0x00ff00"
    });

    // 帧循环
    let distinct = "right";
    const spend = 5;
    game.ticker.add(() => {
        if (distinct === "right") {
            text.x += spend;
        } else if (distinct === "left") {
            text.x -= spend;
        }

        if (text.x >= 700) {
            distinct = "left";
        }

        if (text.x <= 0) {
            distinct = "right";
        }
    });
    // 移除ticker
    // game.ticker.remove(handle);

    game.stage.addChild(text);
}

function createContainer () {
    const container = new Container();
    return container;
}

// 创建图片 - Sprite
function createImg () {
    const img = new Sprite();
    img.texture = Texture.from(logo);
    // 设置坐标
    img.x = 100;
    img.y = 200;
    container.addChild(img);
}

// 创建矩形 - Graphics
function createRect () {
    const rect = new Graphics();
    rect.beginFill("0xff0000");
    rect.drawRect(30, 40, 50, 50);
    rect.endFill();

    // 添加点击事件
    rect.interactive = true;
    rect.on("pointertap", () => {
        console.log("click")
    });

    container.addChild(rect);
}


createText();
createImg();
createRect();