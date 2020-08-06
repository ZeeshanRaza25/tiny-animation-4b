import React from 'react'
// import { PageHeader } from 'antd';
import { Typography, Row, Col } from 'antd';

const MyHeader = () => {
  const { Title } = Typography;
  return (
    <Row justify="center" style={{
      backgroundImage:
        'linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)',
      // height: '25vh',
      textAlign: 'center',
      color: 'white',
    }}>
      <Col xs={24} sm={24} >
        <Title level={3} style={{
          color: 'white',
          fontWeight: 'bold',
        }}>Tiny Animation</Title>
      </Col>
    </Row>
  )
}

export default MyHeader;