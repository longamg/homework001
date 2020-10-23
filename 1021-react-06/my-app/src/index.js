import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./app";
import { store } from "./store";
/*
  使用 Provider 组件包裹 整个应用
    在 Provider 中有一个 store 属性，store 属性中传入的是 redux 的 store
*/

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
  document.querySelector("#root")
);