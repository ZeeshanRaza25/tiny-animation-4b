import React from 'react';
import { Row, Col, Card, Typography } from 'antd';

const data = [
  {
    alt: "Scripted Chatbot",
    scr: "https://www.cortexcopywriter.com/img/samples/chatbot.jpg",
    title: 'Scripted Chatbot',
    desc: "Conversation design guidelines such as chatbot personality, flowcharts, and scripts helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot that guides customers in choosing the right mattress for their weight range."
  },
  {
    alt: "User Onboarding",
    scr: "https://www.cortexcopywriter.com/img/samples/speedpix.jpg",
    title: 'User Onboarding',
    desc: "As the sole UX writer on a product team building the 'Uber of marketing', I wrote and designed web copy, microcopy, notifications, forms, FAQs, sales video script, automated emails, signup page, login page, pricing page, checkout page, and more."
  },
  {
    alt: "Product Development",
    scr: "https://www.cortexcopywriter.com/img/samples/startscale.jpg",
    title: 'Product Development',
    desc: "Conversation design guidelines such as chatbot personality, flowcharts, and scripts helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot that guides customers in choosing the right mattress for their weight range."
  },
];


const data1 = [
  {
    alt: "Rebranding Campaign",
    scr: "https://www.cortexcopywriter.com/img/samples/blaze_sample.jpg",
    title: 'Rebranding Campaign',
    desc: 'I developed a new brand voice and brand identity – content style guide, design system, brand name, logo, tagline, and website – to improve communications and online presence.'
  },
  {
    alt: "Facebook Ads",
    scr: "https://www.cortexcopywriter.com/img/samples/adgroove_sample.jpg",
    title: 'Facebook Ads',
    desc: 'I’ve lost count of how many Facebook ads I’ve written. My general strategy for writing ads with limited space is to make sure the copy focuses on a single, specific thought, and shows empathy. Check out some of my recent ads.'
  },
  {
    alt: "Explainer Video",
    scr: "https://www.cortexcopywriter.com/img/samples/purelearning_sample.jpg",
    title: 'Explainer Video',
    desc: 'Here’s a screenshot for a video I wrote, storyboarded, and directed. The aim was to build awareness for an eLearning company. The copy – which inspired the audience to think, feel, and act – helped increase sales by 9.86%.'
  },
  {
    alt: "YouTube Ad",
    scr: "https://www.cortexcopywriter.com/img/samples/startscale.jpg",
    title: 'YouTube Ad',
    desc: 'Here is Groovysaurus Rex – the company mascot in a 3D animated video advertisement which I wrote, storyboarded, and directed. The ad ran for 30 days and yielded 19 conversions, with a 67% view rate.'
  },
  {
    alt: "Pilot Screenplay",
    scr: "https://www.cortexcopywriter.com/img/samples/rayvonsnest_sample.jpg",
    title: 'Pilot Screenplay',
    desc: 'Screenwriting is one of my specialties. My award-winning, original, sci-fi, adult animated, pilot screenplay has successfully been pitched to production companies in the USA and Australia.'
  }
];

const Samples = () => {
  const { Meta } = Card;
  const { Title } = Typography;

  return (
    <div style={{
      backgroundImage:
        // 'linear-gradient(-225deg, #321575 0%, #8D0B93 50%, #FF057C 100%)',
        'linear-gradient(90deg, rgba(108,17,119,100) 0%, rgba(206,2,189,1) 100%)',
      // height: '50vh',
      textAlign: 'left',
    }}>
      <Row justify="center">
        <Col xs={6} sm={4}>
          <Title level={3} style={{
            width: '160px',
            height: '50px',
            background: `var(--gradient_5)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: '0.2s',
            // backgroundImage: 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)',
            fontWeight: 'bold',
            fontSize: '23px',
            marginTop: '40%',
            color: 'white',
            backgroundColor: '#6c1177',
            textAlign: 'center'
          }}>
            Sample
      </Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={6} sm={4}>
          <Title level={3} style={{
            width: '150px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: '0.2s',
            fontWeight: 'normal',
            fontSize: '25px',
            marginTop: '25%',
            color: 'white',
          }}>
            Useful UX
          </Title>
        </Col>
      </Row>
      <Row justify="center" align="middle" gutter={0} style={{
        marginTop: '70px'
      }}>
        {data.map(item => {
          return <Col key={item.title} xs={22} sm={7}>
            <Card
              hoverable
              style={{ margin: '25px' }}
              cover={<img alt={item.alt} height="100%" src={item.scr} />}
            >
              <Meta title={item.title} description={item.desc} />
            </Card>
          </Col>
        })}
      </Row>
      <Row justify="center">
        <Col xs={6} sm={4}>
          <Title level={3} style={{
            width: '150px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: '0.2s',
            fontWeight: 'normal',
            fontSize: '25px',
            marginTop: '25%',
            color: 'white',
            textAlign: 'center',
          }}>
            Digital Copy
          </Title>
        </Col>
      </Row>
      <Row justify="center" align="middle" gutter={0}
        style={{
          marginTop: '70px', paddingBottom: '100px'
        }}>
        {data1.map(item => {
          return <Col key={item.title} xs={20} sm={7}>
            <Card
              hoverable
              style={{ width: 320, marginTop: '25px' }}
              cover={<img alt={item.alt} height="100%" src={item.scr} />}
            >
              <Meta title={item.title} description={item.desc} />
            </Card>
          </Col>
        })}
      </Row>
    </div>
  )
}

export default Samples;
