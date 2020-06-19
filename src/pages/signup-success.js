import React from 'react';

import { Helmet } from 'react-helmet';
import Layout from './layout';

import './signup-success.css';

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
          <title> 注册成功-PPMESSAGE </title>
          <meta name="keywords" content="注册成功 智能在线客服" />
          <meta name="description" content="注册成功 30天免费全功能试用，满意付款，智能在线客服，满足您的个性化需求。申请演示，体验最新的智能在线客服系统。" />
        </Helmet>

        <div className="signup-success-container">
          <div>
            注册成功，您可以使用您的帐号密码登录了。
          </div>
          <div>
            <button onClick={(event) => {
              window.open('https://sign.ppmessage.cn/signin');
            }}>登录PPMESSAGE</button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RequestDemoFailed;