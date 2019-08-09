import React from "react";
import Head from "./header/index";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import SiderBar from "./siderBar/index";
import SentenceLib from "./content/homePage";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Index = () => {
  const test = false;
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
            <SentenceLib />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Index;
