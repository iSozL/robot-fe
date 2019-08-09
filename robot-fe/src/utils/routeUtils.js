// import React from "react";
// class Layouts extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         {this.props.children}
//       </div>
//     );
//   }
// }

// export default Layouts;
import React from "react";
import Head from "../index/header/index";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import SiderBar from "../index/siderBar/index";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class Layouts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <Head />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <SiderBar />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
export default Layouts;
