import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Main from './components/Main';
import Employees from './components/Employees';

ReactDOM.render(
  <BrowserRouter>
    <App >
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/employees" component={Employees} />
      </Switch>
    </App>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
