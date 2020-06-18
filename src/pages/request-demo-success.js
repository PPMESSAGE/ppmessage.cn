import React from 'react';

import { Helmet } from 'react-helmet';
import Layout from './layout';

import './request-demo-success.css';

class RequestDemoSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Layout>

        <Helmet>
          <title> 预约演示成功-PPMESSAGE </title>
          <meta name="keywords" content="预约演示 智能在线客服" />
          <meta name="description" content="预约演示成功 30天免费全功能试用，满意付款，智能在线客服，满足您的个性化需求。申请演示，体验最新的智能在线客服系统。" />
        </Helmet>

        <div className="request-demo-success-container">
          <div>
            预约演示成功，我们会安排专门的技术人员与您联系。
          </div>
        </div>
      </Layout>
    )
  }
}

export default RequestDemoSuccess;