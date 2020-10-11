import React, { Component } from "react";
import "./index.css";
import data from "./data";
import List from "./list";
/*
  1. 建立静态视图
  2. 拆分组件
  3. 关联数据
  4. 处理状态

  父组件向子组件传递信息
    props
    在父级中调用子组件时，可以将要传递内容，添加在子组件的属性中
*/
class App extends Component {
    render() {
        return <div className="friend-list">
            {data.map((item, index) => {
                return <List
                    key={index}
                    data={item}
                    index={index}
                />
            })}
        </div>
    }
}

export default App;