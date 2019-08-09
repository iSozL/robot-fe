import React from 'react';
import { Menu, Icon, Switch } from 'antd';

const { SubMenu } = Menu;

class SiderBar extends React.Component {
  render() {
    return (
      <div>
        <Menu
          style={{ width: 200, height: "46rem" }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={"inline"}
          theme={"light"}
        >
          <Menu.Item key="1">
            <Icon type="home" />
            首页
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="question-circle" />
            更多功能
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SiderBar;