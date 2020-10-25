import React,{Component} from 'react';
import { Affix, Layout } from "antd";
import Header from './component/header';
import { routes } from './router';
import { Route } from 'react-router-dom';
import {Switch} from "react-router-dom";
class App extends Component {
    render(){
      return <Layout>
          <Affix offsetTop={0}>
            <Header />
          </Affix>
          <div className="wrap">
              <Switch>
                  {routes.map((item,index)=>{
                      return <Route 
                          path={item.path}
                          exact={item.exact}
                          render={item.render}
                          key={index}
                      />
                  })}
              </Switch>
          </div>
      </Layout>
    }
}
export default App;
