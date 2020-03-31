import React from "react";
import styles from "./about-us.module.css";
import TabsControl from "../components/tabscontrol";
import Helmet from "react-helmet";
import Layout from "./layout";
//import SEO from "../components/seo";


export default () => (
	<Layout><Helmet>
        <title>加入我们-PPMESSAGE-全渠道智能在线客服系统_网站客服系统</title>
        <meta charsets="UTF-8" />
        <meta name="description" content="北京优锐科技有限公司（PPMESSAGE）成立于2010年，自主研发全渠道智能在线客服系统软件，简单易用，安全稳定。9年行业深耕，为数万家企业提供在线客户服务。欢迎有志青年加盟，共创大业！" />
        <meta name="keywords" content="PPMESSAGE，北京优锐" />       
    </Helmet>

    
    <div className={styles.heiti}>
        
        <div className={styles.banner}>            
        </div>
        <div className={styles.menu}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <a href="/about-us" className={styles.a}>关于我们
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="#lianxiwomen" className={styles.a}>
                        联系我们
                    </a>
                </li>
                <li className={styles.active}>
                    <a href="/join-us" className={styles.a}>加入我们</a>
                </li>
                <li className={styles.li}><a href="/partners" className={styles.a}>合作伙伴</a>
                </li>
            </ul>
        </div>
        <div style={{height:"100px"}}></div>
        <TabsControl>            
            <div name="技术类">
                <div className={styles.news_nr}>
                    <div className={styles.gsjj__con}>
                        <ul className={styles.job_li1}>
                            <li className={styles.job_l2 }>
                                <div className={styles.job_h}>
                                    <h3 className={styles.job_h_h3}>HTML5</h3>
                                </div>
                                <table className={styles.job_table}>
                                    <tbody>
                                        <tr>
                                            <th className={styles.job_table_th}>职位描述：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1、负责移动混合APP相关技术的设计和开发；
                                                <br/>
                                                2、项目需求分析;
                                                <br/>
                                                3、对最终用户体验负责，协助解决开发中的技术难题；
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={styles.job_table_th}>任职要求：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1、大专及以上学历，计算机相关专业毕业；
                                                <br/>
                                                2、熟悉HTML5和JavaScript，能开发兼容手机浏览器的网页页面；
                                                <br />
                                                3、熟练运用Ionic、Ionic2、Angular2等相关工具；
                                                <br />
                                                4、熟练网络编程HTTP,TCP,SOCKET编程、数据库、XML/JSON解析等开发技巧；
                                                <br />
                                                5、有良好的编码能力，编写文档能力；
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            <div name="产品类">
                <div className={styles.news_nr}>
                    <div className={styles.gsjj__con}>
                        <ul className={styles.job_li1}>
                            <li className={styles.job_l2 }>
                                <div className={styles.job_h}>
                                    <h3 className={styles.job_h_h3}>产品经理</h3>
                                </div>
                                <table className={styles.job_table}>
                                    <tbody>
                                        <tr>
                                            <th className={styles.job_table_th}>职位描述：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1、改进客户网站的功能点，设计新功能；
                                                <br/>
                                                2、分析、收集网站访问数据，提出改进、优化方案； 
                                                <br/>
                                                3、从产品和用户角度出发，不断推进产品的发展。
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={styles.job_table_th}>任职要求：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1、大专及以上学历，计算机相关专业毕业；
                                                <br/>
                                                2、熟悉且热爱互联网行业；
                                                <br />
                                                3、有良好的沟通和学习能力，有创新精神；
                                                <br />
                                                4、高度的责任心，有良好的团队合作精神，能融洽的处理团队人际关系；
                                                <br />
                                                5、熟悉并热爱生活信息搜索和地图行业者优先，有丰富运营工作经验者优先。
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div name="运营类">
                <div className={styles.news_nr}>
                    <div className={styles.gsjj__con}>
                        <ul className={styles.job_li1}>
                            <li className={styles.job_l2 }>
                                <div className={styles.job_h}>
                                    <h3 className={styles.job_h_h3}>网络推广</h3>
                                </div>
                                <table className={styles.job_table}>
                                    <tbody>
                                        <tr>
                                            <th className={styles.job_table_th}>职位描述：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1、配合组长与上级管理，协调各部门各组完成有效工作
                                                <br/>
                                                2、熟练操作操作付费与免费的微信移动端推广，百度、sogou、360、DSP搜索等搜索引擎广告和网盟等投放系统，和团购网站根据不同投放产品的数据制度优化策略并执行
                                                <br/>
                                                3、熟练操作团购网站，分类信息网站推广
                                                <br />
                                                4、负责网推人员培训、系统管理、推广管理
                                                <br />
                                                5、负责网站多语言国家文化和经济课程编写
                                                <br/>
                                                6、做好公司、分公司、项目之间的协调
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={styles.job_table_th}>任职要求：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1、工作经验在2-4年，专科以上学历 
                                                <br/>
                                                2、丰富的互联网推广资源，熟悉各种推广渠道，并保持有效沟通 
                                                <br />
                                                3、有广告、品牌营销策划意识，文笔功底佳，熟悉各类软文撰写、发布、SEO优化等 
                                                <br />
                                                4、熟悉并掌握常用网络推广渠道的方式、方法和合作模式 
                                                <br />
                                                5、具备创新、学习、抗压、团队合作精神，良好的沟通能力及执行能力
                                                <br/>
                                                6、有较强的数据敏感度及分析能力
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div name="设计类">
                <div className={styles.news_nr}>
                    <div className={styles.gsjj__con}>
                        <ul className={styles.job_li1}>
                            <li className={styles.job_l2 }>
                                <div className={styles.job_h}>
                                    <h3 className={styles.job_h_h3}>UI设计师</h3>
                                </div>
                                <table className={styles.job_table}>
                                    <tbody>
                                        <tr>
                                            <th className={styles.job_table_th}>职位描述：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1、与业务及技术开发团队密切沟通，充分理解公司业务需求，完成清晰的高质量的页面设计
                                                <br/>
                                                2、 凭借客户体验价值取向的有效性，负责设计出具有卓越用户体验、个性化及有针对性的交互方案；
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={styles.job_table_th}>任职要求：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1、本科及以上学历，艺术设计相关专业； 
                                                <br/>
                                                2、精通各种视觉效果的呈现，熟练使用photoshop，Illustrator等必备专业软件，手绘能力出色；
                                                <br />
                                                3、三年以上用户体验设计相关工作经验，精通手机端、PC端、网站设计，充分理解UCD设计流程； 
                                                <br />
                                                4、良好的审美意识和艺术修养，能够对行业变化和设计趋势做出有效的判断，有一定的设计思想；
                                                <br />
                                                5、具备良好的合作态度和团队精神，乐于学习，工作有激情，创新欲望强烈，富有责任感；
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            <div name="市场类">

                <div className={styles.news_nr}>
                    <div className={styles.gsjj__con}>
                        <ul className={styles.job_li1}>
                            <li className={styles.job_l2 }>
                                <div className={styles.job_h}>
                                    <h3 className={styles.job_h_h3}>市场部总监</h3>
                                </div>
                                <table className={styles.job_table}>
                                    <tbody>
                                        <tr>
                                            <th className={styles.job_table_th}>职位描述：
                                            </th>
                                            <td className={styles.job_table_td}>
                                               	1、市场规划：组织相关人员进行市场调研，对所辖市场环境与产品竞争态势进行统计分析，向公司决策层提供信息与建议，参与制订公司市场规划与产品发展策略
                                                <br/>
                                                2、销售目标达成：制订公司市场与销售目标，经公司确认后，制订相应的营销策略、规划与政策、制度，组织协调资源，进行市场与产品推广，提升公司与产品品牌，完成所辖市场的销售、回款与市场目标
                                                <br/>
                                                3、费用与预算管理：根据公司年度预算方案，组织制订、评审和控制所辖业务块的年度预算，组织制定费用使用规划并监控实施，确保各种资源及时到位并合理利用，提高投入产出比
                                                <br />
                                                4、费用与预算管理：根据公司年度预算方案，组织制订、评审和控制所辖业务块的年度预算，组织制定费用使用规划并监控实施，确保各种资源及时到位并合理利用，提高投入产出比
                                                <br />
                                                5、带领团队完成公司各项工作指标
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={styles.job_table_th}>任职要求：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1、有3-5年团队管理经验，有大型团队管理经验优先考虑，有大客户销售团队管理的相关工作经验 
                                                <br/>
                                                2、市场营销管理类或相关专业本科以上学历
                                                <br />
                                                3、具备较强的市场分析及判断能力，良好的客户服务意识 
                                                <br />
                                                4、具优秀的计划能力、组织能力、领导能力、学习能力、解决问题能力、谈判能力 
                                                <br />
                                                5、数字敏感度高，又较强的好奇心及追根究底的决心 
                                                <br/>
                                                6、要有数字分析能力，逻辑思考能力与熟练的文书操作能力
                                                <br />
                                                7、有活动策划及执行相关经验，熟悉消费者活动及展会策划
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                
            </div>
            <div name="客服类">

                <div className={styles.news_nr}>
                    <div className={styles.gsjj__con}>
                        <ul className={styles.job_li1}>
                            <li className={styles.job_l2 }>
                                <div className={styles.job_h}>
                                    <h3 className={styles.job_h_h3}>客服经理</h3>
                                </div>
                                <table className={styles.job_table}>
                                    <tbody>
                                        <tr>
                                            <th className={styles.job_table_th}>职位描述：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1. 负责设计并健全客户服务体系，制定客户服务标准、业务标准和流程，规范客户服务行为；
                                                <br/>
                                                2. 围绕客户服务计划，建立回访制度并监督实施，做好客户的维护与管理；
                                                <br/>
                                                3. 负责咨询、投诉等监督检查工作，发现问题及时处理，处置突发事件；
                                                <br/>
                                                4. 不断完善和优化客服系统功能，提升整体运营效率；
                                                <br/>
                                                5. 按时完成各项报表的分析与输出；
                                                <br/>
                                                6. 领导交办的其他任务
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={styles.job_table_th}>任职要求：
                                            </th>
                                            <td className={styles.job_table_td}>
                                                1. 专科以上学历，5年及以上客户服务或呼叫中心工作经验，3年及以上客服管理或团队管理经验；
                                                <br/>
                                                2. 了解不同类型的客服管理系统及模式，熟知客服管理的各个业务模块
                                                <br />
                                                3. 亲和力强、善于沟通，处事圆融、富有修养，有良好的主动服务意识；
                                                <br />
                                                4. 形象气质佳，勇于创新进取，思维缜密，分析、解决问题能力强。
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </TabsControl>            
    </div>
	</Layout>
);
