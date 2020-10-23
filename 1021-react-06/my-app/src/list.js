import React from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";
function List () {
    const data = useSelector(state => state.data);
    return <ul id="todo-list">
        {
            data.map(item => <Todo
                key={item.id}
                data={item}
            />)
        }
    </ul>
}
export default List;