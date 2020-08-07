import React from 'react'
import { Typography, Row, Col } from 'antd';
import useWebAnimations from "@wellyshen/use-web-animations";

const Home = () => {
  const { Paragraph, Title } = Typography;
  const { ref } = useWebAnimations({
    keyframes: { transform: "translateY(90px)" },
    timing: {
      duration: 5000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });
  return (
    <Row justify="center" style={{
      backgroundImage:
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
          paddingTop: '30vh',
        }}>
          CORTEX
        {`\n`}
        COPYWRITER
        </p>
        <Paragraph style={{
          fontSize: '22px',
          fontWeight: '400',
          paddingRight: '30px',
          color: 'white',
        }}>
          Enhance your communications with psychology-based copywriting and UX writing
        </Paragraph>
        <Title level={3} style={{
          width: '200px',
          height: '50px',
          borderRadius: '25px',
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
      <Col xs={24} sm={14} style={{
        // backgroundColor: 'black',
        // height: '90vh',
        // paddingBottom: '70vh'
      }}>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img ref={ref} style={{
            height: '50%',
            width: '55%',
            position: 'relative',
            margin: 'auto',
            // backgroundColor: 'black',
          }} src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg" alt="brain" />
          <img style={{
            marginBottom: '10vh',
            marginTop: '-180px',
            // backgroundColor: 'black',
            position: 'block',
            // height: '100%',
            width: '80%',
          }} src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg" alt="bottom-svg" />
        </div>
      </Col>
    </Row >
  )
}

export default Home;
