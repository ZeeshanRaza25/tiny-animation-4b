import React from 'react';
import { Typography, Row, Col } from 'antd';
import { FacebookFilled, GithubFilled, MailFilled } from '@ant-design/icons';

const FooterComponent = () => {
  const { Title } = Typography;
  return (
    <>
      <Title level={1} style={{
        fontWeight: 'bold',
        fontSize: '20px',
        paddingTop: '4%',
        textAlign: 'center',
        color: 'white',
      }}>
        Interaction Design + Code by Zeeshan Raza
      </Title>
      <Row justify="center">
        <Col style={{
          color: 'white',
          // fontWeight: 'bold',
          fontSize: '30px',
          marginTop: '50px'
        }} >
          <a target="blank" style={{ color: 'white', marginRight: '10px' }}
            href="https://www.facebook.com/muhammadzeeshan008">
            <FacebookFilled />
          </a>
          <a target="blank" style={{ color: 'white', marginRight: '10px', }}
            href="https://github.com/ZeeshanRaza25">
            <GithubFilled />
          </a>
          <a style={{ color: 'white' }}
            href="mailto: zeeshanraza252627@gmail.com">
            <MailFilled />
          </a>
        </Col>
      </Row>
    </>
  )
}

export default FooterComponent;
