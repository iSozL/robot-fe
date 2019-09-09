import React from "react";
// import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "../src/login/index";
import Index from "../src/index/index";
import Layouts from "../src/utils/routeUtils";
import SentencePlugin from "../src/index/content/sentencePlugin/sentencePlugin";
import ReplyTime from "../src/index/content/replyTime/replyTime";
import Egg from "../src/index/content/egg/egg";
import More from "../src/index/more/index";
import testImg from "../src/login/imageTest/index"
function App() {
  const OtherPage = (
    <Layouts>
      <Route exact path="/" component={Index} />
      <Route path="/sentence" component={SentencePlugin} />
      <Route path="/reply" component={ReplyTime} />
      <Route path="/egg" component={Egg} />
      <Route path="/more" component={More} />
    </Layouts>
  );
  const isValue = testImg(localStorage.getItem("userImage"))
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/"
          render={() =>
            window.localStorage.getItem("token") && isValue ? (
              OtherPage
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
