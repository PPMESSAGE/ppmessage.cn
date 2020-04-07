import React from "react";
import EnterYourMobile from "../components/enteryourmobile";
import styles from "./about-css-modules.module.css";
import FeatherModal from "../components/feathermodal";
import Layout from "./layout";
import {Helmet} from "react-helmet";
import Free from "../components/free_trial";
import HoverCard from "../components/hovercard";

export default () => (
	<Layout>
        <Helmet>
            <title>智能客服解决方案-PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统</title>
            <meta name="keywords" content="在线客服，客服系统，在线客服系统，智能客服，网站客服系统，在线客服软件" />
            <meta name="description" content="PPMESSAGE 新一代全渠道智能在线客服系统，以人工智能为基础，为企业提供集在线客服系统、云呼叫中心、工单系统和营销自动化于一体的智能客服解决方案。" />

        </Helmet>
        
        <div className={styles.heiti}>
            <div style={{height:`144px`}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <h1>智能客服</h1>
                        <div className={styles.sp__5}>
                            <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>批量管理与访客和客户的在线对话
                            </h2>
                            <div style={{height:"10px"}}>
                            </div>
                            <h3 style={{color:'#888'}}>
                                <font className={styles.biaoti}>
                                    在您的网站，移动应用，电子邮件和社交网络中与访客和客户在线对话
                                </font>
                            </h3>
                            <div style={{height:"20px"}}>            
                            </div>
                            <div>
                                <EnterYourMobile size="middle"/>                            
                            </div>
                            <div style={{height:"10px"}}></div>
                            <Free />
                        </div>
                    </div>
                    <div className={styles.g__c6}>
                        <div>
                            <img src={require("../images/162.png")} alt="PPMESSAGE 新一代全渠道智能在线客服系统，以人工智能为基础，为企业提供集在线客服系统、云呼叫中心、工单系统和营销自动化于一体的智能客服解决方案" />
                        </div>
                    </div>
                </div>  
            </div>


            <section>
                <div className={styles.container__narrower} style={{display:"flex", flexDirection:"row"}}>
                    
                    <HoverCard texts={{title: "多渠道在线客服", desc:"网页、移动端、社交媒体、电话、邮件等多渠道接入客户对话", link:{href:"#qudao"}}} />

                    <HoverCard texts={{title: "一个界面", desc:"为在线客服团队配备统一的全渠道界面", link:{href:"#jiemian"}}} />
                    <HoverCard texts={{title: "多渠道自动化工作流程", desc:"减少重复性工作花费的时间", link:{href:"gongzuoliucheng"}}} />
                    
                </div>
            </section>

            <section id="qudao"  className={styles.section}>
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}} />
                </div>
            </section>

            <section>      
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>

                        <div className={styles.g__c3}>
                            <h2><font className={styles.huise}>多渠道智能客服</font></h2>
                            <div className={styles.huisesmaller}>
                                <font>网页、移动端、社交媒体、邮件、电话等多渠道接入客户对话</font>
                            </div>
                        </div>

                        <div className={styles.g__c8}>
                            <div className={styles.g__row}>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "聊天组件", icon:require("../icon/6.1.1.png"),desc:"与您网站、移动设备和应用内的访客实时文字聊天和语音对话"}}>
                                        </FeatherModal>

                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>

                                        <FeatherModal abstract={{title: "呼叫中心", icon: require("../icon/6.1.2.png"), desc: "可以通过智能客服座席工作台直接接打客户电话，发送查收短信，查看客户资料和录音信息"}}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>

                                        <FeatherModal abstract={{title: "微信小程序和公众号", icon:require ("../icon/6.1.3.png"), desc: "通过智能客服座席工作台应答微信访客咨询"}}>
                                        </FeatherModal>

                                        
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>

                                        <FeatherModal abstract={{title: "邮件转发", icon:require("../icon/6.1.4.png"), desc: "将电子邮件从任何地址转发至座席工作台"}}>
                                        </FeatherModal>
                                    </div>
                                </div>              
                            </div>            
                        </div>
                        
                    </div>        
                </div>              
            </section>
            


            <section id="jiemian"  className={styles.section}>
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}}/>
                </div>
            </section>

            <section>      
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>

                        <div className={styles.g__c3}>
                            <h3><font className={styles.huise}>唯一界面</font></h3>
                            <div className={styles.huisesmaller}>
                                <font>为团队配备统一的全渠道桌面，提供所有背景信息及相关知识，单一界面管理所有客户互动</font>
                            </div>
                        </div>
                        <div className={styles.g__c8}>
                            <div className={styles.g__row}>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "消息汇聚", icon:require("../icon/6.1.5.png"), desc: "将网页、移动端、社交媒体、邮件、电话等渠道的会话转入统一座席工作台"}}>
                                        </FeatherModal>

                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "客户信息", icon:require("../icon/6.1.6.png"), desc: "同步展示客户的基本信息，并可实时更新，支持字段自定义及检索排序"}}>
                                        </FeatherModal>

                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "用户轨迹", icon:require("../icon/6.1.7.png"), desc: "用户历史访问记录实时查询"}}>
                                        </FeatherModal>

                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>
                                        <FeatherModal abstract={{title: "团队协作", icon:require("../icon/6.1.8.png"), desc: "直接从团队成员处获取相关信息而不干扰用户"}}>
                                        </FeatherModal>
                                    </div>
                                </div>              
                            </div>            
                        </div>
                    </div>        
                </div>              
            </section>

            <section  id="gongzuoliucheng" className={styles.section}>
                <div className={styles.container__narrower}>
                    <hr style={{height:"1px"}}/>
                </div>                
            </section>

            <section>      
                <div className={styles.container__narrower}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c3}>
                            <h3><font className={styles.huise}>自动化工作流程</font></h3>
                            <div className={styles.huisesmaller}>
                                <font>减少重复性工作花费的时间</font>
                            </div>
                        </div>
                        <div className={styles.g__c8}>
                            <div className={styles.g__row}>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>

                                        <FeatherModal abstract={{title: "会话分配流程", icon:require("../icon/6.1.9.png"), desc: "根据访客的属性和行为将会话根据随机、循环等分配策略分配给对应客服或客服组"}}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>


                                        <FeatherModal abstract={{title: "预置话术", icon:require("../icon/6.1.10.png"), desc: "预置回答常见问题的标准答案"}}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>

                                        <FeatherModal abstract={{title: "智能提示", icon:require("../icon/6.1.11.png"), desc: "根据历史谈话记录智能建议问题答案"}}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>

                                <div className={styles.g__c6}>
                                    <div className={styles.features__block}>

                                        <FeatherModal abstract={{title: "会话评级", icon:require("../icon/6.1.12.png"), desc: "自动收集客户满意度评分"}}>
                                        </FeatherModal>
                                        
                                    </div>
                                </div>
                                
                            </div>            
                        </div>
                        
                    </div>        
                </div>              
            </section>

        </div>
	</Layout>
);
