import React from 'react';
import {HashRouter, Route, Switch,BrowserRouter,withRouter} from 'react-router-dom';
import Home from '../components/home/home.js'
import Doc from '../components/doc/doc.js'
import Tutorial from '../components/tutorial/tutorial.js'
import Blog from '../components/blog/blog.js'
import Support from '../components/support/support.js'

class BasicRoute extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div key={this.props.location.key}>
        <HashRouter history={BrowserRouter}>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/doc" component={Doc}/>
              <Route exact path="/tutorial" component={Tutorial}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/support" component={Support}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default withRouter(BasicRoute)
