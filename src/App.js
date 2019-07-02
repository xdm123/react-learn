import React, { Component, Fragment } from 'react';
import Nav from './components/nav/nav'
import {withRouter} from "react-router-dom"; 
import Router from './router/router.js'

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Fragment>
        <Nav />
        <div>
          <Router />
        </div>
      </Fragment>
    )
  }
}

export default withRouter(App);
