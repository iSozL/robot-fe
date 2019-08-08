import React from "react";
import { Row, Col } from "antd";
import "./index.css";
class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <div className="header-title"></div> */}
        <Row>
          <Col span={5} className="header-title">浩浩机器人</Col>
          <Col span={15}></Col>
          <Col span={4}>
            <div className="userInfo">
              <img src={window.localStorage.getItem('userImage')} />{window.localStorage.getItem('username')}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Head;
