import React from 'react';
import { Layout } from 'antd';
import Head from './header/index';
import SiderBar from './siderBar/index';

const { Header, Footer, Sider, Content } = Layout;

const Index = ()=> {
  return (
    <div>
      <Layout>
      <Header>
        <Head />
      </Header>
      <Layout style={{marginTop: "20px"}}>
        <Sider style={{background: "#ffffff", marginLeft: "50px"}}>
          <SiderBar />
        </Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  )
}
export default Index;