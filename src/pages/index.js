import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import KeyFeatures from "../components/keyfeatures";
import WorthCompany from "../components/worthcompany";
import Layout from "./layout";
import {Helmet} from "react-helmet";
import Free from "../components/free_trial";

export default () =>{

    let _features = [
        {
            title: "全渠道在线客服",
            desc: "网页、电话、邮件、社交媒体的各种客户对话消息集中接入",
            alt: "网页、电话、邮件、社交媒体的各种客户对话消息集中接入",
            image: require("../images/94.jpeg") 
        },

        {
            title: "单一工作台界面",
            desc: "单一工作台界面统一处理，各种渠道交互无缝切换",
            alt: "单一工作台界面统一处理，各种渠道交互无缝切换",
            image: require("../images/75.png")
        },

        {
            title: "可定制化工单系统",
            desc: "打通售前售后环节，工单分配、转派、变更、提醒、业务流和SLA随心定制",
            alt: "打通售前售后环节，工单分配、转派、变更、提醒、业务流和SLA随心定制",
            image: require("../images/86.png")
        },
        
        {
            title: "强大统计报表，完善数据分析",
            desc: "跨渠道通用报表机制，支持销售转化率，客户满意度、客户工作量、会话来源等多种报表类型，各项业务数据完美呈现",
            alt: "跨渠道通用报表机制，支持销售转化率，客户满意度、客户工作量、会话来源等多种报表类型，各项业务数据完美呈现",
            image: require("../images/50.png")
        },      
    ]
    
    let _features1 = [
        {
            title: "客户细分",
            desc: "基于客户属性和行为实施细分目标客户",
            alt: "基于客户属性和行为实施细分目标客户",
            image: require("../images/92.png")
        },
        {
            title: "外发消息",
            desc: "自动或手动向目标客户发送应用内消息、邮件、短信、微信、语音，或自动提醒业务人员通过电话或视频与客户联系",
            alt: "自动或手动向目标客户发送应用内消息、邮件、短信、微信、语音，或自动提醒业务人员通过电话或视频与客户联系",
            image: require("../images/外发消息.png")
        },

        {
            title: "测试和优化",
            desc: "A/B测试发送的消息内容，获取最佳发送效果，提高客户转化率",
            alt: "A/B测试发送的消息内容，获取最佳发送效果，提高客户转化率",
            image: require("../images/测试和优化.png")
        },

        {
            title: "应用集成",
            desc: "提供与第三方业务整合，扩展您的营销工具",
            alt: "提供与第三方业务整合，扩展您的营销工具",
            image: require("../images/74.jpeg")
        },        
    ]

    let _features2 = [
        {
            title: "销售机器人",
            desc: "24/7随时获取、评估网站上的商机，无需代码定制，加快销售周期，提供超越人类极限的业务增长机会",
            alt: "24/7随时获取、评估网站上的商机，无需代码定制，加快销售周期，提供超越人类极限的业务增长机会",
            image:require("../images/80.jpeg")
        },
        {
            title: "语音机器人",
            desc: "基于智能语音交互的人机融合平台，替代人工销售，延伸售后服务",
            alt: "基于智能语音交互的人机融合平台，替代人工销售，延伸售后服务",
            image: require("../images/161.png")
        },

        {
            title: "客服机器人",
            desc: "基于NLP， 365天不间断服务，高效率解决重复性问题，大幅降低人工客服成本",
            alt: "基于NLP， 365天不间断服务，高效率解决重复性问题，大幅降低人工客服成本",
            image: require("../images/79.png")
        },

        {
            title: "可定制化",
            desc: "快速设计生成满足您业务需要的机器人组群",
            alt: "快速设计生成满足您业务需要的机器人组群",
            image: require("../images/82.png")
        },
    ]

    let _features3 = [
        {
            title: "流程生成器",
            desc: "业内独有的拖拽式流程设计器，为每一个客户快速生成适应其业务特点的消息流程",
            alt: "业内独有的拖拽式流程设计器，为每一个客户快速生成适应其业务特点的消息流程",
            image: require("../images/93.png")
        },

        /* {
         *     title: "丰富的应用商店",
         *     desc: "根据业务需要随时增减功能模块，定制客户交互界面",
         *     alt: "根据业务需要随时增减功能模块，定制客户交互界面",
         *     image:require("../images/74.jpeg")
         * }, */

        {
            title: "自定义字段和视图",
            desc: "根据业务特点随时自定义可检索可排序的数据字段及强大的自定义视图功能，迅速满足客户最低层面的定制化需求",
            alt: "根据业务特点随时自定义可检索可排序的数据字段及强大的自定义视图功能，迅速满足客户最低层面的定制化需求",
            image: require("../images/83.png")
        },

        {
            title: "功能强大的开发接口",
            desc: "提供灵活的开发接口，快速满足客户定制需求",
            alt: "提供灵活的开发接口，快速满足客户定制需求",
            image: require("../images/82.png")
        },

    ]
    return(
	    <Layout>
            <Helmet>
                <title>PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统</title>
                <meta name="keywords" content="在线客服系统，网站客服系统，智能客服系统，在线客服，云呼叫中心，客服机器人，语音机器人" />
                <meta name="description" content="PPMESSAGE是业界领先的新一代全渠道在线客服系统，为企业提供在线客服，网站客服,云呼叫中心,销售机器人,客服机器人和语音机器人的一体化解决方案。电商，教育，金融，互联网，医疗，智能制造，旅游餐饮等行业领袖的选择。" />

            </Helmet>
            
            <div className={styles.heiti}>
                <div style={{height:'72px'}}></div>
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c6_index}>
                            <div style={{height:"100px"}}></div>
                            <div className={styles.sp__5}>
                                <h1 style={{fontSize:"36px",fontWeight:"150"}}>
                                    获取，转化和留存客户的新一代智能在线客服系统
                                </h1>
                                <div style={{height:"10px"}}>
                                </div>
                                <h2 style={{color:'#888',fontWeight:"100"}}>
                                    跨数字化及语音渠道，将网页，电话，邮件，社交媒体和应用内对话转化为标准消息，并通过消息进行销售，营销和客户支持，打造卓越客户历程，促进企业成长
                                </h2>
                                <div style={{height:"20px"}}>            
                                </div>
                                <EnterYourMobile size="middle" />
                                <div style={{height:"10px"}}>            
                                </div>
                                <Free />
                            </div>
                        </div>
                        <div className={styles.g__c6}>
                            <div>
                                <img style={{maxWidth:"100%"}} src={require("../images/index.jpeg")}
                                     alt="跨数字化及语音渠道，将网页，电话，邮件，社交媒体和应用内对话转化为标准消息，并通过消息进行销售，营销和客户支持，打造卓越客户历程，促进企业成长" />
                            </div>
                        </div>
                    </div>  
                </div>

                <section >
                    <div className={styles.index_200px_s}></div>
                    <div className={styles.container__narrower}>
                        <h2 className={styles.f__center}>
                            <font>完美的销售，营销和在线客服工具</font>
                        </h2>
                        <div style={{height:"30px"}}>
                        </div>
                        <div className={styles.g__row3}>
                            <div className={styles.g__row} style={{"justifyContent": "center"}}>
                                <div className={styles.g__c4}>            
                                    <div className={styles.u__flex}>
                                        <div className={styles.main1}>
                                            <div className={styles.sp__2}></div>
                                            <div className={styles.label}>
                                                <h2>获取和转化线索
                                                </h2>
                                                <font className={styles.ziti}> 通过与网站访客实时互动获取销售线索，通过AI工具评估和分配线索，通过全渠道自动化营销工具将线索转化为商机
                                                </font>
                                                <div style={{height:"15px"}}></div>
                                                <div>
                                                    <font>智能客服·营销自动化·语音机器人</font></div>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/transform-customs" className={styles.ziti1}>了解更多
                                                </a>  
                                            </div>                                                                   </div>              
                                    </div>  
                                </div>
                                <div className={styles.g__c4}>
                                    <div className={styles.u__flex}>
                                        <div className={styles.main1}>
                                            <div className={styles.sp__2}></div>
                                            <div className={styles.label}>
                                                <h2>培育和吸引客户
                                                </h2>
                                                <font className={styles.ziti}> 发送有针对性的电子邮件，短信，应用内推送消息和智能语音将更多注册用户转化为付费用户
                                                </font>
                                                <div style={{height:"15px"}}></div>
                                                <div><font>营销自动化·智能语音机器人</font></div>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/guide-attract-customers" className={styles.ziti1}>了解更多
                                                </a>  
                                            </div>                                
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.g__c4}>
                                    <div className={styles.u__flex}>
                                        <div className={styles.main1}>                                                   <div className={styles.label}>
                                            <h2>支持并提高客户满意度
                                            </h2>
                                            <font className={styles.ziti}>
                                                云呼叫中心，客服机器人及与业务无缝集成，在有效降低成本的同时更快的解决客户问题
                                            </font>
                                            <div style={{height:"15px"}}></div>
                                            <div><font>云呼叫中心·客服机器人</font></div>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/conversion-business" className={styles.ziti1}>
                                                了解更多
                                            </a>  
                                        </div>                                                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{height:"180px"}}></div>
                    </div>
                </section>
                                
            </div>
	    </Layout>
    )
}
