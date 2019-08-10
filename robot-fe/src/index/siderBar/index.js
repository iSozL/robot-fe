import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class SiderBar extends React.Component {
  render() {
    // 侧边栏项目的数据,link是跳转路由
    const siderData = [
      { iconType: "home", text: "首页", link: "/" },
      { iconType: "setting", text: "更多功能(暂未开放)", link: "/more" }
    ];
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        {siderData.map((item, index) => {
          return (
            <Menu.Item key={index + 1}>
              <Link to={item.link}>
                <Icon type={item.iconType} />
                {item.text}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default SiderBar;
