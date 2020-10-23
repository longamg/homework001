import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Stats () {
    const data = useSelector(state => state.data);
    const doneDataLen = data.filter(item => item.done).length;
    const dispatch = useDispatch();
    return <div id="todo-stats">
        <span className="todo-count">
            <span className="number">{data.length - doneDataLen}</span>
            <span className="word">项待完成</span>
        </span>
        {
            doneDataLen > 0 && (<span className="todo-clear">
                <a onClick={() => {
                    dispatch({
                        type: "REMOVEDONE",
                    });
                }}>Clear <span>{doneDataLen}</span> 已完成事项</a>
            </span>)
        }
    </div>


    // <div className="sum">
    //     <label>
    //         <input
    //             type="checkbox"
    //             checked={data.length === selectData.length}
    //             onChange={({ target }) => {
    //                 dispatch({
    //                     type: "CHANGECHECKBOX",
    //                     selected: target.checked
    //                 });
    //             }}
    //         />
    //         <span>选中全部</span>
    //     </label>
    //     <a onClick={() => {
    //         dispatch({
    //             type: "REMOVELIST",
    //         });
    //     }}>删除选中项</a>
    //     <p>当前选中{selectData.length}项，共{data.length}条留言</p>
    // </div>
}
export default Stats;