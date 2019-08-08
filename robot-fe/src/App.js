import React from 'react';
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import Login from '../src/login/index';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
