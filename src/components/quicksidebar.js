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
            <div>
              <div><img src={require('../images/svg/phone.svg')} /></div>
              <p>联系电话</p>
            </div>
          </div>
          <div className="quick-side-bar-item">
            <div>
              <div><img src={require('../images/svg/phone.svg')} /></div>
              <p>联系电话</p>
            </div>
          
          </div>
          <div className="quick-side-bar-item">
            <div>
              <div><img src={require('../images/svg/phone.svg')} /></div>
              <p>联系电话</p>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default QuickSideBar;