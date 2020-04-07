import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import {Helmet} from "react-helmet";
import Layout from "./layout";
import Free from "../components/free_trial";
import ImageHoverCard from "../components/imagehovercard";

export default () =>{
    return(
	    <Layout>
            <Helmet>
                <title>引导和吸引客户-PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统</title>
                <meta name="keywords" content="自动营销，营销自动化，云呼叫中心，销售机器人，语音机器人" />
                <meta name="description" content="PPMESSAGE新一代全渠道在线客服系统自动营销模块可以根据用户渠道偏好，通过应用内消息、智能语音、邮件、短信、微信等各种渠道向目标用户发送有针对性的消息，培育和激活用户" />     
            </Helmet>
            <div className={styles.heiti}>
                <div style={{height:"144px"}}></div>
                
                <div className={styles.container}>
                    <div style={{height:"20px",display:"block"}}></div>
                    <div className={styles.g__row}>
                        <div className={styles.g__c6}>
                            <span className={styles.f__medium}>
                                <div className={styles.transform_200px}>
                                    <h2>引导和吸引客户</h2>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.bg__light}>
                        
                        <div className={styles.u__hidden}>
                            <img  src={require("../images/146.png")} alt="将更多注册用户转变为活跃的付费客户" />
                        </div>
                        <div className={styles.u__hidden1}>
                            <img  src={require("../images/147.png")} alt="将更多注册用户转变为活跃的付费客户"/>
                        </div>
                        <div className={styles.u__zfix}>

                            <div className={styles.transform_1317px}></div>
                            <h1 className={styles.t__h1_s}>
                                将更多注册用户转变为活跃的付费客户
                            </h1>
                            <div style={{height:"10px"}}></div>
                            <h2 className={styles.t__h3_d}>
                                <font>
                                    根据用户渠道偏好，通过应用内消息、智能语音、邮件、短信、微信等各种渠道向目标用户发送有针对性的消息，培育和激活用户，提高用户参与度，宣布新功能等
                                </font>
                            </h2>
                            <div style={{height:"20px"}}></div>
                            <div className={styles.u__inline_transform}>                                    <EnterYourMobile size="middle"/> 
                            </div>
                            <div style={{height:"10px"}}></div>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                <Free />
                            </div>

                        </div>        
                    </div>
                </div>


                <section style={{paddingTop:"120px"}}>
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

                            <ImageHoverCard texts={{title:"细分",desc:"根据行为和时间细分客户",image:"148.png", link: {href:"#xifen"} }}/>

                            <ImageHoverCard texts={{title:"培育",desc:"发送一系列定制化自动消息引导客户使用产品",image:"149.png", link: {href:"#yindao"} }}/>
                            
                            <ImageHoverCard texts={{title:"发布",desc:"发布产品新特性，提高产品使用率，增加营业额",image:"150.png", link: {href:"#fabu"} }}/>
                            
                            
                        </div>                        
                    </div>
                </section>
                
            </div>
	    </Layout>
    )
}
