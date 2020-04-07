import React from "react";
import EnterYourMobile from "../components/enteryourmobile";
import styles from "./about-css-modules.module.css";
import {Helmet} from "react-helmet";
import Layout from "./layout";
import Free from "../components/free_trial";
import ImageHoverCard from "../components/imagehovercard";

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
                                通过网页主动消息、在线聊天、应用内消息推送、邮件、短信和智能语音外呼快速获取更多商机
                            </h2>
                            <div style={{height:"20px"}}></div>
                            <div className={styles.u__inline_transform}>     
                                <EnterYourMobile size="middle"/> 
                            </div>
                            <div style={{height:"10px"}}></div>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                <Free />
                            </div>
                        </div>        
                    </div>
                </div>

                <section style={{paddingTop: "120px"}}>
                    <div className={styles.container}>
                        <div style={{
                            display: "flex",
                            flex: "0 1 auto",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center"
                        }}>

                            <ImageHoverCard texts={{title:"获取",desc:"通过主动对话、消息互动、微信营销和智能外呼获取更多商机",image:"155.png", link: {href:"#huode"} }}/>

                            <ImageHoverCard texts={{title:"评价",desc:"通过自动评估商机质量，并将合适的商机转给合适的销售人员",image:"156.png", link: {href:"#xiushi"} }}/>
                            
                            <ImageHoverCard texts={{title:"转化",desc:"通过实时聊天和消息互动完成商机转化",image:"157.png", link: {href:"#duihuan"} }}/>
                            
                        </div>                        
                    </div>
                </section>

                <section style={{paddingTop: "120px"}}>
                    
                    <div className={styles.container_z}>
                        <div className={styles.g__row}>
                            <div className={styles.g__c6}>
                                <div style={{height:"20px"}}></div>
                                <h3 className={styles.t__h2}>
                                    通过定制化的自动消息转化更多网页访客
                                </h3>
                                <div style={{height:"10px"}}></div>
                                <div className={styles.max__600}>
                                    通过访客在线时与其实时互动而不是冗长的表单转化客户
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

