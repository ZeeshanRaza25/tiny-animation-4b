import React from 'react';
import { Card } from 'antd';


const Samples = () => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 260 }}
        cover={<img alt="example" height="70%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Scripted Chatbot" description="Conversation design guidelines such as chatbot
         personality, flowcharts, and scripts helped me convert complex mattress fitting data into simple
          dialogue for a scripted chatbot that guides customers in choosing the right mattress for their weight range."
        />
      </Card>
    </div>
  )
}

export default Samples;
