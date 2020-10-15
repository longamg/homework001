import React, { Component } from "react";

export default class Message extends Component {
    render() {
        let { data, remove } = this.props;
        return <li>
            <h3>{data.nickname}</h3>
            <p>{data.message}</p>
            <a onClick={() => {
                remove(data.id);
            }}>删除</a>
        </li>
    }
}