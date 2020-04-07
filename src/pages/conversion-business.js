import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import {Helmet} from "react-helmet";
import Layout from "./layout";
import Free from "../components/free_trial";
import IconHoverCard from "../components/iconhovercard"

import "./conversion-business.css"

export default () => (
	<Layout>
        <Helmet>
            <title>支持客户并提高客户满意度-PPMESSAGE-新一代智能全渠道在线客服系统_网站客服系统</title>
            <meta name="keywords" content="在线客服系统，网站客服系统，智能客服系统，在线客服，工单系统，云呼叫中心，销售机器人，客服机器人，语音机器人，客户满意度，客户支持" />
            <meta name="description" content="PPMESSAGE新一代智能全渠道在线客服系统通过网页消息、应用内消息、电话、短信、邮件、微信等全渠道快速响应客户问题并提供解决方案，提高客户满意度，将您的满意客户转化为忠实客户，把忠实客户转化为企业拥趸。" />

        </Helmet>
        <div className={styles.heiti}>
            <div style={{height:"144px"}}></div>
            <div className={styles.container}>
                <div style={{height:"20px",display:"block"}}></div>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <span className={styles.f__medium}>
                            <div className={styles.transform_200px} style={{width:"400px"}}>
                                <h2>支持客户并提高客户满意度</h2>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.bg__light}>
                    
                    <div className={styles.u__hidden}>
                        <img  src={require("../images/140.png")} alt="向客户展示您真正关注他们的体验，改变传统的客户支持方法" />
                    </div>
                    <div className={styles.u__hidden1}>
                        <img  src={require("../images/141.png")} alt="向客户展示您真正关注他们的体验，改变传统的客户支持方法" />
                    </div>

                    <div className={styles.u__zfix}>

                        <div className={styles.transform_1317px}></div>
                        <h1 className={styles.t__h1_s}>
                            向客户展示您真正关注他们的体验，改变传统的客户支持方法
                        </h1>
                        <div style={{height:"10px"}}></div>
                        <h2 className={styles.t__h3_d}>
                        </h2>
                        <div style={{height:"20px"}}></div>
                        <div className={styles.u__inline_transform}>
                            <EnterYourMobile size="middle"/> 
                        </div>
                        <div style={{height:"10px"}}></div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <Free />
                        </div>
                    </div>        
                </div>
            </div>
            <div style={{height:'200px'}}></div>

            <section>
                <div className={styles.container__narrower}>

                    <div className="conversion-cards">
                        
                        <div className="conversion-card">

                            <a href="#full-channel" className={styles.lianjie}>

                                <div className="conversion-card-inner">
                                    <div className="conversion-card-inner-image-container">
                                        <img src={require("../images/142.png")} alt="将网页、移动端、社交媒体、邮件、电话等渠道的会话转入统一座席工作台，并通过团队协作快速处理客户问题" />
                                    </div>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.t__h3}>
                                        全渠道客服
                                    </div>
                                    <div className={styles.t__small_s}>
                                        将网页、移动端、社交媒体、邮件、电话等渠道的会话转入统一座席工作台，并通过团队协作快速处理客户问题
                                    </div>
                                    <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div className="conversion-card">
                            <a href="#call-center" className={styles.lianjie}>
                                <div className="conversion-card-inner">
                                    <div className="conversion-card-inner-image-container">
                                        <img src={require("../images/143.png")} alt="跨国、跨时区，多语言，分布式部署，灵活扩容，功能稳定，满足各种规模企业需求" />
                                    </div>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.t__h3}>
                                        全球呼叫中心
                                    </div>
                                    <div className={styles.t__small_s}>
                                        跨国、跨时区，多语言，分布式部署，灵活扩容，功能稳定，满足各种规模企业需求
                                    </div>
                                    <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>                  
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="conversion-card">
                            <a href="#nlp" className={styles.lianjie}>
                                <div className="conversion-card-inner">
                                    <div className="conversion-card-inner-image-container">
                                        <img src={require("../images/145.png")} alt="基于NLP， 365天不间断服务，高效率解决重复性问题，大幅降低人工客服成本" />
                                    </div>
                                    <div style={{height:"10px"}}></div>
                                    <div className={styles.t__h3}>
                                        人机融合
                                    </div>
                                    <div className={styles.t__small_s}>
                                        基于自然语言处理，365天不间断服务，高效率解决重复性问题，人工随时干预，大幅提升单人客服效率
                                    </div>
                                    <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                        <span>
                                            <font className={styles.smallerbiaoti}>了解更多</font>
                                        </span>
                                        
                                    </div>
                                </div>
                            </a>
                        </div>                                                    
                    </div>
                </div>
            </section>

            
            <section id="full-channel">
                
                <div className={styles.container_z}>  
                    <div className={styles.g__row}>
                        <div className={styles.g__c6}>
                            <div style={{height:"20px"}}></div>
                            <h3 className={styles.t__h2}>
                                通过一个界面处理所有渠道的客户咨询
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.max__600}>
                                支持电子邮件、聊天、微信、电话、协作浏览、内容共享 。各种渠道之间的无缝过渡消除了客户服务过程中的冲突.
                            </div>
                        </div>
                        
                        <div className={styles.g__c6}>
                            <div className={styles.js__gallery}>
                                <div className={styles.u__inline}>
                                    <div className={styles.gallery}>
                                        <div className={styles.gallery__img}>
                                            <img style={{maxWidth:"480px"}} src={require("../images/75.png")} alt="迈向真正的多触点深层客户互动解决方案，支持电子邮件、聊天、SMS、电话、协作浏览、内容共享 。各种渠道之间的无缝过渡消除了客户服务过程中的冲突，同时保留背景情境，并能收集相关的宝贵资讯。完整客户体验在您面前一览无遗，向您呈现出整个客户服务过程及相关背景 - 从即时联络到以往互动无所不包" />
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                    
                    <div className={styles.g__row}>                                
                        <IconHoverCard texts={{title:"团队合作", desc:"团队成员可在同一时间看到和相应新咨询消息，大幅降低首次响应时间", image:"7.3.1.png"}} />
                        
                        <IconHoverCard texts={{title:"客户基本信息展示", desc:"向团队成员展示客户基本信息和历史记录，便于快速解决客户问题", image:"7.3.3.png"}} />
                        
                        <IconHoverCard texts={{title:"智能建议", desc:"与知识库无缝集成，向客服智能建议问题答案，提高客户满意度", image:"7.3.4.png"}} />
                    </div>
                </div>
                
            </section>

            <section id="call-center" className={styles.section}>        
                
                <div className={styles.container_z}>                
                    
                    <div className={styles.support_automate}>
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <h3 className={styles.t__h2}>
                                全球化呼叫中心系统
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.max__600}>
                                <font className={styles.tigongzhichi}>
                                    跨地域、跨时区、多语言，支持语音通话跨地域转接，保障全球客服24小时在线
                                </font>
                            </div>
                        </div>
                        
                        <div className={styles.g__c6}>
                            <div className={styles.js__gallery}>
                                <div className={styles.u__inline}>
                                    <div className={styles.gallery}>
                                        <div className={styles.gallery__img}>
                                            <img style={{width:"500px"}} src={require("../images/138.png")} alt="跨地域、跨时区、多语言，支持语音通话跨地域转接，保障全球客服24小时在线" />
                                            
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>                                               
                    </div>                    
                </div> 
                
            </section>

            
            <div style={{height:"50px"}}></div>
            
            <section id="nlp">
                <div className={styles.container_z}>
                    <div className={styles.u__zfix}>                   
                        <div className={styles.index_100px}></div>
                        <h2 className={styles.t__h2}>
                            人机融合，提升座席工作效率，助力客户服务创新升级
                        </h2>                    
                        <font className={styles.tigongzhichi}>
                            基于自然语言处理，365天不间断服务，高效率解决重复性问题，人工随时干预，大幅提升单人客服效率
                        </font>
                        <div style={{height:"20px"}}></div>
                        <div>
                            <img src={require("../images/139.png")} alt="基于NLP， 365天不间断服务，高效率解决重复性问题，大幅降低人工客服成本" />
                        </div>
                    </div>
                </div>           
            </section>
        </div>
	</Layout>
);
