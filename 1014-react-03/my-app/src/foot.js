import React, { Component } from "react";

export default class Foot extends Component {
    render() {
        let { data, checkAll, removeList } = this.props;
        return <div className="sum">
            <label>
                <input
                    type="checkbox"
                    onChange={({ target }) => {
                        checkAll(target.checked);
                    }}
                />
                <span>选中全部</span>
            </label>
            <a onClick={() => {
                removeList();
            }}>删除选中项</a>
            <p>当前选中{data.filter(item => item.checked).length}项，共{data.length}条留言</p>
        </div>
    }
}