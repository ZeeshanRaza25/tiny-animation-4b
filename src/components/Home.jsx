import React from 'react'
import { Typography, Row, Col } from 'antd';

const Home = () => {
  const { Paragraph, Title } = Typography;
  return (
    <Row justify="center" style={{
      backgroundImage:
        // 'linear-gradient(-225deg, #321575 0%, #8D0B93 50%, #FF057C 100%)',
        'linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)',
      // height: '130vh',
      textAlign: 'left',
    }}>
      <Col sm={1}></Col>
      <Col xs={24} sm={9}>
        <p style={{
          fontSize: '50px',
          fontWeight: '500',
          color: 'white',
          paddingTop: '20vh',
        }}>
          CORTEX
        {`\n`}
        COPYWRITER
        </p>
        <Paragraph style={{
          fontSize: '22px',
          fontWeight: '400',
          // padding: '50px',
          // paddingTop: ' 0px',
          paddingRight: '30px',
          // paddingLeft: ' 0px',
          color: 'white',
        }} >Enhance your communications with psychology-based copywriting and UX writing
        </Paragraph>
        <Title level={3} style={{
          width: '200px',
          height: '50px',
          borderRadius: '25px',
          // padding: '10px',
          background: `var(--gradient_5)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: '0.2s',
          backgroundImage: 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)',
          fontWeight: 'bold',
          fontSize: '19px',
          marginTop: '12%',
          // marginLeft: '10%'

        }}>
          Send a message
      </Title>
      </Col>
      <Col xs={24} sm={14}>
        <img style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          height: '90%',
          paddingBottom: '10vh'
        }} src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg" alt="bottom-svg" />
      </Col>
    </Row>
  )
}

export default Home;
