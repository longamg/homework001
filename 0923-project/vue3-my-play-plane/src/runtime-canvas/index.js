import { createRenderer } from "vue";
import { Container, Sprite, Text, Texture, Graphics } from "pixi.js";

const renderer = createRenderer({

    createElement(type) {
        // 创建元素
        console.log(type);
        let element;
        switch (type) {
            case "container":
                element = new Container();
                break;
            case "sprite":
                element = new Sprite();
                break;
            case "graphics":
                element = new Graphics();
                element.beginFill("0xFFFF00");
                element.drawCircle(50, 1030, 50);
                element.endFill();
                break;
            default:
                break;
        }
        return element;
    },
    setElementText(node, text) {
        const canvasText = new Text(text);
        node.addChild(canvasText);
    },
    insert(el, parent) {
        if (parent) {
            parent.addChild(el);
        }
    },
    nextSibling() { },
    parentNode(node) {
        return node.parent;
    },
    remove(el) {
        if (el.parent) {
            el.parent.removeChild(el);
        }
    },
    patchProp(el, key, prevValue, nextValue) {
        // console.log(key);
        switch (key) {
            case "texture":
                // 单独处理
                el.texture = Texture.from(nextValue);
                break;
            case "onClick":
                el.on("pointertap", nextValue);
                break;
            default:
                // 常规操作
                el[key] = nextValue;
        }
    },
    createComment() {
        // canvas 内不需要
    },
});

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent);
}
