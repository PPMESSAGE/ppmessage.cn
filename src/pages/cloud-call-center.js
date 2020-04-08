import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import Helmet from "react-helmet";
import Layout from "./layout";
import PPKeyFeatures from "../components/ppkeyfeatures";
import Free from "../components/free_trial";
import HoverCard from "../components/hovercard";
import PageHeader from "../components/pageheader";

export default () =>{
    let _features = [
        {
            title: "全球化呼叫中心系统",
            desc: "跨地域、跨时区、多语言，支持语音通话跨地域转接，保障全球客服24小时在线",
            alt: "跨地域、跨时区、多语言，支持语音通话跨地域转接，保障全球客服24小时在线",
            image: require("../images/138.png")
        },
    ]

    let _features1 = [
        {
            title: "多渠道接入，一站式响应服务",
            desc: "电话、网页、应用、邮件、社交媒体通过一个界面统一管理，客户通过各个渠道的访问信息统一检索",
            alt: "电话、网页、应用、邮件、社交媒体通过一个界面统一管理，客户通过各个渠道的访问信息统一检索",
            image: require("../images/127.png")
        },
    ]

    let _features2 = [
        {
            title: "业务快速定制",
            desc: "电话与其他渠道消息通过统一流程集中处理，不仅仅是IVR；通过流程及开发接口快速实现企业业务定制",
            alt: "电话与其他渠道消息通过统一流程集中处理，不仅仅是IVR；通过流程及开发接口快速实现企业业务定制",
            image: require("../images/82.png")
        },
    ]

return(
	<Layout>
        <Helmet>
            <title>云呼叫中心|呼叫中心解决方案-PPMESSAGE-新一代智能全渠道在线客服系统_网站客服系统</title>
            <meta charsets="UTF-8" />
            <meta name="keywords" content="客服系统，云呼叫中心,呼叫中心系统,呼叫中心软件,电话客服,电话销售，在线客服" />
            <meta name="description" content="PPMESSAGE全渠道跨国云呼叫中心是基于云计算的新一代呼叫中心解决方案，支持跨时区、跨地域、多语言分布式组网，是真正All-in-One的客户体验与联络中心，系统安全可靠，部署方式灵活" />
            
        </Helmet>
        <div className={styles.heiti}>
            <div style={{height:"144px"}}></div>

            <PageHeader texts={{
                title: "云呼叫中心",
                image: "165.png",
                desc: {
                    ps: [
                        "全渠道全球云呼叫中心解决方案",
                        "基于云计算的新一代呼叫中心",
                        "支持跨时区、跨地域、多语言分布式组网"
                    ]
                }
            }}/>
            
            
            
            <section>
                <div className={styles.container__narrower} style={{display:"flex", flexDirection:"row"}}>
                    
                    <HoverCard texts={{title: "全球化", desc:"跨时区、多语言，保障全球客服24小时在线", link:{href:"#global"}}} />

                    <HoverCard texts={{title: "全渠道", desc:"电话、网页、应用、邮件、社交媒体通过一个界面统一管理", link:{href:"#full"}}} />

                    <HoverCard texts={{title: "可定制", desc:"电话与其他渠道消息通过统一流程集中处理，通过流程及开发接口快速实现企业业务定制", link:{href:"#custom"}}} />
                    
                </div>
            </section>

            <section id="global">
                <div className={styles.container_z}>
                    <PPKeyFeatures rtl="true" features={_features}>
                    </PPKeyFeatures>
                </div>
            </section>

            <section id="full">
                <div className={styles.container_z}>
                    <PPKeyFeatures rtl="false" features={_features1}>
                    </PPKeyFeatures>
                </div>
            </section>

            <section id="custom">
                <div className={styles.container_z} >
                    <PPKeyFeatures rtl="true" features={_features2}>
                    </PPKeyFeatures>
                </div>
            </section>
            
        </div>
	</Layout>
);
}
