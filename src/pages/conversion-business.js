import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import {Helmet} from "react-helmet";
import Layout from "./layout";
import Free from "../components/free_trial";

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
                            {/* <font>
                                通过网页消息、应用内消息、电话、短信、邮件、微信等全渠道快速响应客户问题并提供解决方案，提高客户满意度，将您的满意客户转化为忠实客户，把忠实客户转化为企业拥趸
                                </font> */}
                        </h2>
                        <div style={{height:"20px"}}></div>
                        <div className={styles.u__inline_transform}>                                      <EnterYourMobile size="middle"/> 
                        </div>
                        <div style={{height:"10px"}}></div>
                        <Free />          
                    </div>        
                </div>
            </div>
            <div style={{height:'200px'}}></div>

            <section className={styles.section_transform1}>
                <div className={styles.container}>
                    <div className={styles.g__row}>

                        <div>

                            <div className={styles.chuangjian_tranform1}>
                                <a href="#full-channel" className={styles.lianjie}>
                                    <div className={styles.product__breakdown__image}>
                                        <img src={require("../images/142.png")} alt="将网页、移动端、社交媒体、邮件、电话等渠道的会话转入统一座席工作台，并通过团队协作快速处理客户问题" /></div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.t__h3}>
                                            <font>全渠道客服</font>
                                        </div>
                                        <div className={styles.t__small_s}>
                                            <font>
                                                将网页、移动端、社交媒体、邮件、电话等渠道的会话转入统一座席工作台，并通过团队协作快速处理客户问题
                                            </font>
                                        </div>
                                        <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                            <span>
                                                <font className={styles.smallerbiaoti}>了解更多</font>
                                            </span>                  
                                        </div>                
                                </a>
                            </div>

                            <div className={styles.chuangjian_tranform2}>
                                <a href="#call-center" className={styles.lianjie}>
                                    <div className={styles.product__breakdown__image}>
                                        <img src={require("../images/143.png")} alt="跨国、跨时区，多语言，分布式部署，灵活扩容，功能稳定，满足各种规模企业需求" /></div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.t__h3}>
                                            <font>全球呼叫中心</font>
                                        </div>
                                        <div className={styles.t__small_s}>
                                            <font>
                                                跨国、跨时区，多语言，分布式部署，灵活扩容，功能稳定，满足各种规模企业需求
                                            </font>
                                        </div>
                                        <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                            <span>
                                                <font className={styles.smallerbiaoti}>了解更多</font>
                                            </span>                  
                                        </div>                
                                </a>
                            </div>
                            <div className={styles.chuangjian_tranform3}>
                                <a href="#tickets" className={styles.lianjie}>
                                    <div className={styles.product__breakdown__image}>
                                        <img src={require("../images/144.png")} alt="打通售前售后环节，根据各种渠道的客户咨询消息创建工单，工单可自动分配、转派、变更、提醒和归档，业务流程和SLA随心定制" /></div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.t__h3}>
                                            <font>工单系统</font>
                                        </div>
                                        <div className={styles.t__small_s}>
                                            <font>
                                                打通售前售后环节，根据各种渠道的客户咨询消息创建工单，工单可自动分配、转派、变更、提醒和归档，业务流程和SLA随心定制
                                            </font>
                                        </div>
                                        <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                            <span>
                                                <font className={styles.smallerbiaoti}>了解更多</font>
                                            </span>                  
                                        </div>                
                                </a>
                            </div>
                            <div className={styles.chuangjian_tranform4}>
                                <a href="#nlp" className={styles.lianjie}>
                                    <div className={styles.product__breakdown__image}>
                                        <img src={require("../images/145.png")} alt="基于NLP， 365天不间断服务，高效率解决重复性问题，大幅降低人工客服成本" /></div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.t__h3}>
                                            <font>智能客服机器人</font>
                                        </div>
                                        <div className={styles.t__small_s}>
                                            <font>
                                                基于NLP， 365天不间断服务，高效率解决重复性问题，大幅降低人工客服成本
                                            </font>
                                        </div>
                                        <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                            <span>
                                                <font className={styles.smallerbiaoti}>了解更多</font>
                                            </span>
                                            
                                        </div>                
                                </a>
                            </div>                            
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
                                <font>
                                    通过一个界面处理所有渠道的客户咨询
                                </font>
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.max__600}>
                                <font>
                                    迈向真正的多触点深层客户互动解决方案，支持电子邮件、聊天、SMS、电话、协作浏览、内容共享 。各种渠道之间的无缝过渡消除了客户服务过程中的冲突，同时保留背景情境，并能收集相关的宝贵资讯。完整客户体验在您面前一览无遗，向您呈现出整个客户服务过程及相关背景 - 从即时联络到以往互动无所不包
                                </font>
                            </div>
                        </div>
                        
                        <div className={styles.g__c6}>
                            <div className={styles.js__gallery}>
                                <div className={styles.u__inline}>
                                    <div className={styles.gallery}>
                                        <div className={styles.gallery__img}>
                                            <img src={require("../images/75.png")} alt="迈向真正的多触点深层客户互动解决方案，支持电子邮件、聊天、SMS、电话、协作浏览、内容共享 。各种渠道之间的无缝过渡消除了客户服务过程中的冲突，同时保留背景情境，并能收集相关的宝贵资讯。完整客户体验在您面前一览无遗，向您呈现出整个客户服务过程及相关背景 - 从即时联络到以往互动无所不包" />
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                    <div style={{display:"block"}}></div>       
                    <div className={styles.g__row}>
                        <div className={styles.g__c1}></div>
                        <div className={styles.g__c9}>
                            <div className={styles.g__row}>
                                <div className={styles.g__c12}></div>

                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src={require("../icon/7.3.1.png")} alt="团队成员可在同一时间看到和相应新咨询消息，大幅降低首次响应时间" />
                                        </div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.sp__left_4}>
                                            <div className={[styles.t__small,styles.f__bold]}>
                                                <font>团队合作</font>
                                            </div>
                                            <div className={styles.t__small}>
                                                <font>
                                                    团队成员可在同一时间看到和相应新咨询消息，大幅降低首次响应时间
                                                </font>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src={require("../icon/7.3.3.png")} alt="向团队成员展示客户基本信息和历史记录，便于快速解决客户问题" />
                                        </div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.sp__left_4}>
                                            <div className={[styles.t__small,styles.f__bold]}>
                                                <font>客户基本信息展示</font>
                                            </div>
                                            <div className={styles.t__small}>
                                                <font>
                                                    向团队成员展示客户基本信息和历史记录，便于快速解决客户问题
                                                </font>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src={require("../icon/7.3.4.png")} alt="与知识库无缝集成，向客服智能建议问题答案，提高客户满意度" />
                                        </div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.sp__left_4}>
                                            <div className={[styles.t__small,styles.f__bold]}>
                                                <font>智能建议</font>
                                            </div>
                                            <div className={styles.t__small}>
                                                <font>
                                                    与知识库无缝集成，向客服智能建议问题答案，提高客户满意度
                                                </font>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            <div className={styles.index_200px_conversion_businese}></div>

            <section id="call-center" className={styles.section}>        
                
                <div className={styles.container_z}>                
                    
                    <div className={styles.support_automate}>
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <h3 className={styles.t__h2}>
                                <font>
                                    全球化呼叫中心系统
                                </font>
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

                        
                        <div className={styles.g__c6} >
                            <img src={require("../images/76.png")} alt="可扩展、大容量，性能稳定" />
                        </div>
                        
                        <div className={styles.g__c5_z}>

                            
                            <h3 className={styles.t__h2}>
                                <font>
                                    可扩展、大容量，性能稳定
                                </font>
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <div>
                                <font className={styles.tigongzhichi}>
                                    支持万级并发呼叫，系统可用性99.99%
                                    海量录音及实时识别


                                </font>
                            </div>                                    
                        </div>          
                    </div>                    
                </div> 
                
            </section>

            <section id="tickets" className={styles.section}>
                
                <div className={styles.container_z}>
                    <div className={styles.g__row_z}>
                        <div className={styles.g__c6}>
                            <img src={require("../images/71.jpeg")} alt="新一代全渠道工单系统" />
                        </div>
                        <div className={styles.g__c5_z}>

                            
                            
                            <div style={{height:"20px"}}></div>
                            <h3 className={styles.t__h2}>
                                <font>
                                    新一代全渠道工单系统
                                </font>
                            </h3>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.max__550}>
                                <font className={styles.tigongzhichi}>
                                    打通售前售后环节，根据网页、邮件、电话和社交媒体等各种渠道的客户咨询消息创建工单，工单可自动分配、转派、变更、提醒和归档，业务流程和SLA随心定制

                                </font>
                            </div>
                            
                            <div style={{height:"30px"}}></div>
                            <div className={styles.u__hidden__md}>
                                <div className={styles.u__inline}>                                
                                </div>
                            </div>
                            <div style={{height:"30px"}}></div>
                        </div>          
                    </div>
                    <div style={{height:"40px"}}></div>
                    <div className={styles.g__row_g}>
                        <div className={styles.g__c3}></div>
                        <div className={styles.g__c8}>
                            <div className={styles.g__row_f}>
                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src={require("../icon/7.3.5.png")} alt="无论何时与他们聊天，都可以查看团队收件箱中客户最后三个会话" />
                                        </div>
                                        <div className={styles.sp__left_4}>
                                            <div className={styles.t__small}>
                                                <font>最近的对话</font>
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__small}>
                                                无论何时与他们聊天，都可以查看团队收件箱中客户最后三个会话。
                                            </div>
                                        </div>
                                    </div>
                                </div>
     
                                <div className={styles.g__c6}>
                                    <div className={styles.f__left}>
                                        <div className={styles.product__feature_icon}>
                                            <img src={require("../icon/7.3.7.png")} alt="将用户添加到客户对话中，以便每个人都作为一个群组进行交流，从而更快的解决问题" />
                                        </div>
                                        <div className={styles.sp__left_4}>
                                            <div className={styles.t__small}>
                                                <font>小组对话</font>
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__small}>
                                                将用户添加到客户对话中，以便每个人都作为一个群组进行交流，从而更快的解决问题
                                            </div>
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
                            <font>
                                人机融合，助力客户服务创新升级
                            </font>
                        </h2>                    
                        <font className={styles.tigongzhichi}>
                            基于NLP， 365天不间断服务，高效率解决重复性问题，大幅降低人工客服成本
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
