import React from "react";
import PPButton from "../components/buttton";
import styles from "./about-css-modules.module.css";
import {Helmet} from "react-helmet";
import Layout from "./layout";


export default () => (
	<Layout>
        <Helmet>
            <title>客服业务定制-PPMESSAGE-新一代智能全渠道在线客服系统_网站客服系统</title>
            <meta name="keywords" content="定制化在线客服系统，独立部署在线客服，客服系统私有化部署"/>
            <meta name="description" content="PPMESSAGE智能客服系统独有的流程生成器，工具丰富的APP商店，功能强大的API接口，自定义字段和视图，可按客户要求快速生成符合客户业务特点的定制化客服解决方案" />
        </Helmet>
        <div className={styles.heiti}>

            <div style={{height:`72px`}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <h1>业务定制</h1>
                        <div className={styles.sp__5}>
                            <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>独有的流程实现业务快速定制
                            </h2>
                            <div style={{height:"10px"}}>
                            </div>
                            <h3 style={{color:'#888'}}><font className={styles.biaoti}>流程生成器、工具丰富的应用商店、功能强大的开发接口、自定义字段和视图，可按客户要求快速生成符合客户业务特点的定制化解决方案。</font>
                            </h3>
                            <div style={{height:"20px"}}>            
                            </div>
                            <div>
                                <div className={styles.f__center}>
                                    <div className={styles.btn_s}> 
                                        <PPButton />  
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className={styles.g__c6}>
                        <div>
                            <img src={require("../images/96.png")} alt="PPMESSAGE 智能客服系统独有的流程生成器，工具丰富的应用商店，功能强大的开发接口，自定义字段和视图，可按客户要求快速生成符合客户业务特点的定制化客服解决方案" />
                        </div>
                    </div>
                </div>  
            </div>
        </div>
	</Layout>
);

