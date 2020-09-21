import { reactive } from "vue";

export function useKeyboardMove() {

    const position = reactive({
        x: 0,
        y: 0
    });

    window.addEventListener("keyup", (e) => {
        console.log(e)
    })

    return {
        position
    }

}