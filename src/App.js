import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MyHeader from './components/header';
import { Layout } from 'antd';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Samples from './components/Samples';
import FooterComponent from './components/Footer';

function App() {
  const { Content, Footer } = Layout;
  return (
    <>
      <Layout>
        <MyHeader />
        <Content>
          <Home />
          <Services />
          <About />
          <Samples />
        </Content>
        <Footer style={{
          backgroundImage: 'linear-gradient(90deg, rgba(88,21,164,100) 0%, rgba(88,21,164,100) 100%)',
          height: '15%',
        }}>
          <FooterComponent />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
