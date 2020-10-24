# React 技术栈学习
React 是一个用于构建用户界面的javascript库
- React 技术栈包含 React 、React-Router、React-Redux

## React 的使用 
两种使用模式，一种是基于浏览器的模式，一种是基于自动化的集成环境模式
- 通过 CND 链接的方式添加 react.js 和 react-dom.js，如：虚拟 dom，组件
    - React.js 提供 React.js 核心功能代码
    - ReactDOM 提供了与浏览器交互的 DOM 功能，如：dom 渲染
- 通过脚手架 create-react-app 创建 React 应用开发环境。
    - 内置了 Babel、Webpack 等工具，帮助我们实现 ES6+ 解析、模块化解析打包，也就是通过它，我们可以使用 模块化 以及 ES6+ 等更新的一些特性。
    - 内置 ESLint 语法检测工具、Jest 单元测试工具
### JSX
JSX 是一个基于 JavaScript + XML 的一个扩展语法
- 插值表达式，{表达式}；表达式中可以是变量、算术运算、函数调用。
- 列表渲染：通过 Array.map 进行循环遍历，同时必须要添加key值。在 React ，组件每次更新时，会生成一个 虚拟DOM，和原有的虚拟DOM进行对比。
如果是批量生成的一组元素，那React就会根据 key 值去做对比。
- JSX中的所有标签都是闭合的。
- 必须有,且只有一个顶层的包含元素。如果没有，可以使用 React.Fragment，Fragments 可以让你聚合一个子元素列表，并且不在DOM中增加额外节点。

### 组件
组件包含类式组件和函数式组件
- 类组件必须继承 **React.Component**，类组件必须有 **render** 方法
- 通过 state/props 完成父子组件之间的通信
- 通过 Provider 完成跨组件通信
- 函数组件中通过使用 Hooks 可以简化组件逻辑、复用状态逻辑；

## React-Router 的使用
通过 npm 安装 react-router-dom
- 常用 Router 组件有 BrowserRouter 和 HashRouter， BrowserRouter 是 浏览器URL格式的路由组件，HashRouter 是 URL 格式为 Hash 格式的路由组件
- 通过使用 Link 组件进行路由跳转，Link 中的 :to 属性配置需要跳转的URL
- 通过 URL 映射到对应的 Route 组件
- Route 组件中需要配置 path 路由地址，可以配置 component 让路由跳转到对应的组件页面。如果需要传递 props 到组件中，则通过 render 属性来渲染组件
- Route 组件中还能配置 Redirect，对当前的 path 进行重定向
- NavLink 组件主要用于导航页面的跳转，它提供了两个特殊属性用来处理页面导航，activeStyle 和 isActive 用于渲染页面是否激活状态。

## React-Redux 的使用
通过 npm 安装 react-redux
- Redux 提供了一个数据存储中心 store ，可以供外部访问和修改。
- store 中包含 reducer 函数，提供修改状态的方法。reducer 函数包含两个参数，一个 state 数据状态，一个 action 状态修改动作
- 当我们需要修改数据时，通过 dispatch 调用 reducer 中对应 action 的方法，进行 state 数据的更新
