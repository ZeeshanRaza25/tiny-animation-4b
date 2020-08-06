import React from 'react'
// import { PageHeader } from 'antd';
import { Typography, Row, Col } from 'antd';

const MyHeader = () => {
  const { Title } = Typography;
  return (
    <Row justify="center" style={{
      backgroundImage:
        // 'linear-gradient(-225deg, #321575 0%, #8D0B93 50%, #FF057C 100%)',
        'linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)',
      height: '65px',
      textAlign: 'center',
      color: 'white',
    }}>
      <Col span={24} >
        <Title level={2} style={{
          color: 'white',
          fontWeight: 'bold',
        }}>Tiny Animation</Title>
      </Col>
    </Row>
  )
}

export default MyHeader;