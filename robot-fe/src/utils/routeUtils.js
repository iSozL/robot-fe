import React from "react";
import Head from "../index/header/index";
import { Layout, Breadcrumb } from "antd";
import SiderBar from "../index/siderBar/index";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
class Layouts extends React.Component {

  componentWillMount() {
    if(window.localStorage.getItem("token")) {
      console.log("已登录")
    } else {
      window.location.href = "/login"
    }
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <Head />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">回到首页</Link>
            </Breadcrumb.Item>
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
          RobotHao-Fe ©2019 Created by NcuHomer
        </Footer>
      </Layout>
    );
  }
}
export default Layouts;
