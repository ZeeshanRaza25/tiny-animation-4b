import React from 'react'
import { Typography, Row, Col } from 'antd';
import Aboutimg from '../assets/About.png';

const About = () => {
  const { Paragraph, Title } = Typography;

  return (
    <Row justify="space-around" style={{
      backgroundImage:
        // 'linear-gradient(to top, #580192 0%, #5C1094 100%)',
        'linear-gradient(to right, #860091, #662975)',
      height: '130vh',
      paddingTop: '15vh'
    }}>
      <Col xs={24} sm={12} style={{
        // paddingTop: '20vh',
        justifyItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'initial',
        // marginTop: '50px',
        textAlign: 'center',
      }}>
        {/* <img src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" alt="middle" /> */}
        {/* <img width="100%" src="https://www.cortexcopywriter.com/img/services/services-5.svg" alt="bottom-svg" /> */}
        <img sizes={250} src={Aboutimg} alt="about" />
        <br />
        <p style={{
          color: 'white',
          marginTop: '20px',
          fontSize: '15px',
          marginBottom: '20px',
          fontWeight: '200',
        }}><strong>Nathan Mudaliar</strong><i>, the Cortex Copywriter</i></p>
      </Col>
      <Col xs={24} sm={12} style={{
        // marginTop: '60px',
        textAlign: 'left',
        // marginTop: '50px',
        // paddingTop: '20vh',
      }}>
        <Title level={2} style={{
          width: '150px',
          height: '50px',
          borderColor: '#5C1094',
          // padding: '10px',
          background: `var(--gradient_5)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: '0.2s',
          backgroundImage: 'linear-gradient(-20deg, #5C1094 0%, #5C1094 100%)',
          fontWeight: 'normal',
          fontSize: '22px',
          color: 'white',
          // paddingBottom: '5px'
        }}>
          About
          </Title>
        <Paragraph style={{
          fontSize: '21px',
          fontWeight: '400',
          // padding: '40px',
          paddingTop: '10px',
          // paddingRight: '182px',
          paddingLeft: ' 0px',
          color: 'white',
          display: 'block',
          marginBlockStart: '1em',
          marginBlockEnd: '1em',
          marginInlineStart: '0px',
          marginInlineEnd: '0px',
          paddingBottom: '0px',
          marginBottom: '0px',
        }} >My copywriting and UX writing draws on abilities developed in the psychological sciences.
          </Paragraph>
        <Paragraph style={{
          fontSize: '21px',
          fontWeight: '400',
          padding: '40px',
          paddingTop: '0px',
          paddingBottom: '190px',
          paddingLeft: ' 0px',
          color: 'white',
          display: 'block',
          marginBlockStart: '1em',
          marginBlockEnd: '1em',
          marginInlineStart: '0px',
          marginInlineEnd: '0px',
        }} >Expertise in visual perception, behavioral motivation, and decision-making allows me to
          engineer words that convert customers and guide users.
          </Paragraph>
      </Col>
    </Row>
  )
}

export default About