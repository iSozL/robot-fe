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
import Layouts from '../src/utils/routeUtils';
import SentencePlugin from '../src/index/content/sentencePlugin/sentencePlugin';
function App() {
  const OtherPage = (
    <Layouts>
      <Route exact path="/" component={Index} />
      <Route path="/sentence" component={SentencePlugin} />
    </Layouts>
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
