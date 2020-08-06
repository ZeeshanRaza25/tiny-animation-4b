import React from 'react'
import { Typography, Row, Col } from 'antd';

const Services = () => {
  const { Paragraph } = Typography;

  return (
    <>
      <Row justify="space-around" style={{
        backgroundImage:
          // 'linear-gradient(-225deg, #321575 0%, #8D0B93 50%, #FF057C 100%)',
          'linear-gradient(90deg, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 100%)',
        height: '120vh',
        paddingTop: '20vh'
      }}>
        <Col xs={24} sm={12} style={{
          paddingTop: '3vh'
        }}>
          {/* <img src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" alt="middle" /> */}
          <img style={{
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
            {/* <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingLeft: '60px',
            color: 'white',
            lineHeight: '24px',
            fontSize: '18px',
          }}>
            {
              ['Microcopy',
                'Taxonomy & Labeling',
                'Chatbots',
                'User Research',
                'Content Style Guide',
                'User Testing',
                'Design Principles',
                'Prototype'].map(item => {
                  return <ul key={item}
                  //  style={{
                  //   padding: '8px',
                  //   margin: '2px'
                  // }}
                  >
                    • {item}
                  </ul>
                })
            }
          </div> */}
          </div>
        </Col>
      </Row>
      <Row justify="space-around" style={{
        backgroundImage:
          // 'linear-gradient(-225deg, #321575 0%, #8D0B93 50%, #FF057C 100%)',
          'linear-gradient(90deg, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 100%)',
        height: '100vh',
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
            {/* <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingLeft: '60px',
            color: 'white',
            lineHeight: '24px',
            fontSize: '18px',
          }}>
            {
              ['Information Architecture',
                'Wireframes',
                'Competitor Analysis',
                'On-page SEO',
                'Off-page SEO',
                'USP/UVP',
                'Landing Page',
                'Sales Letter'].map(item => {
                  return <ul key={item}
                    // style={{
                    //   padding: 'px',
                    //   margin: '2px'
                    // }}
                  >
                    • {item}
                  </ul>
                })
            }
          </div> */}
          </div>
        </Col>
        <Col xs={24} sm={12} style={{
          paddingTop: '3vh'
        }}>
          {/* <img src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" alt="middle" /> */}
          <img style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }} src="https://www.cortexcopywriter.com/img/services/services-7.svg" alt="bottom-svg" />
        </Col>
      </Row>
      <Row justify="space-around" style={{
        backgroundImage:
          // 'linear-gradient(-225deg, #321575 0%, #8D0B93 50%, #FF057C 100%)',
          'linear-gradient(90deg, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 100%)',
        height: '100vh',
        textAlign: 'left',
        // paddingTop: '5vh'
      }}>
        <Col xs={24} sm={12} style={{
          paddingTop: '8vh'
        }}>
          {/* <img src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" alt="middle" /> */}
          <img style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
          }} src="https://www.cortexcopywriter.com/img/services/services-5.svg" alt="bottom-svg" />
        </Col>
        <Col xs={24} sm={12}>
          {/* <div> */}
            <h1 style={{
              fontSize: '50px',
              fontWeight: '500',
              color: 'white',
              paddingLeft: '50px',
              paddingTop: '7vh'
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
            }} >Give your business a competitive edge with powerful content that can be targeted to any segment of your audience.
              No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies
              will help you implement a plan that maximizes your business’s online exposure.
              </Paragraph>
            {/* <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingLeft: '60px',
              color: 'white',
              lineHeight: '24px',
              fontSize: '18px',
            }}>
              {
                ['Headlines & Taglines',
                  'Content Strategy',
                  'Blogs & Articles',
                  'Social Media Content',
                  'Video Scripts',
                  'eDMs & Newsletters',
                  'Case Studies',
                  'Whitepapers'].map(item => {
                    return <ul key={item} style={{
                      padding: '8px',
                      margin: '2px'
                    }}>
                      • {item}
                    </ul>
                  })
              }
            </div> */}
          {/* </div> */}
        </Col>
      </Row>
    </>
  )
}

export default Services;
