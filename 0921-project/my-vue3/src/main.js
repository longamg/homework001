import { createApp, defineComponent, h } from 'vue'
// import App from './App.vue'

const App = defineComponent({
    render() {
        const vnode = h("div", [
            h("p", "long")
        ])
        return vnode;
    }
});


createApp(App).mount('#app')
