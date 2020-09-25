<template>
    <container>
        <CurrentView @change-view="handleChangeView"></CurrentView>
    </container>
</template>

<script>
import StartView from './views/StartView'
import GameView from './views/GameView'

import { computed, ref } from 'vue'
export default {
    name: 'App',
    // eslint-disable-next-line vue/no-unused-components
    components: { StartView, GameView },

    setup() {
        const currentViewName = ref('StartView')
        // const currentViewName = ref('GameView')
        // 依赖别的属性的属性
        const CurrentView = computed(() => {
            // eslint-disable-next-line no-debugger
            if (currentViewName.value === 'StartView') {
                return StartView
            } else if (currentViewName.value === 'GameView') {
                return GameView
            }
        })

        function handleChangeView(viewName) {
            currentViewName.value = viewName
        }

        return {
            CurrentView,
            handleChangeView
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
