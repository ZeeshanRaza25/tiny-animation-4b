import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MyHeader from './components/header';
import { Row, Col, Layout } from 'antd';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
// import Samples from './components/Samples';

function App() {
  const { Content } = Layout;
  return (
    <>
      <Layout>
        <MyHeader />
        <Content>
          <Row>
            <Col span={24} style={{
              backgroundImage:
                // 'linear-gradient(-225deg, #321575 0%, #8D0B93 50%, #FF057C 100%)',
                'linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)',
              height: '3vh'
            }}></Col>
          </Row>
          <Home />
          <Services />
          <About />
          {/* <Samples /> */}
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </>
  );
}

export default App;
