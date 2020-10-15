import React, { Component } from "react";
import Massage from "./massage";

export default class List extends Component {
    render() {
        let { data, remove } = this.props;
        return <ul className="messageList">
            {
                data.map((item, index) => {
                    return <Massage
                        data={item}
                        key={index}
                        remove={remove}
                    />
                })
            }

        </ul>
    }
}