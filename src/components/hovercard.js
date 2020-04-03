import React from 'react'

import styles from "../pages/about-css-modules.module.css";
import "./hovercard.css";

class HoverCard extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentWillUnmount() {       
    }

    componentDidMount() {
    }
    
    render() {    
        const {texts} = this.props;
        
        return (
            <div className={styles.g__c4}>            
                <div style={{display:"flex", "justifyContent":"center"}}>
                    <div className={ "hovercard" }>
                        <div className={styles.sp__2}></div>
                        <div className={styles.label}>
                            <h2>{texts.title}</h2>
                            <p style={{
                                fontSize:"14px",
                                fontWeight:"300",
                                paddingBottom:"15px",
                                paddingTop: "15px"
                            }}>
                                {texts.desc}
                            </p>
                            <div>
                                <p>{texts.link.title}</p>
                            </div>
                            
                            <a href={texts.link.href} className={styles.ziti1}>
                                了解更多
                            </a>  
                        </div>
                    </div>              
                </div>  
            </div>            
        )
    }
}

export default HoverCard
