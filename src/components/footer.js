import React from 'react';
import styles from '../pages/footer-modules.module.css';
import EnterYourMobile from './enteryourmobile';
import Free from './free_trial';

import { Location } from '@reach/router'

import './footer.css'

class Footer extends React.Component {

  componentDidMount() {
    if (window.location.search == '?sheet=true') {
      return;
    }

    window.ppSettings = {
      background_color: '#3462DF',
      app_uuid: 'a600998e-efff-11e5-9d9f-02287b8c0ebf',
      server_url: 'https://ppmessage.cn'
    };

    (function () {
      var d = document;
      function l(j) {
        var a = d.createElement('script');
        a.type = 'text/javascript'; a.charset = 'utf-8';
        a.src = j;
        var b = d.getElementsByTagName('head')[0];
        b.parentNode.insertBefore(a, b);
      }
      l('https://ppmessage.cn/ppcom/assets/shim/shim.js');
    })();

    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement('script');
      hm.src = 'https://hm.baidu.com/hm.js?d4b60ce3f316297fcb6558dbaafe4ffb';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
    })();
    
    // set bd_bid in cookie
    (function() {
      function getOCPCBid(_ref, _vid) {
        if (_ref && _ref.length > 0) {
            if (_ref.indexOf(_vid+"=") > 0) {
                var _bid_index = _ref.indexOf(_vid + "=");
                _bid_index += (_vid + "=").length;
                var _bid = "";
                while(_ref[_bid_index] && _ref[_bid_index] != "&") {
                    _bid = _bid + _ref[_bid_index];
                    _bid_index += 1;
                }
                return _bid;
            }
        }
        return null;
      }

      function setCookie(key, value) {
        var _expire = new Date();
        _expire.setTime(_expire.getTime() + 24 * 3600 * 1000 * 365 * 30);
        var _expire_str = _expire.toUTCString();
        var _cookie = key + "=" + value + ";" + "domain=.ppmessage.cn;path=/;expires=" + _expire_str + ";";
        document.cookie = _cookie;
      }

      if (getOCPCBid(document.location.href, "bd_vid")) {
        setCookie("bd_vid", document.location.href);
      }
    })();

  }

  render() {
    return (
      <Location>
        {({ location }) => {
          if (location.search == '?sheet=true') {
            return <div />;
          }
          return (
            <footer className="footer">
              <div className={styles.heiti}>
                <div className="footer-container">
                  <div className="footer-container-container">
                    <div className="footer-container">
                      <div className="start-use">
                        <div className="intro">
                          <h2 className={styles.t__h2}>
                              免费试用
                          </h2>
                        </div>

                        <div className="enter-mobile">
                          <div className="enter-mobile-enter">
                            <EnterYourMobile size="middle" />
                          </div>
                          <div className={styles.u__inline}>
                            <div style={{ height: '10px' }}></div>
                            <Free />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div style={{ height: '70px' }}></div>
                  <div className={styles.container}>
                    <div className={styles.footer__row}>
                      <div className={styles.footer__links}>
                        <h4 className={styles.footer__heading}>
                          <font color="#888">产品</font>
                        </h4>
                        <div className={styles.footer__link}>
                          <a href="/product" className={styles.lianjie}>
                            <font>智能客服</font>
                          </a>
                        </div>
                        <div className={styles.footer__link}>
                          <a href="/cloud-call-center" className={styles.lianjie}>
                            <font>云呼叫中心</font>
                          </a>
                        </div>

                        <div className={styles.footer__link}>
                          <a href="/intelligent-customer-service-robot" className={styles.lianjie}>
                            <font>智能客服机器人</font>
                          </a>
                        </div>


                        <div className={styles.footer__link}>
                          <a href="/business-custom" className={styles.lianjie}>
                            <font>业务定制</font>
                          </a>
                        </div>
                      </div>


                      <div className={styles.footer__links}>
                        <h4 className={styles.footer__heading}>
                          <font color="#888">场景</font>
                        </h4>
                        <div className={styles.footer__link}>
                          <a href="/transform-customs" className={styles.lianjie}>
                            <font>获取和转化商机</font>
                          </a>
                        </div>

                        <div className={styles.footer__link}>
                          <a href="/guide-attract-customers" className={styles.lianjie}>
                            <font>引导和吸引客户</font>
                          </a>
                        </div>

                        <div className={styles.footer__link}>
                          <a href="/conversion-business" className={styles.lianjie}>
                            <font>支持并提高客户满意度</font>
                          </a>
                        </div>

                      </div>

                      <div className={styles.footer__links}>
                        <h4 className={styles.footer__heading}>
                          <font color="#888">资源</font>
                        </h4>

                        {/* <div className={styles.footer__link}>
                                                     <a href="/tutorial/" className={styles.lianjie}>
                                                     <font>帮助中心</font>
                                                     </a>
                                                     </div> */}
                        {/* <div className={styles.footer__link}>
                                                     <a href="/doc/" className={styles.lianjie}>
                                                     <font>开发者文档</font>
                                                     </a>
                                                     </div> */}

                        <div className={styles.footer__link}>
                          <a href="http://qiniu.ppmessage.cn/desktop/macos/PPMESSAGE-2.2.1.dmg" className={styles.lianjie}>
                            <font>客户端下载（macOS）</font>
                          </a>
                        </div>
                        <div className={styles.footer__link}>
                          <a href="http://qiniu.ppmessage.cn/desktop/windows/PPMESSAGE-SETUP-2.2.1.exe" className={styles.lianjie}>
                            <font>客户端下载（Windows）</font>
                          </a>
                        </div>

                      </div>


                      <div className={styles.footer__links}>
                        <h4 className={styles.footer__heading}>
                          <font color="#888">公司介绍</font>
                        </h4>
                        <div className={styles.footer__link}>
                          <a href="/about-us" className={styles.lianjie}>
                            <font>关于我们</font>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icp">
                <div>
                  <span style={{ 'marginRight': '20px' }}>© 北京优锐科技有限公司</span>
                </div>
                <div>
                  <img src={require('../images/beian-icpb.png')} style={{'width':'12px', 'height':'12px', 'marginRight': '4px'}} title="京ICP备13021343号-2" alt="京ICP备13021343号-2"/>
                  <span style={{ 'marginRight': '20px' }}>京ICP备13021343号-2</span>
                </div>
                <div>
                  <img src={require('../images/beian-gwab.png')} style={{'width':'12px', 'height':'12px', 'marginRight': '4px'}} title="京公网安备 11010502040824号" alt="京公网安备 11010502040824号"/>
                  <span>
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502040824">
                                            京公网安备 11010502040824号
                    </a>
                  </span>
                </div>
                                
              </div>
                            
                            
              <div className="seo" style={{
                'textAlign': 'center',
                'fontSize': '12px',
                'color': '#888',
                'marginBottom': '5px',
              }}>
                <span>安全，稳定，易用的&nbsp;</span>
                <a href="https://ppmessage.cn/product" title="在线客服系统">在线客服系统&nbsp;</a>
                <a href="https://ppmessage.cn/product" title="网站客服系统">网站客服系统&nbsp;</a>
                <a href="https://ppmessage.cn/marketing/" title="营销自动化">营销自动化&nbsp;</a>
                <a href="https://ppmessage.cn/cloud-call-center/" title="云呼叫中心">云呼叫中心&nbsp;</a>
                <a href="https://ppmessage.cn/intelligent-customer-service-robot/" title="客服机器人">客服机器人&nbsp;</a>
                <a href="https://ppmessage.cn/ppkefu/" title="免费试用">免费试用&nbsp;</a>
              </div>
            </footer>
          )
        }}
      </Location>
    )
  }

}

export default Footer;
