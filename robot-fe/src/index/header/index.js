import React from "react";
import "./index.css";
import { Menu, Dropdown, message } from "antd";
class Head extends React.Component {
  logout() {
    localStorage.clear();
    message.success("已退出");
    window.location.href = "/login";
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <div onClick={this.logout}>退出</div>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div className="header-title">浩浩机器人</div>
        <div className="userInfo">
          <Dropdown overlay={menu}>
            <img src={window.localStorage.getItem("userImage")} alt="登录" />
          </Dropdown>
          {window.localStorage.getItem("username")}
        </div>
      </div>
    );
  }
}
export default Head;
