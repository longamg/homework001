import React, { useState } from "react";
import { useDispatch } from "react-redux";
function AddTodo () {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    return <div id="create-todo">
        <input
            id="new-todo"
            placeholder="What needs to be done?"
            autoComplete="off"
            type="text"
            value={title}
            onChange={({ target }) => {
                setTitle(target.value);
            }}
            onKeyDown={({ keyCode }) => {
                if (keyCode === 13 && title.trim()) {
                    dispatch({
                        type: "ADD",
                        title,
                    });
                    setTitle("");
                }
            }}
        />
    </div>
}
export default AddTodo;