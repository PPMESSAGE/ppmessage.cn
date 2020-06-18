import React from 'react';

import { Helmet } from 'react-helmet';
import Layout from './layout';

import './request-demo-failed.css';

class RequestDemoFailed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Layout>

        <Helmet>
          <title> 预约演示失败-PPMESSAGE </title>
          <meta name="keywords" content="预约演示 智能在线客服" />
          <meta name="description" content="预约演示失败 30天免费全功能试用，满意付款，智能在线客服，满足您的个性化需求。申请演示，体验最新的智能在线客服系统。" />
        </Helmet>

        <div className="request-demo-failed-container">
          <div>
            预约演示遇到问题。您可以重新预约或者直接跟我们的客服人员联系。
          </div>
          <div>
            <button onClick={(event) => {
              if (window.PP) {
                window.PP.open();
              }
            }}>联系在线客服</button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RequestDemoFailed;