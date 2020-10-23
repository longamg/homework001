import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux"
function Todo (props) {
    let { id, title, done } = props.data;
    let dispatch = useDispatch();
    let [edit, setEdit] = useState(false);
    let editText = useRef();
    const [editVal, setEditVal] = useState(title);
    useEffect(() => {
        if (edit) {
            editText.current.focus();
        }
    }, [edit])
    return <li className={edit ? "editing" : ""}>
        <div className={"todo " + (done ? "done" : "")}>
            <div
                className="display"
            >
                <input
                    className="check"
                    type="checkbox"
                    checked={done}
                    onChange={({ target }) => {
                        dispatch({
                            type: "CHANGEDONE",
                            id,
                            done: target.checked
                        })
                    }}
                />
                <div
                    className="todo-content"
                    onDoubleClick={() => {
                        setEdit(true);
                    }}
                >{title}</div>
                <span className="todo-destroy" onClick={() => {
                    dispatch({
                        type: "REMOVE",
                        id
                    })
                }}></span>
            </div>
            <div className="edit">
                <input
                    className="todo-input"
                    type="text"
                    ref={editText}
                    value={editVal}
                    onChange={({ target }) => {
                        setEditVal(target.value);
                    }}
                    onBlur={() => {
                        if (editVal.trim()) {
                            dispatch({
                                type: "EDIT",
                                id,
                                title: editVal
                            })
                        } else {
                            setEditVal(title);
                        }
                        setEdit(false);
                    }}
                />
            </div>
        </div>
    </li>
}
export default Todo;