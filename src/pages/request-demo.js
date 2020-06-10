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
                  <div className="request-demo-title-container">
                      <div className="request-demo-title">
                          申请演示
                      </div>
                      <div className="request-demo-subtitle">
                          了解行业领导者为何使用PPMESSAGE的AI聊天机器人实现自动化
                      </div>
                  </div>                  

                  <div className="request-demo-image-container">
                      <img src={require("../images/request-demo.png")} />
                  </div>                  
                  
                  <div className="request-demo-desc-container">

                      <div className="request-demo-desc-general">
                          <p> PPMESSAGE使高度了解您的客户的利益相关者能够以高度的个性化和成熟度，并且不需要任何编码技能，就可以最佳地构建，启动和部署自动客户体验。</p>

                          <p>不仅仅是简单地用常见问题回答FAQ，PPMESSAGE鼓励您的客户自己采取行动，从而解决了70％以上的入站查询，并使您的在线业务代表能够自由地响应关键的交互。</p>

                          <p>填写表格，我们将与您联系，讨论如何开始支持您的业务需求，客户参与策略和储蓄目标。</p>
                      </div>
                      <div className="request-demo-desc-ul">
                          <p>让我们向您展示Ada如何：</p>
                          <ul>
                              <li>使任何人都能在短短的几秒钟内以超过100种语言构建和修改引人入胜的内容</li>
                              <li>积极主动地进行追加销售，创造独特的客户旅程</li>
                              <li>通过向现场人员的无缝切换实现全渠道支持</li>
                              <li>提供实时数据以改善客户体验并提高参与度</li>
                              <li>提供持续咨询，以通过数字化转型为企业提供支持</li>
                          </ul>
                      </div>
                      
                  </div>                  
                  
              </div>

              
              <div className="request-demo-right-container">
                  <div className="request-demo-input-container">
                      <label>姓名*</label>
                      <input />
                  </div>
                  <div className="request-demo-input-container">
                      <label>手机*</label>
                      <input />
                  </div>
                  <div>
                      <div className="request-demo-input-container">
                          <label>公司名称*</label>
                          <input />
                      </div>
                      <div className="request-demo-input-container">
                          <label>职位*</label>
                          <input />
                      </div>

                  </div>

                  <div className="request-demo-input-desc-container">
                      <p>要直接与我们的销售部门的人员交谈，您还可以致电 +86-10-64188187。</p>

                      <p>使用您提供给我们的信息来就您的相关内容，产品和服务与您联系。您可以随时退订。</p>

                      <p>提交此表格，即表示您同意允许PPMESSAGE收集以上提交的个人信息。</p>
                  </div>

                  <div className="request-demo-input-container">
                      <buttton>申请演示</buttton>
                  </div>
                  
              </div>
          </div>
      </Layout>
  )
}    
