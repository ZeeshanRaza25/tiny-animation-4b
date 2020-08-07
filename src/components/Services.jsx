import React from 'react'
import { Typography, Row, Col } from 'antd';
import useWebAnimations from "@wellyshen/use-web-animations";

const Services = () => {
  const { Paragraph } = Typography;

  const serviceA = useWebAnimations({
    keyframes: {
      transform: "translatex(35px)"
    },
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });
  const serviceB = useWebAnimations({
    keyframes: {
      transform: "translatex(35px)"
    },
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });
  const serviceC = useWebAnimations({
    keyframes: {
      transform: "translatex(35px)"
    },
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  return (
    <>
      <Row justify="space-around" style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 100%)',
        // height: '120vh',
        paddingTop: '15vh',
        paddingBottom: '15vh',
      }}>
        <Col xs={24} sm={12} style={{
          paddingTop: '3vh'
        }}>
          {/* <img src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" alt="middle" /> */}
          <img ref={serviceA.ref} style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }} src="https://www.cortexcopywriter.com/img/services/services-6.svg" alt="bottom-svg" />
        </Col>
        <Col xs={24} sm={12}>
          <div>
            <p style={{
              fontSize: '50px',
              fontWeight: '500',
              color: 'white',
              paddingLeft: '50px'
            }}>
              UX Writing
      </p>
            <Paragraph style={{
              fontSize: '18px',
              fontWeight: '400',
              padding: '50px',
              paddingTop: '0px',
              // paddingRight: '182px',
              // paddingLeft: ' 0px',
              color: 'white',
              display: 'block',
              marginBlockStart: '1em',
              marginBlockEnd: '1em',
              marginInlineStart: '0px',
              marginInlineEnd: '0px',
            }} >I develop clear and useful text in product interfaces to help users reach a specific goal,
              whether that's completing a form or tapping a button. This includes every type of content from
              on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.
    </Paragraph>
          </div>
        </Col>
      </Row>
      <Row justify="space-around" style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 100%)',
        // height: '100vh',
        paddingTop: '15vh',
        paddingBottom: '15vh',
      }}>
        <Col xs={24} sm={12}>
          <div>
            <p style={{
              fontSize: '50px',
              fontWeight: '500',
              color: 'white',
              paddingLeft: '50px'
            }}>
              Website Copywriting
      </p>
            <Paragraph style={{
              fontSize: '18px',
              fontWeight: '400',
              padding: '50px',
              paddingTop: '0px',
              // paddingRight: '182px',
              // paddingLeft: ' 0px',
              color: 'white',
              display: 'block',
              marginBlockStart: '1em',
              marginBlockEnd: '1em',
              marginInlineStart: '0px',
              marginInlineEnd: '0px',
            }} >Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly.
              Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw
              the map that guides users every step of the way from discovery, to consideration, to conversion.
      </Paragraph>
          </div>
        </Col>
        <Col xs={24} sm={12} style={{
          paddingTop: '3vh'
        }}>
          <img ref={serviceB.ref} style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }} src="https://www.cortexcopywriter.com/img/services/services-7.svg" alt="bottom-svg" />
        </Col>
      </Row>
      <Row justify="space-around" style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 100%)',
        // height: '100vh',
        textAlign: 'left',
        paddingTop: '15vh',
        paddingBottom: '15vh',
        // paddingTop: '5vh'
      }}>
        <Col xs={24} sm={12} style={{
          paddingTop: '8vh'
        }}>
          <img ref={serviceC.ref} style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }} src="https://www.cortexcopywriter.com/img/services/services-5.svg" alt="bottom-svg" />
        </Col>
        <Col xs={24} sm={12}>
          <div style={{
            paddingBottom: '10vh',
            paddingTop: '10vh'
          }}>
            <h1 style={{
              fontSize: '50px',
              fontWeight: '500',
              color: 'white',
              paddingLeft: '50px',
              // marginTop: '10vh'
            }}>
              Content Writing
            </h1>
            <Paragraph style={{
              fontSize: '18px',
              fontWeight: '380',
              padding: '50px',
              paddingTop: '0px',
              // paddingRight: '182px',
              // paddingLeft: ' 0px',
              paddingBottom: '0px',
              color: 'white',
              display: 'block',
              marginBlockStart: '1em',
              marginBlockEnd: '1em',
              marginInlineStart: '0px',
              marginInlineEnd: '0px',
              lineHeight: '1'
            }}>
              Give your business a competitive edge with powerful content that can be targeted to any segment of your audience.
              No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies
              will help you implement a plan that maximizes your business’s online exposure.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Services;
