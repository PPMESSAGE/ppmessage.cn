import React from 'react';

import EnterYourMobile from '../components/enteryourmobile';
import TabsControl from '../components/tabscontrol';
import WorthCompany from '../components/worthcompany'
import { Helmet } from 'react-helmet';
import Layout from './layout';
import PPButton from '../components/buttton';

import './request-demo.css';

export default () => {
  return (
    <Layout>
      <Helmet>
        <title> 智能在线客服-申请演示-PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统 </title>
        <meta name="keywords" content="智能在线客服演示，网站智能机器人演示，智能客服使用演示，云呼叫中心使用演示" />
        <meta name="description" content="30天免费全功能试用，满意付款，智能在线客服，满足您的个性化需求。申请演示，体验最新的智能在线客服系统。" />
      </Helmet>
      <div className="request-demo-container">
        <div className="request-demo-left-container">

        </div>
        <div className="request-demo-right-container">

        </div>
      </div>
    </Layout>
  )
}    
