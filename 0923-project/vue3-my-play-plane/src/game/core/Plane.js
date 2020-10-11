import { reactive } from "vue";


export function usePlane() {
    // 创建一个飞机数据
    const planeInfo = reactive({
        x: 100,
        y: 350,
    });

    const speed = 10;

    const move = () => {
        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "ArrowUp":
                    planeInfo.y -= speed;
                    break;
                case "ArrowDown":
                    planeInfo.y += speed;
                    break;
                case "ArrowLeft":
                    planeInfo.x -= speed;
                    break;
                case "ArrowRight":
                    planeInfo.x += speed;
                    break;
            }
        });
    };

    move();

    return { planeInfo };
}