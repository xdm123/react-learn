import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './reset.css'
import App from './App';

const Root = () => {
  return (
      <BrowserRouter>
          <Route component={App}></Route>
      </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

