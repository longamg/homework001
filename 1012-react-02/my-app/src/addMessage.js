import React, { Component } from "react";

export default class AddMessage extends Component {
    state = {
        nickname: "",
        message: ""
    }
    render() {
        let { add } = this.props;
        let { nickname, message } = this.state;
        return <div className="addMessage">
            <input id="nickname" type="text" placeholder="请输入昵称" value={nickname}
                onChange={({ target }) => {
                    this.setState({
                        nickname: target.value
                    })
                }}
            />
            <textarea id="message" placeholder="请输入留言" value={message}
                onChange={({ target }) => {
                    this.setState({
                        message: target.value
                    })
                }}>
            </textarea>
            <button onClick={() => {
                add({
                    nickname,
                    message
                });
                this.setState({
                    nickname: "",
                    message: ""
                })
            }}>提交留言</button>
        </div>
    }
}