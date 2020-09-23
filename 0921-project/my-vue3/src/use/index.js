import { onMounted } from "vue";

// 文件
// 实现逻辑，集中处理
export function test() {
    onMounted(() => {
        console.log("mounted");
    });

    onMounted(() => {
        console.log("mounted2");
    });
}