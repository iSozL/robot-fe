import React from "react";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

class SiderBar extends React.Component {
  render() {
    const siderData = [ 
      { iconType: "home", text: "首页" },
      { iconType: "setting", text: "更多功能(暂未开放)" }
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
              <Icon type={item.iconType} />
              {item.text}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default SiderBar;
