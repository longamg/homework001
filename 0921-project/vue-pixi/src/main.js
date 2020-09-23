import { Application, TextStyle } from "pixi.js";

// 初始化
const game = new Application({
    width: 750,
    height: 1080,
});

// game.view -> canvas

document.body.append(game.view);

function createText() {
    const text = new Text("longamg");
    text.style = new TextStyle({ fill: 0x00ff00 });
    game.stage.addChild(text);
}



createText();