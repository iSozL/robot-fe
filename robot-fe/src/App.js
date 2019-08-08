import React from 'react';
// import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import Login from '../src/login/index';
import Index from '../src/index/index'
import Layout from '../src/utils/routeUtils';
function App() {
  const OtherPage = (
    <Layout>
      <Route exact path="/" component={Index} />
    </Layout>
  )
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={props => OtherPage} />
      </Switch>
    </Router> 
  );
}

export default App;
