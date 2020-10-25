import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
function Nav(props) {
    const {data,theme="light",style={},selected=()=>{}} = props;
    const location = useLocation();
    const key = selected(location);
    return <Menu 
      mode="horizontal"
      theme={theme}
      selectedKeys={[key]}
      style={style}
    >{
        data.map((item,index)=><Menu.Item key={index}>
          <Link to={item.to}>{item.title}</Link>
        </Menu.Item>)
    }</Menu>
}

export default Nav;