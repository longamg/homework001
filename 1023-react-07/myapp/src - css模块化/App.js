import React,{Component, Fragment} from 'react'
import style from "./index.module.css";
import Child from './child'
class App extends Component {
    render(){
      return <Fragment>
            <div className={style.div +" public" }>hello</div>
            <div id={style.box}>box</div>
            <div className={style.box}>box2</div>
            <Child />
            <h1 className={style.name}>title</h1>
      </Fragment>
    }
}
export default App;
