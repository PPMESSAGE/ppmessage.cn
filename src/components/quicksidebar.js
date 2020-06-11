import React from 'react';

import './quicksidebar.css';

class QuickSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="quick-side-bar-container">
        <div className="quick-side-bar-items">
          <div className="quick-side-bar-item">
            <div className="quick-side-bar-item-wrapper">
              <div><img src={require('../images/svg/support_agent-24px.svg')} /></div>
              <p>在线客服</p>
            </div>
          </div>
          <div className="quick-side-bar-item">
            <div className="quick-side-bar-item-wrapper">
              <div><img src={require('../images/svg/ring_volume-24px.svg')} /></div>
              <p>联系电话</p>
            </div>
          </div>
          <div className="quick-side-bar-item">
            <div className="quick-side-bar-item-wrapper">
              <div><img src={require('../images/svg/mail_outline-24px.svg')} /></div>
              <p>电子邮件</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default QuickSideBar;