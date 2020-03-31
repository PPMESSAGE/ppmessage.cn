import React from "react";
import styles from "./about-us.module.css";

import Layout from "./layout";
import {Helmet} from "react-helmet";


export default () => (
    <Layout>

        <Helmet>
            <title>关于PPMESAGE-PPMESSAGE-新一代智能全渠道在线客服系统_网站客服系统</title>
            <meta charsets="UTF-8" />
            <meta name="description" content="北京优锐科技有限公司（PPMESSAGE）成立于2010年，自主研发全渠道智能在线客服系统软件，简单易用，安全稳定。9年行业深耕，为数万家企业提供在线客户服务。" />
            <meta name="keywords" content="在线客服系统，网站客服系统，PPMESSAGE，北京优锐，北京优锐科技" />
            
        </Helmet>

        <div className={styles.heiti}>        
            <div className={styles.banner}>            
            </div>
            <div className={styles.menu}>
                <ul className={styles.ul}>
                    <li className={styles.active}>
                        <a href="#about-us" className={styles.a}>
                            关于我们
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a href="#lianxiwomen" className={styles.a}>
                            联系我们
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.m1}>
                <div style={{height:"80px"}}></div>
                <div className={styles.title}>
                    <p className={styles.p1} style={{marginBottom:"0px"}}>公司简介
                    </p>
                    <p className={styles.p2}>Company profile
                    </p>
                </div>
                <div style={{height:"255px"}}>
                    <div className={styles.img}>
                        <img src={require("../images/95.png")} alt="PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统" />
                    </div>
                    <div className={styles.text}>
                        <p className={styles.text1}>北京优锐科技成立于2010年，是一家基于消息会话提供全新智能客服和自动化营销服务的云服务厂商。拥有多项国家发明专利和多项软件著作权。

                            公司的宗旨是为全球各类企业提供可扩展的、可私有部署的消息会话系统，既满足多变的业务需求，又充分保障数据隐私。

                            公司核心管理层来自于清华大学、大连理工大学、北京邮电大学等国内著名高校，在呼叫中心、即时通讯、机器学习、操作系统等相关领域有20年经验积累。同时我们也是一支充满激情和创造力的团队。技术领导层均来自云计算、SaaS、大数据等领域的知名技术公司。

                        </p>
                        <p className={styles.text1}>公司团队主持开发的产品拥有客户涉及电信、烟草、银行、证券、保险、电力、工商、税务、社保、公安、邮政、交通、医疗、媒体、旅游以及政府、科研机构和公共事业等众多行业，在市场上赢得了用户和业界的广泛肯定。

                        </p>
                    </div>
                </div>
            </div>
            <section id="lianxiwomen" />
            <div className={styles.m1}>
                <div style={{height:"80px"}}></div>
                <div className={styles.title}>
                    <p className={styles.p1} style={{marginBottom:"0px"}}>
                        联系我们
                    </p>
                    <p className={styles.p2}>Contact us
                    </p>
                </div>
                <div style={{width:"1060px",margin:"0 auto" }} className={styles.text_s}>
                    <div className={styles.float}>
                        <ul className={styles.m2_ul}>
                            <li className={styles.m2_li}>
                                
                                <img src={require("../images/aboutus-telephone.png")} style={{marginRight:"10px",marginTop:"-3px",marginBottom:"-5px"}} alt="PPMESSAGE 公司电话" />
                                <div style={{display:"inline-block"}}><font style={{fontWeight:"bold",fontSize:"15px"}}>联系电话：</font><font>010-64188187</font>
                                </div>
                            </li>
                            <li className={styles.m2_li}>
                                <img src={require("../images/aboutus-mail.png")} style={{marginRight:"10px",marginTop:"-3px",marginBottom:"-5px"}} alt="PPMESSAGE 公司邮箱"/>
                                <div style={{display:"inline-block"}}><font style={{fontWeight:"bold",fontSize:"15px"}}>邮箱联系：</font><font>support@mg.ppmessage.cn</font>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.float} style={{marginRight:"85px"}}>

                        <ul className={styles.m2_ul}>
                            <li className={styles.m2_li}>
                                <img src={require("../images/aboutus-address.png")} style={{marginRight:"10px",marginTop:"-3px",marginBottom:"-5px"}} alt="PPMESSAGE 公司地址" />
                                <div style={{display:"inline-block"}}><font style={{fontWeight:"bold",fontSize:"15px"}}>销售和客户支持中心：</font><font>北京市朝阳区锦芳路1号院1号楼2单元2003
                                </font>
                                </div>
                            </li>
                            <li className={styles.m2_li}>
                                <img src={require("../images/aboutus-address.png")} style={{marginRight:"10px",marginTop:"-3px",marginBottom:"-5px"}} alt="PPMESSAGE 公司地址" />
                                <div style={{display:"inline-block"}}><font style={{fontWeight:"bold",fontSize:"15px"}}>研发中心：</font><font>北京市海淀区中关村东升科技园B-2楼一层
                                </font>
                                </div>                                                                   </li>                        
                        </ul>                   
                    </div>
                    <div className={styles.float} >
                        <img src="https://ppmessage.cn/images/qrcode_wechat_offical-pp-message.jpg" width="92px"  style={{marginBottom:"0"}} alt="PPMESSAGE 微信公众号" />
                        <p>微信公众号
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);
