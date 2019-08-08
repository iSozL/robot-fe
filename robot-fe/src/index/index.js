import React from 'react';
import { Layout } from 'antd';
import Head from './header/index'

const { Header, Footer, Sider, Content } = Layout;

const Index = ()=> {
  return (
    <div>
      <Layout>
      <Header>
        <Head />
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  )
}
export default Index;