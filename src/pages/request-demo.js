import React from 'react';

import { Helmet } from 'react-helmet';
import Layout from './layout';
import Notifications, {notify} from 'react-notify-toast';


import './request-demo.css';

class RequestDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_check: false,
      user_fullname: "",
      user_mobile: "",
      user_company: "",
      user_job_title: ""
    };

    this.handleUserFullNameChange = this.handleUserFullNameChange.bind(this);
    this.handleUserJobTitle = this.handleUserJobTitle.bind(this);
    this.handleUserCompany = this.handleUserCompany.bind(this);
    this.handleUserMobileChange = this.handleUserMobileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserFullNameChange(event) {
    this.setState({start_check: false});
    this.setState({ user_fullname: event.target.value });
  }

  handleUserMobileChange(event) {
    this.setState({start_check: false});
    this.setState({ user_mobile: event.target.value });
  }

  handleUserCompany(event) {
    this.setState({start_check: false});
    this.setState({ user_company: event.target.value });
  }

  handleUserJobTitle(event) {
    this.setState({start_check: false});
    this.setState({user_job_title:event.target.value});
  }

  _show_request_demo_error() {
    notify.show(
      <div>
        申请演示发现错误, 所有字段都需要填写
      </div>, 'error', 5000
    );
  }

  _show_request_demo_success() {
    notify.show(
      <div>
          我们已经收到您的申请,我们会安排专门的技术人员与您联系演示事宜.
      </div>, 'success', 5000
    );
  }

  _valid_field(field_name) {
    if (!this.state.start_check) {
      return true;
    }

    if (!this.state[field_name]) {
      return false;
    }
    if (this.state[field_name].length < 2) {
      return false;
    }
    if (field_name == 'user_mobile' && this.state.user_mobile.length != 11) {
      return false;
    }
    return true;
  }

  _render_valid_field(field_name) {
    if (this._valid_field(field_name)) {
      return null;
    }
    return <div className="request-demo-invalid-input">无效输入</div>
  }

  _check_request_fields() {
    this.setState({start_check: true});
    if (!this.state.user_fullname || this.state.user_fullname.length < 2) {
      return false;
    }

    if (!this.state.user_mobile || this.state.user_mobile.length != 11) {
      return false;
    }

    if (!this.state.user_job_title || this.state.user_job_title.length < 2) {
      return false;
    }

    if (!this.state.user_company || this.state.user_company.length < 2) {
      return false;
    }

    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this._check_request_fields()) {
      if (window.PP) {
        window.PP.requestDemo({
          user_company: this.state.user_company,
          user_fullname: this.state.user_fullname,
          user_mobile: this.state.user_mobile,
          user_job_title: this.state.user_job_title,
        });
      }
      this._show_request_demo_success();
    } else {
      this._show_request_demo_error();
    }
    return;
  }

  render() {
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
                <p>申请演示</p>
              </div>
              <div className="request-demo-subtitle">
                <p>了解行业领导者为何使用PPMESSAGE的AI聊天机器人实现自动化</p>
              </div>
            </div>

            <div className="request-demo-image-container">
              <img src={require('../images/request-demo.png')} />
            </div>

            <div className="request-demo-desc-container">

              <div className="request-demo-desc-general">
                
                <p>不仅仅是简单地用常见问题回答，PPMESSAGE鼓励您的客户自己采取行动，从而解决了90％以上的入站查询，并使您的在线业务代表能够自由地响应关键的交互。</p>

                <p>填写表格，我们将与您联系，讨论如何开始支持您的业务需求，客户参与策略和推广目标。</p>
              </div>
              <div className="request-demo-desc-ul">
                <p>让我们向您展示PPMESSAGE如何：</p>
                <ul>
                  <li>
                    <p>
                      能在短短的几分钟钟内以多种语言构建和修改引人入胜的内容
                    </p>
                  </li>
                  <li>
                    <p>
                      积极主动地进行追加销售，创造独特的客户旅程
                    </p>
                  </li>
                  <li>
                    <p>通过向现场人员的无缝切换实现全渠道支持</p>
                  </li>
                  <li>
                    <p>提供实时数据以改善客户体验并提高参与度</p>
                  </li>
                  <li>
                    <p>提供持续咨询，通过数字化转型为企业发展提供支持</p>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          <div className="request-demo-right-container">
            <form onSubmit={this.handleSubmit}>
              <div className="request-demo-input-container">
                <div>
                  <input placeholder="姓名*" value={this.state.user_fullname} onChange={this.handleUserFullNameChange} />
                  {this._render_valid_field('user_fullname')}
                </div>
              </div>
              <div className="request-demo-input-container">
                <div>
                  <input placeholder="手机*" value={this.state.user_mobile} onChange={this.handleUserMobileChange} />
                  {this._render_valid_field('user_mobile')}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="request-demo-input-container">
                  <div>
                    <input placeholder="公司名称*" value={this.state.user_company} onChange={this.handleUserCompany} />
                    {this._render_valid_field('user_company')}
                  </div>
                </div>
                <div className="request-demo-input-container">
                  <div>
                    <input placeholder="职位*" value={this.state.user_job_title} onChange={this.handleUserJobTitle} />
                    {this._render_valid_field('user_job_title')}
                  </div>
                </div>

              </div>

              <div className="request-demo-input-desc-container">
                <p>直接联系销售部门的人员，您可以致电 <strong>+86-10-64188187</strong>。</p>

                <p>使用您提供给我们会与您联系。</p>

                <p>提交此表格，即表示您同意允许PPMESSAGE收集以上提交的个人信息。</p>
              </div>

              <div className="request-demo-input-container">
                <Notifications />
                <input type="submit" value="申请演示"></input>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RequestDemo;
