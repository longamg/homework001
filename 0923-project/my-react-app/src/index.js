import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 4 * 5
const LONG = 10;
const HEIGHT = 10;
// 布局
const dataList = (() => {
    let dataList = [];
    for (let i = 0; i < HEIGHT; i++) {
        let list = [];
        for (let j = 0; j < LONG; j++) {
            list.push(i * LONG + j);
        }
        dataList.push(list);
    }

    return dataList;
})();

// 函数组件
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(dataList.length).fill(null),
            xIsNext: true,
            isWin: null,
        };
        this.calculateWinner = this.calculateWinner.bind(this);
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (squares[i] || this.state.isWin) {
            return false;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
        this.calculateWinner(squares, i);
    }

    renderSquare(i, k) {
        return (
            <Square
                key={k}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        let status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        if (this.state.isWin) {
            status = "Winer: " + this.state.isWin;
        }

        return (
            <div>
                <div className="status">{status}</div>
                {dataList.map((item, index) => {
                    return (
                        <div className="board-row" key={index}>
                            {item.map((sitem, sindex) => {
                                return this.renderSquare(sitem, sindex);
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }

    calculateWinner(squares, index) {
        let currentSquares = squares[index];

        let i = 0;
        let count = 0;
        // 横向检查
        for (i = index; i > parseInt(index / LONG) * LONG; i--) {
            if (squares[i] !== currentSquares) {
                break;
            }
            count++;
        }
        for (i = index + 1; i < (parseInt(index / LONG) + 1) * LONG; i++) {
            if (squares[i] !== currentSquares) {
                break;
            }
            count++;
        }
        if (count === 5) {
            this.setState({
                isWin: currentSquares,
            });
            return true;
        } else {
            count = 0;
        }

        // 纵向检查
        for (i = index; i > 0; i -= LONG) {
            if (squares[i] !== currentSquares) {
                break;
            }
            count++;
        }
        for (i = index + LONG; i < LONG * LONG; i += LONG) {
            if (squares[i] !== currentSquares) {
                break;
            }
            count++;
        }
        if (count === 5) {
            this.setState({
                isWin: currentSquares,
            });
            return true;
        } else {
            count = 0;
        }

        // 45度方向检查
        for (i = index; i > 0; i -= LONG - 1) {
            if (squares[i] !== currentSquares) {
                break;
            }
            count++;
        }
        for (i = index + LONG - 1; i < LONG * LONG; i += LONG - 1) {
            if (squares[i] !== currentSquares) {
                break;
            }
            count++;
        }
        if (count === 5) {
            this.setState({
                isWin: currentSquares,
            });
            return true;
        } else {
            count = 0;
        }

        // 135度方向检查
        for (i = index; i > 0; i -= LONG + 1) {
            if (squares[i] !== currentSquares) {
                break;
            }
            count++;
        }
        for (i = index + LONG + 1; i < LONG * LONG; i += LONG + 1) {
            if (squares[i] !== currentSquares) {
                break;
            }
            count++;
        }
        if (count === 5) {
            this.setState({
                isWin: currentSquares,
            });
            return true;
        } else {
            count = 0;
        }

        return false;
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));
