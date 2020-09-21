import { onMounted, onUnmounted, reactive } from "vue";

export function useMousePosition() {

    const position = reactive({
        x: 0,
        y: 0
    });

    onMounted(() => {
        window.addEventListener("mousemove", (e) => {
            position.x = e.clientX;
            position.y = e.clientY;
        })
    });

    onUnmounted(() => {
        window.removeEventListener("mousemove", () => {
            console.log("移除了事件");
        })
    });

    return {
        position
    }

}