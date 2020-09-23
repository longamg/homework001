### vue3-0921

## **打飞机项目**

https://github.com/cuixiaorui/vue3-play-plane

## canvas

-   渲染机制
    // template 编译=> render() => 虚拟节点树 vnode tree => 渲染成真正的 dom => 添加到 dom 容器内 渲染出来

// 如何去创建有一个 dom 节点呢？

// dom 平台

```
    const div = document.createElement("div");
    document.querySelector("#app").append(div);

```

-   custom renderer 自定义渲染

*   实现用户创建元素

## PixiJS

基于 canvas 的 HTML5 创建引擎

https://www.pixijs.com/

## setup API

https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md
