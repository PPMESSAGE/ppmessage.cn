import React from "react";
import PPButton from "../components/buttton";
import styles from "./about-css-modules.module.css";
import {Helmet} from "react-helmet";
import Layout from "./layout";
import PageHeader from "../components/pageheader";


export default () => (
	<Layout>
        <Helmet>
            <title>客服业务定制-PPMESSAGE-新一代智能全渠道在线客服系统_网站客服系统</title>
            <meta name="keywords" content="定制化在线客服系统，独立部署在线客服，客服系统私有化部署"/>
            <meta name="description" content="PPMESSAGE智能客服系统独有的流程生成器，工具丰富的APP商店，功能强大的API接口，自定义字段和视图，可按客户要求快速生成符合客户业务特点的定制化客服解决方案" />
        </Helmet>
        <div className={styles.heiti}>

            <PageHeader texts={{
                title: "业务定制",
                image: "96.png",
                desc: {
                    ps: [
                        "独有的流程实现业务快速定制",
                        "流程生成器、功能强大的开发接口、自定义字段和视图",
                        "按客户要求快速生成符合客户业务特点的定制化解决方案"
                    ]
                }
            }}/>
                        
        </div>
	</Layout>
);

