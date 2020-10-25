import React from "react";
import UndefinedPage from "../view/404/index";
import IndexPage from "../view/index/index";
const routes = [{
  path: "/",
  exact: true,
  render(props){
    return <IndexPage {...props} />
  }
},{
  path: "",
  exact: false,
  render(props){
    return <UndefinedPage {...props} />
  }
}];
const navs=[
  {
      title: "首页",
      to: "/"
  },{
      title:"新手入门",
      to: "/getstart"
  },{
      title:"API",
      to: "/api"
  },{
      title:"关于",
      to: "/about"
  }
];
const indexNavs = [
  {
      title: "全部",
      to:"/?tab=all"
  },{
      title: "精华",
      to:"/?tab=good"
  },{
      title: "分享",
      to:"/?tab=share"
  },{
      title: "问答",
      to:"/?tab=ask"
  },{
      title: "招聘",
      to:"/?tab=job"
  },{
      title: "客户端测试",
      to:"/?tab=dev"
  }
]
export {routes,navs,indexNavs};