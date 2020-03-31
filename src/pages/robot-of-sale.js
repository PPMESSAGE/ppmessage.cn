import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import {Helmet} from "react-helmet";
import Free from "../components/free_trial";
import Layout from "./layout";

export default () => (
	<Layout>
        <Helmet>
            <title>智能销售机器人-PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统</title>      
            <meta name="keywords" content="智能销售机器人，营销自动化，自动化营销" />
            <meta name="description" content="PPMESSAGE 新一代全渠道智能在线客服系统提供永久在线的智能销售系统机器人为企业源源不断的输送合格的商机信息，自动安排电话或视频会议，推动企业销售快速增长" />
            
        </Helmet>
        <div className={styles.heiti}>
            <div style={{height:"144px"}}></div>

            <div className={styles.container__narrower_robot}>
                <div className={styles.g__row_robot}>
                    <div className={styles.g__c6}>
                        <h1>智能销售机器人</h1>
                        <div className={styles.sp__5}>
                            <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>
                                通过功能强大的销售机器人实现销售数字的快速增长
                            </h2>
                            <div style={{height:"10px"}}>
                            </div>
                            <h3 style={{color:'#888'}}><font className={styles.biaoti}>永久在线的智能销售系统为您源源不断的输送合格的商机信息，自动安排电话或视频会议</font>
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
                            <img src={require("../images/166.png")} alt="PPMESSAGE 新一代全渠道智能在线客服系统提供永久在线的智能销售系统机器人为企业源源不断的输送合格的商机信息，自动安排电话或视频会议，推动企业销售快速增长" />
                        </div>
                    </div>
                </div>  
            </div>
            
            <section className={styles.section}>
                <div className={styles.A8bLm}>
                    <div className={styles.flex}>
                        <div className={styles.u__flex}>
                            <div className={styles.t__h1} style={{margin:"0px"}}>
                                36%                                                                       </div>
                            <img className={styles.robot_of_sale_img} style={{marginBottom:"0"}} src={require("../images/up.png")} alt="访问者与您网站上的聊天组件互动可将潜在客户转化率提高多达36％" />
                            <div className={styles.t__h3} style={{textAlign:"left"}}>访问者与您网站上的聊天组件互动可将潜在客户转化率提高多达36％
                            </div>    
                        </div>                    
                    </div>
                </div>
            </section>
            
            <section className={styles.section}>
                <div className={styles.container}>
                    
                    <div className={styles.bg__light} style={{backgroundColor:"white"}}>
                        
                        
                        <div className={styles.u__zfix}>
                            <h1 className={styles.t__h1_robot_sale} style={{fontSize:"36px"}}>
                                选择销售机器人的四个理由

                            </h1>
                        </div>
                    </div>
                </div>


                <section className={styles.section_o__no_bottom}>
                    <div className={styles.container}>
                        <div className={styles.g__row_robot}>
                            <div>
                                <div className={styles.chuangjian_robot1} >
                                    <a href="#wujianduan" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img className={styles.ceshi_z} src={require("../images/130.png")} width="91px" alt="无间断获取商机" />
                                            <img src={require("../images/130.png")} width="91px" alt="无间断获取商机" /></div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>1. 24/7无间断获取商机 </font>
                                            </div>
                                            
                                            <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                                <span>
                                                    <font className={styles.smallerbiaoti}>了解更多</font>
                                                </span>                  
                                            </div>                
                                    </a>
                                </div>

                                <div className={styles.chuangjian_robot2}>
                                    <a href="#wukaifa" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>
                                            <img className={styles.ceshi_z} src={require("../images/131.png")} width="91px" alt="无需开发即可定制" />
                                            <img src={require("../images/131.png")} width="91px" alt="无需开发即可定制" /></div>                                   <div style={{height:"10px"}}></div>
                                            <div className={styles.t__h3}>
                                                <font>2. 无需开发即可定制</font>
                                            </div> 
                                            <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                                <span>
                                                    <font className={styles.smallerbiaoti}>了解更多</font>
                                                </span>                  
                                            </div>                
                                    </a>
                                </div>
                                

                                <div className={styles.chuangjian_robot3} >
                                    <a href="#suozhouqi" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>

                                            <img className={styles.ceshi_z} src={require("../images/132.png")} width="91px" alt="缩短销售周期" />
                                            <img src={require("../images/132.png")} width="91px" alt="缩短销售周期" />
                                        </div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.t__h3}>
                                            <font>3. 缩短销售周期</font>
                                        </div>
                                        <div className={styles.product__learn_more} style={{margin:"80px"}}>
                                            <span>
                                                <font className={styles.smallerbiaoti}>了解更多</font>
                                            </span>                  
                                        </div>                
                                    </a>
                                </div>



                                <div className={styles.chuangjian_robot4}>
                                    <a href="#chaozengzhang" className={styles.lianjie}>
                                        <div className={styles.product__breakdown__image}>

                                            <img className={styles.ceshi_z} src={require("../images/133.png")} width="91px" alt="超越人类极限的增长" />
                                            <img src={require("../images/133.png")} width="91px" alt="超越人类极限的增长" />
                                        </div>
                                        <div style={{height:"10px"}}></div>
                                        <div className={styles.t__h3}>
                                            <font>4. 超越人类极限的增长</font>
                                        </div>
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
            </section>

            <section id="wujianduan"></section>
            
            <section className={styles.section}>
                <div className={styles.container__narrower_robot}>
                    <div className={styles.g__row_robot}>
                        <div className={styles.g__c6}>
                            <div className={styles.u__flex}>
                                <div>
                                    <div className={styles.back}>
                                        <img src={require("../images/134.png")} alt="销售机器人永久在线工作 — 主动联系客户，提出正确问题，评估销售线索，获取最佳商机" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c6}>
                            <div className={styles.white_s}>
                                <font style={{verticalAlign:"inherit",fontSize:"30px"}}>
                                    1
                                </font>
                            </div>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.t__h2}>
                                <font style={{verticalAlign:"inherit"}}>
                                    24/7 无间断获取商机
                                </font>
                            </div>
                            <div className={styles.c__black}>
                                <font style={{verticalAlign:"inherit"}}> 销售机器人永久在线工作 — 主动联系客户，提出正确问题，评估销售线索，获取最佳商机
                                </font>
                            </div>
                            
                            <div className={styles.g__c12}>
                                <div className={styles.g__row_robot}>
                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img width="32" src={require("../icon/6.5.1.png")} alt="销售机器人可以根据访客的属性和行为发起主动对话" />
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.max__400}>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit",fontWeight:"750",fontSize:"14px"}}>
                                                        与访客进行个性化互动
                                                    </font>
                                                </div>
                                                <div style={{height:"5px"}}></div>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit"}}>
                                                        销售机器人可以根据访客的属性和行为发起主动对话
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img width="32" src={require("../icon/6.5.2.png")} alt="                                                        销售机器人永远不会疲倦或需要度假，24/7无间断捕获商机
                                                " />
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.max__400}>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit",fontWeight:"750",fontSize:"14px"}}>
                                                        永远在线
                                                    </font>
                                                </div>
                                                <div style={{height:"5px"}}></div>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit"}}>
                                                        销售机器人永远不会疲倦或需要度假，24/7无间断捕获商机
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            <section id="wukaifa"></section>
            
            <section className={styles.section}>
                <div className={styles.container__narrower_robot}>
                    <div className={styles.g__row_robot}>
                        <div className={styles.g__c5} style={{marginLeft:"2em"}}>

                            <div className={styles.white_s}>
                                <font style={{verticalAlign:"inherit",fontSize:"30px"}}>
                                    2
                                </font>
                            </div>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.t__h2}>
                                <font style={{verticalAlign:"inherit"}}>
                                    无需开发即可定制
                                </font>
                            </div>
                            <div className={styles.c__black}>
                                <font style={{verticalAlign:"inherit"}}>销售机器人作为您的销售团队的延展，与您的业务流程和数据紧密结合，无需定制开发即可迅速满足您的需求</font>
                            </div>
                            
                            <div className={styles.g__c12}>
                                <div className={styles.g__row_robot}>
                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img width="32" src={require("../icon/6.5.3.png")} alt="提供简易的配置界面让你迅速完成销售机器人的业务定制并上线获取商机" />
                                            </div>
                                            
                                            <div className={styles.max__400}>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit",fontWeight:"750",fontSize:"14px"}}>
                                                        完全可定制
                                                    </font>
                                                </div>
                                                <div style={{height:"5px"}}></div>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit"}}>
                                                        提供简易的配置界面让你迅速完成销售机器人的业务定制并上线获取商机

                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img width="32" src={require("../icon/6.5.4.png")} alt="通过向访客询问正确的问题，将访客引导进入正确的销售通道" />
                                            </div>
                                            
                                            <div className={styles.max__400}>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit",fontWeight:"750",fontSize:"14px"}}>
                                                        个性化销售通道

                                                    </font>
                                                </div>
                                                <div style={{height:"5px"}}></div>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit"}}>
                                                        通过向访客询问正确的问题，将访客引导进入正确的销售通道

                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img width="32" src={require("../icon/6.5.5.png")} alt="商机获取后，可以执行自动化跟进操作。例如，将商机推送给您的CRM系统或将商机分配给合适的销售团队" />
                                            </div>
                                            
                                            <div className={styles.max__400}>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit",fontWeight:"750",fontSize:"14px"}}>
                                                        自动化跟进操作
                                                    </font>
                                                </div>
                                                <div style={{height:"5px"}}></div>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit"}}>
                                                        商机获取后，可以执行自动化跟进操作。例如，将商机推送给您的CRM系统或将商机分配给合适的销售团队
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>

                                
                            </div>
                            
                        </div>
                        <div className={styles.g__c6}>
                            <div className={styles.u__flex}>
                                <div>
                                    
                                    <img src={require("../images/135.png")} alt="商机获取后，可以执行自动化跟进操作。例如，将商机推送给您的CRM系统或将商机分配给合适的销售团队" />
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section id="suozhouqi"></section>

            
            <section className={styles.section}>
                <div className={styles.container__narrower_robot}>
                    <div className={styles.g__row_robot}>
                        <div className={styles.g__c6}>
                            <div className={styles.u__flex}>
                                <div>
                                    <div className={styles.back}>
                                        <img src={require("../images/136.png")} alt="销售机器人自动评估访客是否为合适商机，并让您的团队在他们还在线上时与他们实时联系" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c6}>
                            <div className={styles.white_s}>
                                <font style={{verticalAlign:"inherit",fontSize:"30px"}}>
                                    3
                                </font>
                            </div>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.t__h2}>
                                <font style={{verticalAlign:"inherit"}}>
                                    缩短销售周期
                                </font>
                            </div>
                            <div className={styles.c__black}>
                                <font style={{verticalAlign:"inherit"}}>销售机器人自动评估访客是否为合适商机，并让您的团队在他们还在线上时与他们实时联系 
                                </font>
                            </div>
                            
                            <div className={styles.g__c12}>
                                <div className={styles.g__row_robot}>
                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img width="32" src={require("../icon/6.5.6.png")} alt="实时进行商机分配" />
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.max__400}>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit",fontWeight:"750",fontSize:"14px"}}>
                                                        实时进行商机分配

                                                    </font>
                                                </div>
                                                <div style={{height:"5px"}}></div>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit"}}>
                                                        强大的分配流程，可以将销售机器人获取的商机实时分配给合适的团队


                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img width="32" src={require("../icon/6.5.7.png")} alt="时刻跟进商机进展，并通过各种渠道与商机客户保持联系" />
                                            </div>
                                            <div style={{height:"10px"}}></div>
                                            <div className={styles.max__400}>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit",fontWeight:"750",fontSize:"14px"}}>
                                                        促进交易完成
                                                    </font>
                                                </div>
                                                <div style={{height:"5px"}}></div>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit"}}>
                                                        时刻跟进商机进展，并通过各种渠道与商机客户保持联系

                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            <section id="chaozengzhang"></section>
            
            <section className={styles.section}>
                <div className={styles.container__narrower_robot}>
                    <div className={styles.g__row_robot}>
                        <div className={styles.g__c5} style={{marginLeft:"2em"}}>

                            <div className={styles.white_s}>
                                <font style={{verticalAlign:"inherit",fontSize:"30px"}}>
                                    4
                                </font>
                            </div>
                            <div style={{height:"10px"}}></div>
                            <div className={styles.t__h2}>
                                <font style={{verticalAlign:"inherit"}}>
                                    超越人类极限的增长
                                </font>
                            </div>
                            <div className={styles.c__black}>
                                <font style={{verticalAlign:"inherit"}}>永久在线，批量获取和转化商机，不知疲倦</font>
                            </div>
                            
                            <div className={styles.g__c12}>
                                <div className={styles.g__row_robot}>
                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img width="32" src={require("../icon/6.5.8.png")} alt="据访客的属性和行为随时准备询问正确的问题，无论是他们准备购买还是需要培育" />
                                            </div>
                                            
                                            <div className={styles.max__400}>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit",fontWeight:"750",fontSize:"14px"}}>
                                                        时刻准备沟通

                                                    </font>
                                                </div>
                                                <div style={{height:"5px"}}></div>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit"}}>
                                                        据访客的属性和行为随时准备询问正确的问题，无论是他们准备购买还是需要培育

                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.g__c6}>
                                        <div className={styles.f__left}>
                                            <div className={styles.product__feature_icon}>
                                                <img width="32" src={require("../icon/6.5.9.png")} alt="销售机器人提供极佳的客户体验，增加获取回头客的机会" />
                                            </div>
                                            
                                            <div className={styles.max__400}>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit",fontWeight:"750",fontSize:"14px"}}>
                                                        批量与访客互动
                                                    </font>
                                                </div>
                                                <div style={{height:"5px"}}></div>
                                                <div className={styles.t__small}>
                                                    <font style={{verticalAlign:"inherit"}}>
                                                        销售机器人提供极佳的客户体验，增加获取回头客的机会

                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.g__c6}>
                            <div className={styles.u__flex}>
                                <div>                                    
                                    <img src={require("../images/137.png")} alt="销售机器人提供极佳的客户体验，增加获取回头客的机会" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
	</Layout>
);
