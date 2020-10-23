import { createStore } from "redux";
function reducer (state = {
    data: [
        {
            id: 0,
            title: "这是第一条todo",
            done: false
        }, {
            id: 1,
            title: "这是第二条todo",
            done: true
        }
    ]
}, action) {
    let nowData = [...state.data];
    switch (action.type) {
        case "ADD":
            return {
                data: [...nowData, {
                    id: Date.now(),
                    title: action.title,
                    done: false
                }]
            }
        case "EDIT":
            nowData.forEach((item, index) => {
                if (item.id === action.id) {
                    nowData[index] = {
                        ...item,
                        title: action.title
                    }
                }
            })
            return {
                data: nowData
            }
        case "REMOVE":
            nowData = nowData.filter(item => item.id !== action.id);
            return {
                data: nowData
            }
        case "REMOVEDONE":
            nowData = nowData.filter(item => !item.done);
            return {
                data: nowData
            }
        case "CHANGEDONE":
            nowData.forEach((item, index) => {
                if (item.id === action.id) {
                    nowData[index] = {
                        ...item,
                        done: action.done
                    }
                }
            })
            return {
                data: nowData
            }
    }
    return state;
}
const store = createStore(reducer);
export { store };