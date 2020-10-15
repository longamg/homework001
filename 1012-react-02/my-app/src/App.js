import React, { Component } from "react";
import "./index.css";
import AddMessage from "./addMessage";
import List from "./list";
import Title from "./title";
class App extends Component {
    state = {
        data: [
            {
                id: 0,
                nickname: "昵称",
                message: "留言"
            }
        ]
    }
    add = (addData) => {
        let { data } = this.state;
        data.push({
            id: Date.now(),
            nickname: addData.nickname,
            message: addData.message
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
                />
            </div>
        </section>
    }
}

export default App;