import React, { Component } from "react";
import "./index.css";
import AddMessage from "./addMessage";
import List from "./list";
import Title from "./title";
import Foot from "./foot";
class App extends Component {
    state = {
        data: []
    }
    add = (addData) => {
        let { data } = this.state;
        data.push({
            id: Date.now(),
            nickname: addData.nickname,
            message: addData.message,
            checked: false
        });
        this.setState({
            data
        })
    }
    remove = (id) => {
        let { data } = this.state;
        this.setState({
            data: data.filter(item => item.id !== id)
        })
    }
    removeList = () => {
        let { data } = this.state;
        this.setState({
            data: data.filter(item => !item.checked)
        })
    }
    changeCheckbox = (id, value) => {
        let { data } = this.state;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = { ...data[i], checked: value }
                break;
            }
        }
        this.setState({
            data
        })
    }
    editMessage = (id, message) => {
        let { data } = this.state;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = { ...data[i], message }
                break;
            }
        }
        this.setState({
            data
        })
    }
    checkAll = (checked) => {
        let { data } = this.state;
        for (let i = 0; i < data.length; i++) {
            data[i] = { ...data[i], checked }
        }
        this.setState({
            data
        })
    }
    render() {
        let { data } = this.state;
        return <section className="wrap">
            <Title />
            <div className="content">
                <AddMessage
                    add={this.add}
                />
                <List
                    data={data}
                    remove={this.remove}
                    changeCheckbox={this.changeCheckbox}
                    editMessage={this.editMessage}
                />
                <Foot
                    data={data}
                    checkAll={this.checkAll}
                    removeList={this.removeList}
                />
            </div>
        </section>
    }
}

export default App;