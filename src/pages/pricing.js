import React from "react";

import EnterYourMobile from "../components/enteryourmobile";
import TabsControl from "../components/tabscontrol";
import WorthCompany from "../components/worthcompany"
import { Helmet } from "react-helmet";
import Layout from "./layout";
import PPButton from "../components/buttton";

import styles from "./pricing.module.css";

export default () => {

  return (
    <Layout>
      <Helmet>
        <title>免费在线客服价格-PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统</title>
        <meta name="keywords" content="在线客服价格，网站客服价格，智能客服价格，云呼叫中心价格" />
        <meta name="description" content="PPMESSAGE新一代全渠道在线客服系统提供满足企业不同需求的客服解决方案，无需下载部署，注册即用，满足您的个性化需求。" />

      </Helmet>
      <div className={styles.heiti}>
        <div style={{ height: "72px" }}></div>
        <section className={styles.js__pricing_page}>
          <div className={styles.container_q}>
            <div style={{ height: "50px" }}></div>
            <div className={styles.t__h1}>
              <font>满足企业不同需求的客服解决方案</font>
            </div>
            <div className={styles.t__h3_center}>
              <font>无需下载部署，注册即用，</font>
              <font>满足您的个性化需求</font>
            </div>
            <div style={{ height: "50px" }}></div>
            <div className={styles.g__row_h_center}>


              <div className={styles.g__c4_pring}>
                <a href="#basic" className={styles.c__black}>
                  <div className={styles.t__h3}>
                    <font>
                        标准版
                    </font>
                  </div>
                  <div className={styles.t__small}>
                    <font>
                                            ¥ 2,480元/年
                    </font>
                  </div>
                  <div style={{ height: "20px" }}></div>
                  <div>
                    <font>
                                            满足客服5人及以下企业基本需求
                    </font>
                  </div>
                  <div style={{ height: "20px" }}></div>
                  <div className={styles.u__inline_block}>
                    <span className={styles.link__arrow_c_blue}>
                      <font>了解更多</font>
                    </span>
                  </div>
                </a>
              </div>



              <div className={styles.g__c4_pring}>
                <a href="#enterprise" className={styles.c__black}>
                  <div className={styles.t__h3}>
                    <font>
                                            企业版
                    </font>
                  </div>
                  <div className={styles.t__small}>
                    <font>
                                            ¥ 12,800元/年
                    </font>
                  </div>
                  <div style={{ height: "20px" }}></div>
                  <div>
                    <font>
                                            满足客服20人及以下企业的复杂的线上业务需求。
                    </font>
                  </div>
                  <div style={{ height: "20px" }}></div>
                  <div className={styles.u__inline_block}>
                    <span className={styles.link__arrow_c_blue}>
                      <font>了解更多</font>
                    </span>
                  </div>
                </a>
              </div>

              <div className={styles.g__c4_pring}>
                <a href="#customize" className={styles.c__black} >
                  <div className={styles.t__h3}>
                    <font>
                                            业务定制及私有部署
                    </font>
                  </div>
                  <div className={styles.t__small}>
                    <font>

                    </font>
                  </div>
                  <div style={{ height: "20px" }}></div>
                  <div>
                    <font>
                                            支持SaaS标准化需求基础上的定制开发，提供呼叫中心、电话机器人、源码支持等多种服务
                    </font>
                  </div>
                  <div style={{ height: "20px" }}></div>

                  <div className={styles.u__inline_block}
                    style={{ cursor: "pointer" }}>
                    <span className={styles.link__arrow_c_blue}>
                      <font>了解更多</font>
                    </span>

                  </div>
                </a>
              </div>
            </div>
            <div style={{ height: "60px" }}></div>
            <div className={styles.g__row_h_center} >
              <EnterYourMobile size="middle" />
            </div>
            <div style={{ height: "40px" }}></div>
            <div className={styles.g__row_h_center}>
              <div style={{ height: "10px" }}></div>
            </div>


            <section id="basic"></section>
            <div style={{ height: "80px" }}></div>

            <div className={styles.pricing__product_box}>
              <div className={styles.g__row_h_center}>
                <div className={styles.g__c3} style={{ padding: "40px" }}>
                  <div className={styles.g__row}>
                    <div className={styles.t__h3}>
                      <span >
                        <font>
                                                    标准版
                        </font>
                      </span>
                    </div>
                    <div className={styles.g__c12}>
                      <font>
                                                满足5人及以下企业的线上业务需求
                      </font>
                    </div>
                    <div className={styles.g__c12}>
                      <div className={styles.t__p3}>
                        <font></font>
                      </div>
                      <span className={styles.t__h2}>
                        <font>¥ 2,480元
                        </font>
                      </span>
                      <font className={styles.vertical}>/年
                      </font>
                    </div>
                  </div>
                </div>
                <div className={styles.g__c6}>
                  <TabsControl>
                    <div name="套餐内容">
                      <table className={styles.pricing__table}>
                        <tbody>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>在线客服（座席）</font>
                            </td>
                            <td style={{ borderBottom: "none" }}><font>&le;5人</font>
                            </td>
                          </tr>

                          <tr>
                            <td style={{ borderBottom: "none" }}><font>应用内消息</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>微信、邮件、短信消息</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>客服机器人</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div name="套餐功能">
                      <table className={styles.pricing__table}>
                        <tbody>
                          <tr>
                            <td>
                              <font>
                                                                对话记录永久保存
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <font>
                                                                无限访客并发
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>
                                                                自定义对话分配
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>
                                                                应用内主动消息
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>
                                                                业务触发的邮件、短信消息
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <font>
                                                                客服机器人
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsControl>
                </div>
              </div>
            </div>

            <section id="enterprise"></section>
            <div style={{ height: "80px" }}></div>
            <div className={styles.pricing__product_box}>
              <div className={styles.g__row_h_center}>
                <div className={styles.g__c3} style={{ padding: "40px" }}>
                  <div className={styles.g__row}>
                    <div className={styles.t__h3}>
                      <span >
                        <font>企业版</font>
                      </span>
                    </div>
                    <div className={styles.g__c12}>
                      <font>满足20人及以下中小企业的复杂的线上业务需求</font>
                    </div>
                    <div className={styles.g__c12}>
                      <div className={styles.t__p3}>
                        <font></font>
                      </div>
                      <span className={styles.t__h2}>
                        <font>¥ 12,800元
                        </font>
                      </span>
                      <font className={styles.vertical}>/年
                      </font>
                    </div>
                  </div>
                </div>
                <div className={styles.g__c6}>


                  <TabsControl>
                    <div name="套餐内容">
                      <table className={styles.pricing__table}>
                        <tbody>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>在线客服（座席）</font>
                            </td>
                            <td style={{ borderBottom: "none" }}><font>&le;20人</font>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>应用内消息</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>微信、邮件、短信消息</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>客服机器人</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div name="套餐功能">

                      <table className={styles.pricing__table}>
                        <tbody>
                          <tr>
                            <td>
                              <font>
                                                                对话记录永久保存
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>
                                                                无限访客并发
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>自定义对话分配
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>应用内主动消息
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <font>业务触发的邮件、短信消息
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <font>
                                                                客服机器人
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsControl>
                </div>
              </div>
            </div>



            <section id="customize"></section>

            <div style={{ height: "80px" }}></div>

            <div className={styles.pricing__product_box}>
              <div className={styles.g__row_h_center}>
                <div className={styles.g__c3} style={{ padding: "40px" }}>
                  <div className={styles.g__row}>
                    <div className={styles.t__h3}>
                      <span >
                        <font>
                                                    业务定制及私有部署
                        </font>
                      </span>
                    </div>
                    <div className={styles.g__c12}>
                      <font>满足企业私有部署和业务定制</font>
                    </div>
                    <div className={styles.g__c12}>
                      <div className={styles.t__p3}>
                        <font></font>
                      </div>
                      <span className={styles.t__h2}>
                        <font>
                                                    ¥ 200,000 元
                        </font>
                      </span>
                      <font className={styles.vertical}>起
                      </font>
                    </div>
                  </div>
                </div>
                <div className={styles.g__c6}>
                  <TabsControl>
                    <div name="套餐内容">
                      <table className={styles.pricing__table}>
                        <tbody>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>在线客服（座席）</font>
                            </td>
                            <td style={{ borderBottom: "none" }}><font>&le;无限制</font>
                            </td>
                          </tr>

                          <tr>
                            <td style={{ borderBottom: "none" }}><font>应用内消息</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>

                          </tr>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>微信、邮件、短信消息</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>
                          <tr>
                            <td style={{ borderBottom: "none" }}><font>客服机器人</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td style={{ borderBottom: "none" }}><font>呼叫中心</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td style={{ borderBottom: "none" }}><font>智能外呼机器人</font>
                            </td>
                            <td style={{ borderBottom: "none" }}>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                    <div name="套餐功能">

                      <table className={styles.pricing__table}>
                        <tbody>
                          <tr>
                            <td>
                              <font>
                                                                对话记录永久保存
                              </font>
                            </td>

                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>

                          </tr>

                          <tr>
                            <td>
                              <font>
                                                                无限访客并发
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>
                                                                自定义对话分配
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>
                                                                主动消息
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>
                                                                消息内应用集成
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <font>
                                                                源码级开发支持
                              </font>
                            </td>
                            <td>
                              <img src={require("../images/svg/checkmark.svg")} alt="checkmark" />
                            </td>
                          </tr>


                        </tbody>
                      </table>
                    </div>

                  </TabsControl>
                </div>
              </div>
            </div>


            <div style={{ height: "60px" }}></div>
            <p className={styles.t__h3_center} style={{ fontWeight: "100" }}>
              <font>
                                为您的企业选择一个用例，我们将推荐您需要的产品
              </font>
            </p>
          </div>


          <div className={styles.container_q}>
            <div className={styles.g__row3}>
              <div className={styles.g__row}>
                <div className={styles.g__c4}>
                  <div className={styles.u__flex}>
                    <div className={styles.main1}>
                      <div className={styles.sp__2}></div>
                      <div className={styles.label}>
                        <h3>获取和转化商机
                        </h3>
                        <font className={styles.ziti}> 使用营销自动化工具和智能外呼获取客户，通过AI工具评估和分配商机，提高客户转化率
                        </font>
                        <div style={{ height: "15px" }}></div>
                        <div>
                          <font>智能客服·营销自动化·语音机器人</font></div>
                        <div style={{ height: "10px" }}></div>
                        <a href="/transform-customs" className={styles.ziti1}>了解更多
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.g__c4}>
                  <div className={styles.u__flex}>
                    <div className={styles.main1}>
                      <div className={styles.sp__2}></div>
                      <div className={styles.label}>
                        <h3>引导和吸引客户
                        </h3>
                        <font className={styles.ziti}> 发送有针对性的电子邮件，短信，应用内推送消息和智能语音将更多注册用户转化为付费用户
                        </font>
                        <div style={{ height: "15px" }}></div>
                        <div><font>营销自动化·智能语音机器人</font></div>
                        <div style={{ height: "10px" }}></div>
                        <a href="/guide-attract-customers" className={styles.ziti1}>了解更多
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.g__c4}>
                  <div className={styles.u__flex}>
                    <div className={styles.main1}>
                      <div className={styles.sp__2}></div>
                      <div className={styles.label}>
                        <h3>
                                                    客户支持并提高客户满意度
                        </h3>
                        <font className={styles.ziti}>
                                                    云呼叫中心，客服机器人及与业务无缝集成的工单系统，在有效降低成本的同时更快的解决客户问题
                        </font>
                        <div style={{ height: "15px" }}></div>
                        <div><font>云呼叫中心·客服机器人</font></div>
                        <div style={{ height: "10px" }}></div>
                        <a href="/conversion-business" className={styles.ziti1}>
                                                    了解更多
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "140px" }}></div>
        </section>
        <section><WorthCompany /></section>
      </div>
    </Layout>
  )
}    
