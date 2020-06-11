import React from 'react';

import NavDropdown from '../components/navdropdown.js';
import EnterYourMobile from '../components/enteryourmobile';
import Hamburger from '../components/hamburger';

import styles from '../pages/about-css-modules.module.css';
import './navheader.css';

import { Location } from '@reach/router';

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll_top: 0,
    };
    this.scroll = this.scroll.bind(this);
  }

  scroll() {
    let _scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    this.setState({ scroll_top: _scroll_top });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
    this.scroll();
  }

  render() {

    let _navClass = 'navheader';
    if (this.state.scroll_top > 20) {
      _navClass = 'navheader-fixed';
    }

    let _header = (
      <div className={styles.heiti} style={{ 'position': 'relative' }}>
        <div className={_navClass}>
          <div className="navheader-center">

            <a href="/" className="navheader-logo" >
              <img src={require('../images/ppmessage-logo-black.png')} alt="PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统" />
            </a>

            <div className="navheader-menu">
              <div className={styles.Hamburger_div}>
                <Hamburger>
                  <div className="navheader-hamburger-container">
                    <div className={styles.g__c7_s}>

                      <div className={styles.t__h4}>
                                                产品
                      </div>
                      <div className={styles.hr__grey}></div>

                      <div style={{ height: '10px' }}></div>

                      <a href="/product" className={styles.f__no_und_aways}>
                        <div className={styles.f__medium}>
                                                    智能客服
                        </div>
                      </a>

                      <div style={{ height: '10px' }}></div>

                      <a href="/cloud-call-center" className={styles.f__no_und_aways}>
                        <div className={styles.f__medium}>
                                                    云呼叫中心
                        </div>
                      </a>
                      <div style={{ height: '10px' }}></div>
                      <a href="/intelligent-customer-service-robot" className={styles.f__no_und_aways}>
                        <div className={styles.f__medium}>
                                                    智能客服机器人
                        </div>
                      </a>
                      <div style={{ height: '10px' }}></div>
                      <a href="/business-custom" className={styles.f__no_und_aways}>
                        <div className={styles.f__medium}>
                                                    业务定制
                        </div>
                      </a>



                      <div style={{ height: '30px' }}></div>
                      <a href="/pricing" className={styles.f__no_und_aways}>
                        <font style={{ color: 'black' }}>
                          <div className={styles.t__h4}>
                                                        定价
                          </div>
                        </font>
                      </a>
                      <div style={{ height: '10px' }}></div>
                      <a href="https://ppmessage.cn/ppkefu/#!/app/signin"
                        target="_blank" rel="noopener noreferrer"
                        className={styles.f__no_und_aways}>
                        <font style={{ color: 'black' }}>
                          <div className={styles.t__h4}>
                            登录
                          </div>
                        </font>
                      </a>
                    </div>
                  </div>
                </Hamburger>
              </div>

              <div className="navheader-link">
                <NavDropdown title="产品">
                  <div style={{
                    display: 'flex',
                    flex: '0 1 auto',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                  }}>
                    <a href="/product" className={styles.f__no_und_aways}>
                      <div className="navheader-dropdown-item-title">
                                                智能客服
                      </div>
                      <div className="navheader-dropdown-item-desc">
                                                一个界面管理来自网页、邮件、电话和社交媒体的所有客户消息
                      </div>
                    </a>

                    <a href="/cloud-call-center" className={styles.f__no_und_aways}>
                      <div className="navheader-dropdown-item-title">
                                                云呼叫中心
                      </div>
                      <div className="navheader-dropdown-item-desc">
                                                支持跨时区、跨地域、多语言分布式组网，一体化客户体验与联络中心
                      </div>
                    </a>

                    <a href="/intelligent-customer-service-robot" className={styles.f__no_und_aways}>
                      <div className="navheader-dropdown-item-title">
                                                智能客服机器人
                      </div>
                      <div className="navheader-dropdown-item-desc">
                                                自主学习、人机无缝协作，提高客服满意度
                      </div>
                    </a>

                    <a href="/business-custom" className={styles.f__no_und_aways}>
                      <div className="navheader-dropdown-item-title">
                                                业务定制
                      </div>
                      <div className="navheader-dropdown-item-desc">
                                                独有的流程生成器与应用集成结合，快速满足企业业务定制需求
                      </div>
                    </a>
                  </div>

                </NavDropdown>

              </div>

              <div className="navheader-link">

                <NavDropdown title="场景">
                  <div style={{
                    display: 'flex',
                    flex: '0 1 auto',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                  }}>
                    <div>
                      <a href="/transform-customs" className={styles.f__no_und_aways}>
                        <div className="navheader-dropdown-item-title">
                                                    获取和转化销售线索
                        </div>
                        <div className="navheader-dropdown-item-desc">
                                                    获取更多商机并达成更多交易
                        </div>
                      </a>

                      <a href="/guide-attract-customers" style={{ textDecoration: 'none' }}>
                        <div className="navheader-dropdown-item-title">
                                                    引导和吸引客户
                        </div>
                        <div className="navheader-dropdown-item-desc">
                                                    将更多注册用户转化为活跃的消费客户
                        </div>
                      </a>

                      <a href="/conversion-business" style={{ textDecoration: 'none' }}>
                        <div className="navheader-dropdown-item-title">
                                                    支持并提高客户满意度
                        </div>
                        <div className="navheader-dropdown-item-desc">
                                                    通过集成多个渠道，自助服务和自动化的现代服务台提高客户满意度并提高效率
                        </div>
                      </a>
                    </div>
                  </div>
                </NavDropdown>

              </div>


              <a href="/pricing" className="navheader-link">
                                定价
              </a>

            </div>

            <div className="navheader-flex-space">

            </div>

            <div className="navheader-actions">

              <div>
                <a href="https://ppmessage.cn/ppkefu/#!/app/signin"
                  target="_blank" rel="noopener noreferrer"
                  className="navheader-signin-button">
                    登录
                </a>
              </div>

              <div>
                <a href="https://ppmessage.cn/ppkefu/#!/app/signup"
                  target="_blank" rel="noopener noreferrer"
                  className="navheader-signin-button">
                    注册
                </a>
              </div>

              <div style={{width:"120px", height:"40px"}}>
                <a href="/request-demo/"
                  target="_blank" rel="noopener noreferrer"
                  className="navheader-request-demo-button">
                    申请演示
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <Location>
        {({ location }) => {
          if (location.search == '?sheet=true') {
            return <div />;
          }
          return _header;
        }}
      </Location>
    );
  }
}

export default NavHeader;

