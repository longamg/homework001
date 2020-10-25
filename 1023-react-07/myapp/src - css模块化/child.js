import React,{Component} from 'react'
import style from "./child.module.css";
class Child extends Component {
    render(){
      return <div className={style.div +" public" }>Child</div>
    }
}
export default Child;
