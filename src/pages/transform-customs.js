import React from "react";
import EnterYourMobile from "../components/enteryourmobile";
import styles from "./about-css-modules.module.css";
import {Helmet} from "react-helmet";
import Layout from "./layout";
import Free from "../components/free_trial";

export default () => {
    return (
	    <Layout>
            <Helmet>
                <title>获取和转化销售线索-PPMESSAGE-新一代智能全渠道在线客服系统_网站客服系统</title>
                <meta charsets="UTF-8" />
                <meta name="description" content="PPMESSAGE 是业界领先的新一代全渠道在线客服系统，通过在适当的时间向合适的人发送有针对性的自动消息或进行自动语音外呼快速获取商机，并通过AI工具评估和分配商机，提高客户转化率" />
                <meta name="keywords" content="营销自动化，获取和转化商机，在线客服系统，网站客服系统" />
                
            </Helmet>
            <div className={styles.heiti}>
                <div style={{height:"144px"}}></div>
                <div className={styles.container}>
                    <div style={{height:"20px",display:"block"}}></div>
                    <div className={styles.g__row}>
                        <div className={styles.g__c6}>
                            <span className={styles.f__medium}>
                                <div className={styles.transform_200px} style={{width:"300px"}}>
                                    <h2>获取和转化销售线索</h2>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.bg__light}>
                        <div className={styles.u__hidden}>
                            <img width="528" src={require("../images/153.png")} alt="通过网页主动消息、在线聊天、应用内消息推送、邮件、短信和智能语音外呼快速获取更多商机；通过机器学习实时评估商机质量并自动分配，提升商机转化率" />
                        </div>
                        <div className={styles.u__hidden1}>
                            <img width="462" src={require("../images/154.png")} alt="通过网页主动消息、在线聊天、应用内消息推送、邮件、短信和智能语音外呼快速获取更多商机；通过机器学习实时评估商机质量并自动分配，提升商机转化率" />
                        </div>
                        <div className={styles.u__zfix}>

                            <div className={styles.transform_1317px}></div>
                            <h1 className={styles.t__h1_s}>
                                获取更多商机并达成更多交易
                            </h1>
                            <div style={{height:"10px"}}></div>
                            <h2 className={styles.t__h3_d}>
                                <font>
                                    通过网页主动消息、在线聊天、应用内消息推送、邮件、短信和智能语音外呼快速获取更多商机；通过机器学习实时评估商机质量并自动分配，提升商机转化率
                                </font>
                            </h2>
                            <div style={{height:"20px"}}></div>
                            <div className={styles.u__inline_transform}>     
                                <EnterYourMobile size="middle"/> 
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
                                    <a href="#huode" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img alt="通过主动对话、应用内消息互动、邮件营销、短信营销、微信 营销和智能外呼获取更多商机" src={require("../images/155.png")} width="91px" /></div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>获取</font>
                                            </div>
                                            <div className={styles.t__small_s}>
                                                <font>通过主动对话、应用内消息互动、邮件营销、短信营销、微信 营销和智能外呼获取更多商机</font>
                                            </div>
                                            <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                                <span>
                                                    <font className={styles.smallerbiaoti}>了解更多</font>
                                                </span>                  
                                            </div>                
                                    </a>
                                </div>

                                <div className={styles.chuangjian_tranform2}>
                                    <a href="#xiushi" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img alt="通过机器学习自动评估商机质量，并将合适的商机转给合适的销售人员，安排销售会议或与您的CRM系统同步信息" src={require("../images/156.png")} width="91px" /></div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>评价</font>
                                            </div>
                                            <div className={styles.t__small_s}>
                                                <font>通过机器学习自动评估商机质量，并将合适的商机转给合适的销售人员，安排销售会议或与您的CRM系统同步信息
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
                                    <a href="#duihuan" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img alt="通过实时聊天和消息互动完成商机转化" src={require("../images/157.png")} width="91px" /></div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>转化</font>
                                            </div>
                                            <div className={styles.t__small_s}>
                                                <font>通过实时聊天和消息互动完成商机转化
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
                                    <a href="#celiang" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img alt="实时了解商机转化数量，商机来源等信息，评估营销质量" src={require("../images/158.png")} width="91px" /></div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>测量</font>
                                            </div>
                                            <div className={styles.t__small_s}>
                                                <font>实时了解商机转化数量，商机来源等信息，评估营销质量</font>
                                            </div>
                                            <section id="huode"></section>
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

                <section>
                    
                    <div className={styles.container_z}>
                        <div className={styles.g__row}>
                            <div className={styles.g__c6}>
                                <div style={{height:"20px"}}></div>
                                <h3 className={styles.t__h2}>
                                    <font>
                                        通过定制化的自动消息转化更多网页访客
                                    </font>
                                </h3>
                                <div style={{height:"10px"}}></div>
                                <div className={styles.max__600}>
                                    <font>通过访客在线时与其实时互动而不是冗长的表单转化客户

                                    </font>
                                </div>
                            </div>
                            
                            <div className={styles.g__c6}>
                                <div className={styles.js__gallery}>
                                    <div className={styles.u__inline}>
                                        <div className={styles.gallery}>
                                            <div className={styles.gallery__img}>
                                                <img width="587" src={require("../images/75.png")} alt="通过访客在线时与其实时互动而不是冗长的表单转化客户" />
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

                                    <div className={styles.g__c6_transform}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img src={require("../icon/7.1.1.png")} alt="通过访客的行为和推荐网址定位目标客户" />
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.sp__left_4}>
                                                <div className={[styles.t__small,styles.f__bold]}>
                                                    <font>针对目标客群</font>
                                                </div>
                                                <div className={styles.t__small}>
                                                    <font>
                                                        通过访客的行为和推荐网址定位目标客户
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.g__c6_transform}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img src={require("../icon/7.1.2.png")} alt="可以针对不同的访客，不同的时间在网页不同的位置显示定制化聊天组件" />
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.sp__left_4}>
                                                <div className={[styles.t__small,styles.f__bold]}>
                                                    <font>定制化聊天组件</font>
                                                </div>
                                                <div className={styles.t__small}>
                                                    <font>
                                                        可以针对不同的访客，不同的时间在网页不同的位置显示定制化聊天组件
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
            </div>
	    </Layout>
    )
}

