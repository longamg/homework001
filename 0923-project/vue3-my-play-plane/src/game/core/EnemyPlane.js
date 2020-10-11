import { reactive } from "vue";
export function useEnemyPlane() {

    const enemyPlanes = reactive([
        {
            x: 100,
            y: 100,
        },
    ]);

    return {
        enemyPlanes
    };
}
