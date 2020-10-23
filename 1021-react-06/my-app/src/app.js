import React from "react";
import AddTodo from "./addTodo";
import List from "./list"
import "./index.css";
import Title from "./title";
import Stats from "./stats";
function App () {
    return <div id="todoapp">
        <Title />
        <div className="content">
            <AddTodo />
            <List />
            <Stats />
        </div>
    </div>
}
export default App;