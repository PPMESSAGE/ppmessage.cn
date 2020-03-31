import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import FeatherModal from "../components/feathermodal";
import {Helmet} from "react-helmet";
import Layout from "./layout";
import Free from "../components/free_trial";

export default () => (
	<Layout>
        <Helmet>
            <title>营销自动化软件-PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统</title>
            <meta name="keywords" content="Marketing automation, 营销自动化软件，自动化营销系统，自动化智能营销" />
            <meta name="description" content="PPMESSAGE营销自动化解决方案通过向访客或者注册用户发送基于行为和时间的有针对性的应用内消息、电子邮件、短信和智能语音呼叫，提升访客转化，帮助企业降低获客成本" />
            
        </Helmet>
        
        <div className={styles.heiti}>
            <div style={{height:"72px"}}></div>
            <div style={{height:`72px`}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <h1>营销自动化</h1>
                        <div className={styles.sp__5}>
                            <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>
                                在合适的时间通过合适的渠道向目标客群发送有针对性的消息
                            </h2>
                            <div style={{height:"10px"}}>
                            </div>
                            <h3 style={{color:'#888'}}>
                                <font className={styles.biaoti}>
                                    通过向访客或者注册用户发送基于行为和时间的有针对性的应用内消息、电子邮件、短信和智能语音呼叫，提高访客转化率，刺激客户消费
                                </font>
                            </h3>
                            <div style={{height:"20px"}}>            
                            </div>
                            <div>
                                <EnterYourMobile size="middle"/>
                                <div style={{height:"10px"}}></div>
                            </div>
                            <Free />
                        </div>
                    </div>
                    <div className={styles.g__c6}>
                        <div>
                            <img src={require("../images/163.png")}
                                 alt="PPMESSAGE营销自动化解决方案通过向访客或者注册用户发送基于行为和时间的有针对性的应用内消息、电子邮件、短信和智能语音呼叫，提升访客转化，帮助企业降低获客成本" />
                        </div>
                    </div>
                </div>  
            </div>


            <section  className={styles.marketing_section}>
                <div className={styles.container}>
                    <div className={styles.g__row_marketing}>
                        
                        <div className={styles.chuangjian_marketing}>
                            <a href="#xifen" className={styles.lianjie}>
                                <div>                
                                </div>
                                <div style={{height:'5em'}}></div>                           
                                <div className={styles.t__h3}>
                                    <font >客户细分
                                    </font>
                                </div>
                                <div style={{height:'5px'}}></div>
                                <div className={styles.t__small_s_marketing}>
                                    <font>
                                        根据客户行为和时间发送有针对性的消息
                                    </font>                  
                                </div>
                                <div className={styles.product__learn_more}>
                                    <div style={{height:'2em'}}></div>
                                    <span>
                                        <font className={styles.smallerbiaoti}>了解更多</font>
                                    </span>                  
                                </div>
                                
                            </a>
                        </div>

                        <div className={styles.chuangjian_marketing}>
                            <a href="#fasong" className={styles.lianjie}>
                                <div>                
                                </div>
                                <div style={{height:'5em'}}></div>                           
                                <div className={styles.t__h3}>
                                    <font>消息发送
                                    </font>
                                </div>
                                <div style={{height:'5px'}}></div>
                                <div className={styles.t__small_s_marketing}>
                                    <font>
                                        发送手动或事件触发的自动消息
                                    </font>
                                </div>

                                <div className={styles.product__learn_more}>
                                    <div style={{height:'2em'}}></div>
                                    <span>
                                        <font className={styles.smallerbiaoti}>了解更多</font>
                                    </span>                  
                                </div>                
                            </a>
                        </div>
                        <div className={styles.chuangjian_marketing} >
                            <a href="#youhua" className={styles.lianjie}>
                                <div>                
                                </div>
                                <div style={{height:'5em'}}></div>                           
                                <div className={styles.t__h3}>
                                    <font>
                                        评估及优化
                                    </font>
                                </div>
                                <div style={{height:'5px'}}></div>
                                <div className={styles.t__small_s_marketing}>
                                    <font>
                                        改善消息性能
                                    </font>
                                </div>
                                <div className={styles.product__learn_more}>
                                    <div style={{height:'2em'}}></div>
                                    <span>
                                        <font className={styles.smallerbiaoti}>了解更多</font>
                                    </span>                  
                                </div>
                            </a>
                        </div>           
                        
                    </div>
                </div>
            </section>

            <section  className={styles.section}>
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}} />
                </div>
            </section>

            <section>      
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c3}>
                            <h3><font className={styles.huise}>细分</font></h3>
                            <div className={styles.huisesmaller}>
                                <font>根据客户行为和时间发送有针对性的消息</font>
                            </div>
                        </div>
                        <div className={styles.g__c8}>
                            <div className={styles.g__row}>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{
                                            title: "事件追踪",
                                            icon: require("../icon/6.2.1.png"),
                                            alt: "跟踪访客在网页上的行为并采取行动",
                                            desc: "跟踪访客在网页上的行为并采取行动"
                                        }}>
                                        </FeatherModal>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{
                                            title: "客户细分",
                                            icon:require("../icon/6.2.2.png"),
                                            alt: "根据客户的行为实时生成客户分组",
                                            desc: "根据客户的行为实时生成客户分组"
                                        }}>
                                        </FeatherModal>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{
                                            title: "锁定客群",
                                            icon: require("../icon/6.2.3.png"),
                                            alt: "根据商机或用户的行为及属性锁定目标客群",
                                            desc: "根据商机或用户的行为及属性锁定目标客群"
                                        }}>
                                        </FeatherModal>
                                    </div>
                                </div>


                            </div>            
                        </div>         
                    </div>        
                </div>              
            </section>


            <section   className={styles.section}>
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}} />
                </div>
            </section>

            <section>      
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>

                        <div className={styles.g__c3}>
                            <h3><font className={styles.huise}>消息发送</font></h3>
                            <div className={styles.huisesmaller}>
                                <font>发送一次性或事件触发的自动消息，包括应用内语音，短信，邮件或智能语音</font>
                            </div>
                        </div>
                        <div className={styles.g__c8}>
                            <div className={styles.g__row}>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{
                                            title: "自动消息",
                                            icon: require("../icon/6.2.4.png"),
                                            alt: "根据用户或潜在客户的行为向他们发送自动消息",
                                            desc: "根据用户或潜在客户的行为向他们发送自动消息"
                                        }}>
                                        </FeatherModal>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{
                                            title: "手动消息",
                                            icon: require("../icon/6.2.5.png"),
                                            alt: "向用户或潜在客户发送一次性消息",
                                            desc: "向用户或潜在客户发送一次性消息"
                                        }}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>

                                        <FeatherModal abstract={{
                                            title: "应用内消息",
                                            icon: require("../icon/6.2.6.png"),
                                            alt: "在网页或移动应用内发送与上下文相关的自动或手动消息",
                                            desc: "在网页或移动应用内发送与上下文相关的自动或手动消息"
                                        }}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{
                                            title: "访客自动消息",
                                            icon: require("../icon/6.2.7.png"),
                                            alt: "根据访客在网页上的行为主动发送消息",
                                            desc: "根据访客在网页上的行为主动发送消息"
                                        }}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{
                                            title: "智能语音",
                                            icon: require("../icon/6.2.8.png"),
                                            alt: "根据客户行为或属性在特定时间向客户进行智能语音呼叫",
                                            desc: "根据客户行为或属性在特定时间向客户进行智能语音呼叫"
                                        }}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{
                                            title: "智能营销活动",
                                            icon: require("../icon/6.2.9.png"),
                                            alt: "基于客户行为和时间向客户发送一系列定制化消息以达到特定营销目标",
                                            desc: "基于客户行为和时间向客户发送一系列定制化消息以达到特定营销目标"
                                        }}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>
                                {/*此处添加新卡片*/}              
                            </div>            
                        </div>         
                    </div>        
                </div>              
            </section>
            
            <section   className={styles.section}>
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}} />
                </div>
            </section>

            <section>      
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>

                        <div className={styles.g__c3}>
                            <h3><font className={styles.huise}>评估及优化</font></h3>
                            <div className={styles.huisesmaller}>
                                <font>分析消息达到的效果，改善消息性能</font>
                            </div>
                        </div>
                        <div className={styles.g__c8}>
                            <div className={styles.g__row}>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "消息统计", icon:require("../icon/6.2.10.png"), desc: "统计发送的消息打开、点击和回复的数量和比率", alt: "统计发送的消息打开、点击和回复的数量和比率"}}>
                                        </FeatherModal>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "A/B测试", icon:require("../icon/6.2.11.png"), desc: "通过变量测试优化消息性能", alt: "通过变量测试优化消息性能"}}>
                                        </FeatherModal>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "消息目标", icon: require("../icon/6.2.12.png"), desc: "跟踪和衡量产品内行为，以了解消息的真实性能", alt: "跟踪和衡量产品内行为，以了解消息的真实性能"}}>
                                        </FeatherModal>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "洞察", icon: require("../icon/6.2.13.png"), desc: "查看消息的执行情况，以及消息是否按预期发送", alt: "查看消息的执行情况，以及消息是否按预期发送"}}>
                                        </FeatherModal>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "销售转化率", icon: require("../icon/6.2.14.png"), desc: "可定制行业销售转化模型，提高销售转化效率", alt: "可定制行业销售转化模型，提高销售转化效率"}}>
                                        </FeatherModal>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "CSV导出", icon: require("../icon/6.2.15.png"), desc: "将您在给定时间段内发送的消息的性能数据导出到CSV文件", alt: "将您在给定时间段内发送的消息的性能数据导出到CSV文件"}}>
                                        </FeatherModal>
                                    </div>
                                </div>
                                {/*此处添加新卡片*/}              
                            </div>            
                        </div>         
                    </div>        
                </div>              
            </section>
        </div>
	</Layout>
);
