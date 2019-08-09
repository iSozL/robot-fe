import React from "react";
import "./index.css";
class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="header-title">
          浩浩机器人
        </div>
        <div className="userInfo">
          <img src={window.localStorage.getItem('userImage')} />{window.localStorage.getItem('username')}
        </div>
      </div>
    );
  }
}
export default Head;
