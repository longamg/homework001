import React, { Component } from "react";
import Massage from "./massage";

export default class List extends Component {
    render() {
        let { data } = this.props;
        return <ul className="messageList">
            {
                data.map((item) => {
                    return <Massage
                        {...this.props}
                        data={item}
                        key={item.id}
                    />
                })
            }

        </ul>
    }
}