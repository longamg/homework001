import React, { PureComponent, createRef } from "react";

export default class Message extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            val: props.data.message
        }
    }

    editText = createRef();

    componentDidUpdate(prevProps, pervState) {
        if (!pervState.edit && this.state.edit) {
            this.editText.current.focus();
        }
    }
    render() {
        let { data, remove, changeCheckbox, editMessage } = this.props;
        let { id, nickname, message, checked } = data;
        let { edit, val } = this.state;
        return <li className={edit ? "editing" : ""}>
            <h3>{nickname}</h3>
            <input
                type="checkbox"
                checked={checked || ""}
                onChange={({ target }) => {
                    changeCheckbox(id, target.checked)
                }}
            />
            <p onDoubleClick={() => {
                this.setState({
                    edit: true
                })
            }}>{message}</p>
            <textarea
                value={val}
                ref={this.editText}
                onChange={({ target }) => {
                    this.setState({
                        val: target.value
                    })
                }}
                onBlur={() => {
                    // 退出编辑时，判断是否为空
                    if (val.trim()) {
                        editMessage(id, val);
                    } else {
                        this.setState({
                            val: message
                        })
                    }
                    this.setState({
                        edit: false
                    })
                }}
            >
            </textarea>
            <a onClick={() => {
                remove(data.id);
            }}>删除</a>
        </li>
    }
}