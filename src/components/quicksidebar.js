import React from 'react';

import './quicksidebar.css';
import { parsePath } from 'gatsby';

class QuickSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.openOnlineService = this.openOnlineService.bind(this);
    this.openRegisterUser = this.openRegisterUser.bind(this);
    this.openRequestDemo = this.openRequestDemo.bind(this);
  }

  openOnlineService(e) {
    if (window.PP) {
      if (!PP.isOpen()) {
        PP.open();
      } else {
        PP.close();
      }
    }
  }

  openRegisterUser(e) {
    var _url = 'https://ppmessage.cn/ppkefu/#!/app/signup';
    window.open(_url, '_blank');
  }

  openRequestDemo(e) {
    window.open('/request-demo');
  }

  render() {
    return (
      <div className="quick-side-bar-container">
        <div className="quick-side-bar-items">

          <div className="quick-side-bar-item"
            onClick={this.openOnlineService}
            role="button" tabIndex={0}>
            <div className="quick-side-bar-item-wrapper">
              <div><img src={require('../images/svg/support_agent-24px.svg')} /></div>
              <p>客服</p>
            </div>
          </div>

          <div className="quick-side-bar-item" 
            onClick={this.openRegisterUser}
            role="button" tabIndex={0}>
            
            <div className="quick-side-bar-item-wrapper">
              <div><img src={require('../images/svg/how_to_reg-24px.svg')} /></div>
              <p>注册</p>
            </div>
          </div>

          <div className="quick-side-bar-item"
            onClick={this.openRequestDemo}
            role="button" tabIndex={0}>
            <div className="quick-side-bar-item-wrapper">
              <div><img src={require('../images/svg/airplay-24px.svg')} /></div>
              <p>演示</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default QuickSideBar;