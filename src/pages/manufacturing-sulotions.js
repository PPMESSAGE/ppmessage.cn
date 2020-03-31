import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import KeyFeatures from "../components/keyfeatures";
import {Helmet} from "react-helmet";
import Layout from "./layout";
import Free from "../components/free_trial";

export default () =>{

    let _features = [
        {
            title: "全渠道",
            alt: "网页、电话、邮件、社交媒体的各种客户对话消息集中接入",
            desc: "网页、电话、邮件、社交媒体的各种客户对话消息集中接入",
            image: require("../images/呼叫中心的图.jpg")
        },
        {
            title: "智能客服机器人",
            alt: "7X24小时无间断服务，采用自然语言方式添加知识库，知识的添加和维护更加简单便捷；基于NLP的智能语音问答系统",
            desc: "7X24小时无间断服务，采用自然语言方式添加知识库，知识的添加和维护更加简单便捷；基于NLP的智能语音问答系统",
            image: require("../images/64.png")
        },

        {
            title: "强大统计报表，完善数据分析",
            alt: "跨渠道通用报表机制，支持销售转化率，客户满意度、客户工作量、会话来源等多种报表类型，各项业务数据完美呈现",
            desc: "跨渠道通用报表机制，支持销售转化率，客户满意度、客户工作量、会话来源等多种报表类型，各项业务数据完美呈现",
            image: require("../images/50.png")
        },

        {
            title: "智能电销、邮件、短信、微信营销",
            alt: "规避轰炸式营销陷阱，根据用户的属性和行为在特定时点向用户发送个性化邮件、短信和微信消息或进行智能电销（自动外呼和语音机器人），保证企业口碑的同时提升销售转化",
            desc: "规避轰炸式营销陷阱，根据用户的属性和行为在特定时点向用户发送个性化邮件、短信和微信消息或进行智能电销（自动外呼和语音机器人），保证企业口碑的同时提升销售转化",
            image: require("../images/80.jpeg")
        },
    ]
    let _features1 = [
        {
            title: "工单系统",
            alt: "打通售前售后环节，客服工单分配、转派、变更、提醒、业务流和SLA随心定制",
            desc: "打通售前售后环节，客服工单分配、转派、变更、提醒、业务流和SLA随心定制",
            image: require("../images/86.png")
        },
        {
            title: "与ERP和CRM系统无缝集成",
            alt: "通过特有的流程功能与ERP与CRM系统无缝集成，消灭信息孤岛",
            desc: "通过特有的流程功能与ERP与CRM系统无缝集成，消灭信息孤岛",
            image: require("../images/93.png")
        },

        {
            title: "现场管理",
            alt: "签到、拍照、记录、总结、验收、满意度评价、支付宝微信收款全方位支持",
            desc: "签到、拍照、记录、总结、验收、满意度评价、支付宝微信收款全方位支持",
            image: require("../images/169.png")
        },

        {
            title: "统计考核",
            alt: "客服工作量和服务质量实时统计",
            desc: "客服工作量和服务质量实时统计",
            image:require("../images/90.png")
        },        
    ]

    
    return(
	    <Layout>
            <Helmet>
                <title>制造业客服解决方案-PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统</title>
                <meta name="keywords" content="制造业客服，企业客服，制造业在线客服，制造业智能客服，制造业在线客服系统" />
                <meta name="description" content="PPMESSAGE可定制的跨时区、跨地域、多语言的全球客户支持和维修工单流转系统，及时响应来自各种渠道的咨询包括送货、安装、维修等，通过贯穿于厂商、经销商、售后服务中心及特约维修网点的工单流转系统为客户提供全面支持。" />     
                


                
            </Helmet>
            <div className={styles.heiti}>
                <div style={{height:'72px'}}></div>
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>
                        
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <h1>制造业客服解决方案</h1>
                            <div className={styles.sp__5}>
                                <h2 style={{fontSize:"36px",fontWeight:"150"}}>
                                    可定制的跨时区、跨地域、多语言的全球客户支持和维修工单流转系统
                                </h2>
                                <div style={{height:"10px"}}>
                                </div>
                                <h3 style={{color:'#888',fontWeight:"100"}}>
                                    及时响应来自各种渠道的咨询包括送货、安装、维修等，通过贯穿于厂商、经销商、售后服务中心及特约维修网点的工单流转系统为客户提供全面支持
                                </h3>
                                <div style={{height:"20px"}}>            
                                </div>
                                <EnterYourMobile size="middle"/>
                                <div style={{height:"15px"}}></div>
                                <div className={styles.mobile_display}>

                                    <div className={styles.t__small}>
                                        <div className={styles.list__bulletinline}>
                                            <Free />        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c6}>
                            <div>
                                <img src={require("../images/125.png")} alt="PPMESSAGE可定制的跨时区、跨地域、多语言的全球客户支持和维修工单流转系统，及时响应来自各种渠道的咨询包括送货、安装、维修等，通过贯穿于厂商、经销商、售后服务中心及特约维修网点的工单流转系统为客户提供全面支持" />
                            </div>
                        </div>
                    </div>  
                </div>

                <section>
                    <div className={styles.container__narrower}>
                        <h3 className={styles.f__center}>
                            <font>基于人工智能的全渠道智能客服解决方案</font>
                        </h3>
                        <div style={{height:"30px"}}></div>
                        <div className={styles.container__narrower}>
                            <h5 className={styles.f__center1}>
                                <font>
                                    提供全渠道智能客服解决方案，将可全球分布式组网的大容量呼叫中心与其他客服通道无缝集成，一站式处理所有客户咨询 
                                </font>
                            </h5>
                        </div>
                        <div style={{height:'80px'}}></div>
                        <div className={styles.tupian}>
                            <KeyFeatures features={_features}>
                            </KeyFeatures>
                        </div>
                    </div>      
                </section>

                <section>
                    <div style={{height:"10em"}}></div>
                    <div className={styles.container__narrower}>
                        <h3 className={styles.f__center}>
                            <font>与业务无缝集成的智能工单流转系统</font>
                        </h3>
                        <div style={{height:"30px"}}></div>
                        <div className={styles.container__narrower}>
                            <h5 className={styles.f__center1}>
                                <font>
                                    与企业ERP和CRM系统无缝集成，联结用户、厂商、供应商、维修商和上门服务人员，大幅提升企业服务水平
                                </font>
                            </h5>
                        </div>
                        <div style={{height:"80px"}}></div>
                        <div className={styles.tupian}>
                            <KeyFeatures rtl="true" features={_features1}>
                            </KeyFeatures>
                        </div>
                    </div>      
                </section>
            </div>
	    </Layout>
    )
}

