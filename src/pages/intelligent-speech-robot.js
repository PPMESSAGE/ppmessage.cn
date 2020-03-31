import React from "react";
import styles from "./about-css-modules.module.css";
import EnterYourMobile from "../components/enteryourmobile";
import {Helmet} from "react-helmet";
import Layout from "./layout";
import Free from "../components/free_trial";

export default () => (
	<Layout>
        <Helmet>
            <title>智能语音机器人-PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统</title>
            <meta name="keywords" content="外呼机器人，电销机器人，语音机器人" />
            <meta name="description" content="PPMESSAGE新一代全渠道在线客服系统整合行业人工智能＋语音大数据＋运营商等资源，利用ASR、TTS、NLP等技术，通过业内独有的流程机制解决全球业务的客服痛点。可实现事件营销、意向筛选、定向销售、问卷调查、产品续费、定向催收、会员关怀、身份认证、产品推荐等多种业务功能，极大降低企业成本。" />           
        </Helmet>
        <div className={styles.heiti}>
            <div style={{height:'144px'}}></div>
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    <div className={styles.g__c6}>
                        <h1>智能语音机器人</h1>
                        <div className={styles.sp__5}>
                            <h2 style={{margin:'5rem 0rem 0rem 0rem'}}>
                                全面的机器人语音交互系统
                            </h2>
                            <div style={{height:"10px"}}>
                            </div>
                            <h3 style={{color:'#888'}}><font className={styles.biaoti}>
                                整合行业人工智能＋语音大数据＋运营商等资源，利用语音识别(ASR)、语音合成(TTS)、语义理解(NLP)等技术，通过业内独有的流程机制解决全球业务的客服痛点。可实现事件营销、意向筛选、定向销售、问卷调查、产品续费、定向催收、会员关怀、身份认证、产品推荐等多种业务功能，极大降低企业成本。
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
                            <img src={require("../images/168.png")} alt="整合行业人工智能＋语音大数据＋运营商等资源，利用语音识别(ASR)、语音合成(TTS)、语义理解(NLP)等技术，通过业内独有的流程机制解决全球业务的客服痛点。可实现事件营销、意向筛选、定向销售、问卷调查、产品续费、定向催收、会员关怀、身份认证、产品推荐等多种业务功能，极大降低企业成本" />
                        </div>
                    </div>
                </div>  
            </div>

            <div className={styles.container}>
                <div className={styles.bg__light} style={{backgroundColor:"white"}}>                                
                    <div className={styles.u__zfix}>
                        <div>                        
                            <section className={styles.section_o__no_bottom}>
                                <div className={styles.container}>
                                    <div className={styles.g__row}>

                                        <div className={styles.align_items}>

                                            <div className={styles.chuangjian} style={{margin:"22px",paddingRight:"0",maxWidth:"200px"}}>
                                                
                                                <div className={styles.product__breakdown__image}>
                                                    <img src={require("../images/111.png") } width="91px" alt="实时语音转文字" /></div>
                                                    <div style={{height:"10px"}}></div>
                                                    <div className={styles.t__h3}>
                                                        <font>语音转文字</font>
                                                    </div>
                                                    <div className={styles.t__small_s}>
                                                        <font>实时语音转文字

                                                            可添加专业名词进行训练

                                                            识别准确率高达97%

                                                            快速响应客户问题</font>
                                                    </div>
                                            </div>

                                            <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0",maxWidth:"200px"}}>
                                                
                                                <div className={styles.product__breakdown__image}>
                                                    <img src={require("../images/112.png") } width="91px" alt="实时文字转语音" /></div>
                                                    <div style={{height:"10px"}}></div>
                                                    <div className={styles.t__h3}>
                                                        <font>语音合成</font>
                                                    </div>
                                                    <div className={styles.t__small_s}>
                                                        <font>实时文字转语音

                                                            多种音色可选

                                                            支持输出男/女/人声

                                                            能调节语速、音量</font>
                                                    </div>
                                            </div>
                                            <div className={styles.chuangjian} style={{margin:"22px 50px",paddingRight:"0",maxWidth:"200px"}}>
                                                
                                                <div className={styles.product__breakdown__image}>
                                                    <img alt="语义处理" src={require("../images/113.png") } width="91px" /></div>
                                                    <div style={{height:"10px"}}></div>
                                                    <div className={styles.t__h3}>
                                                        <font>语义处理</font>
                                                    </div>
                                                    <div className={styles.t__small_s}>
                                                        <font>深度学习和卷积神经网络算法

                                                            可基于上下文语义进行理解

                                                            可根据知识库实现多轮会话

                                                            同时具有不断地自我学习能力
                                                        </font>
                                                    </div>
                                            </div>
                                            <div className={styles.chuangjian} style={{margin:"22px",paddingRight:"0",maxWidth:"200px"}}>
                                                
                                                <div className={styles.product__breakdown__image}>
                                                    <img alt="数据分析" src={require("../images/114.png") } width="91px" /></div>
                                                    <div style={{height:"10px"}}></div>
                                                    <div className={styles.t__h3}>
                                                        <font>数据分析</font>
                                                    </div>
                                                    <div className={styles.t__small_s}>
                                                        <font>可分析筛选出重点客户

                                                            可分析数据完善会话场景话术

                                                            可帮助企业沉淀出高质量的行业知识库</font>
                                                    </div>
                                            </div>                                                                   </div>                        
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>                
                </div>                     
            </div>

            <section>            
                <div className={styles.container_z} style={{textAlign:"left"}}>
                    <div className={styles.g__row}>
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <h3 className={styles.t__h2}>
                                <font>
                                    语音合成-确保自然
                                </font>
                            </h3>
                            <img alt="语音合成-确保自然" src={require("../images/17.png") } />
                            <div style={{height:"10px"}}></div>
                            <div className={styles.max__600}>
                                <div className={styles.float}>
                                    <ul className={styles.m2_ul} style={{listStyleType:"none"}}>
                                        <li className={styles.m2_li}>
                                            <img alt="强大语言分析技术" src={require("../images/111.png") } style={{marginTop:"-3px",marginBottom:"-30px",position:"absolute",left:"-2em",width:"91px"}} />
                                            <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                                <h6 className={styles.third_h6}>
                                                    强大语言分析技术
                                                </h6>
                                                <p className={styles.third_ur_li}>
                                                    基于自然语言理解的语言分析技术，实现自动文本规范化、分词、词性标注、语义消歧、发音标注等，消除自然语言的不确定性，为合成自然流畅语音提供保障
                                                </p>
                                            </div>
                                        </li>
                                        
                                        <li className={styles.m2_li}>
                                            <div style={{height:"42px"}}></div>
                                            <img alt="高效音色学习" src={require("../images/112.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",left:"-2em",width:"91px"}} />
                                            <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                                <h6 className={styles.third_h6}>
                                                    高效音色学习
                                                </h6>
                                                <p className={styles.third_ur_li}>
                                                    独创的高效音色学习算法技术，在声色训练的过程中实现不同规模语料、高相似度音色的模拟训练
                                                </p>
                                            </div>
                                        </li>

                                        <li className={styles.m2_li}>
                                            <div style={{height:"42px"}}></div>
                                            <img alt="高自然度韵律模型" src={require("../images/113.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",width:"91px",position:"absolute",left:"-2em"}} />
                                            <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                                <h6 className={styles.third_h6}>
                                                    高自然度韵律模型
                                                </h6>
                                                <p className={styles.third_ur_li}>
                                                    独创的高自然度的韵律模型，让合成声音更加自然，流畅，贴近专业水平自然人发声，使智能对话形式的人机交互变成可能
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.g__c6}>
                            <div className={styles.js__gallery}>
                                <div className={styles.u__inline}>
                                    <div className={styles.gallery}>
                                        <div className={styles.gallery__img}>
                                            <img alt="高自然度韵律模型" src={require("../images/115.png") } style={{marginTop:"10em", width: "280px"}} />
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                </div>           
            </section>

            <section >            
                <div className={styles.container_z} style={{textAlign:"left"}}>
                    <div className={styles.g__row}>

                        <div className={styles.g__c6}>
                            <div className={styles.js__gallery}>
                                <div className={styles.u__inline}>
                                    <div className={styles.gallery}>
                                        <div className={styles.gallery__img}>
                                            <img alt="语音识别-确保准确" src={require("../images/116.png") } style={{marginTop:"10em", width: "280px"}} />
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.g__c6}>
                            <div style={{height:"100px"}}></div>
                            <h3 className={styles.t__h2}>
                                <font>
                                    语音识别-确保准确
                                </font>
                            </h3>
                            <img src={require("../images/17.png") } alt="抗噪音和远场技术" />
                            <div style={{height:"10px"}}></div>
                            <div className={styles.max__600}>
                                <div className={styles.float}>
                                    <ul className={styles.m2_ul} style={{listStyleType:"none"}}>
                                        <li className={styles.m2_li}>
                                            <img alt="抗噪音和远场技术" src={require("../images/111.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",right:"37em",width:"91px"}} />
                                            <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                                <h6 className={styles.third_h6}>
                                                    抗噪音和远场技术
                                                </h6>
                                                <p className={styles.third_ur_li}>
                                                    独创的抗噪声和远场处理技术，在识别前增强语音信号，有效分离噪音和混响，极大提高在户外、市内、车内等复杂环境下语音识别准确率
                                                </p>
                                            </div>
                                        </li>
                                        
                                        <li className={styles.m2_li}>
                                            <div style={{height:"42px"}}></div>
                                            <img alt="话语/语音识别和同步处理技术" src={require("../images/112.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",right:"37em",width:"91px"}} />
                                            <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                                <h6 className={styles.third_h6}>
                                                    话语/语音识别和同步处理技术
                                                </h6>
                                                <p className={styles.third_ur_li}>
                                                    独创的说话人识别和语音识别，同步处理技术，在语音识别的过程中，实时同步区分说话人，不仅提高系统效率，更能实现实时语音分析，说话人分析等功能
                                                </p>
                                            </div>
                                        </li>

                                        <li className={styles.m2_li}>
                                            <div style={{height:"42px"}}></div>
                                            <img alt="高识别率和识别效率" src={require("../images/113.png") } style={{marginRight:"-50px",marginTop:"-3px",marginBottom:"-30px",position:"absolute",right:"37em",width:"91px"}} />
                                            <div style={{display:"inline-block",paddingLeft:"20px"}}>
                                                <h6 className={styles.third_h6}>
                                                    高识别率和识别效率
                                                </h6>
                                                <p className={styles.third_ur_li}>
                                                    基于先进的深度学习算法模型，系统可在确保高准确率的实时识别下，保持高识别率，大大降低系统成本
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
            </section>

            <section>
                <div className={styles.section_div}>
                    <div className={styles.morehangye}>
                        <div className={styles.maxWidth_s2}>
                            <h2 className={styles.section_h2}>
                                <font className={styles.t__h2}>多行业丰富的应用场景</font>
                            </h2>
                            <ul className={styles.clearfix}>
                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="事件营销" className={styles.section_img} src={require("../images/51.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        事件营销
                                    </p>
                                </li>

                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="意向筛选" className={styles.section_img} src={require("../images/52.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        意向筛选
                                    </p>
                                </li>

                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="定向销售" className={styles.section_img} src={require("../images/53.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        定向销售
                                    </p>
                                </li>

                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="问卷调查" className={styles.section_img} src={require("../images/54.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        问卷调查  
                                    </p>
                                </li>
                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="产品续费" className={styles.section_img} src={require("../images/55.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        产品续费  
                                    </p>
                                </li>
                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="定向催收" className={styles.section_img} src={require("../images/56.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        定向催收  
                                    </p>
                                </li>
                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="会员关怀" className={styles.section_img} src={require("../images/57.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        会员关怀  
                                    </p>
                                </li>
                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="身份认证" className={styles.section_img} src={require("../images/58.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        身份认证  
                                    </p>
                                </li>
                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="产品推荐" className={styles.section_img} src={require("../images/59.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        产品推荐  
                                    </p>
                                </li>
                                <li className={styles.wow}>
                                    <p className={styles.pic}>
                                        <img alt="会议邀约" className={styles.section_img} src={require("../images/60.jpg")}  />
                                    </p>
                                    <p className={styles.txt}>
                                        会议邀约  
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <br style={{clear:"both"}} />
        </div>
	</Layout>
    
);
