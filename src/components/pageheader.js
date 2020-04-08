import React from 'react'

import styles from "../pages/about-css-modules.module.css";
import "./pageheader.css";

import EnterYourMobile from "./enteryourmobile"
import Free from "./free_trial"

class PageHeader extends React.Component {

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
            <div className={styles.container__narrower}>
                <div className={styles.g__row}>
                    
                    <div className={styles.g__c6_index}>
                        <div style={{
                            paddingTop: "96px"
                        }}>
                            <h1 className="pageheader-title">
                                {texts.title}
                            </h1>
                            <h2 className="pageheader-desc">
                                {
                                    texts.desc.ps.map((item, i) => (
                                        <p key={i}> {item} </p>
                                    ))
                                }
                            </h2>
                            <EnterYourMobile size="middle" />
                            <div style={{height:"10px"}}>            
                            </div>
                            <Free />
                        </div>
                    </div>
                    
                    <div className={styles.g__c6}>
                        <div>
                            <img style={{maxWidth:"100%"}} src={require("../images/" + texts.image)}
                                 alt={texts.desc.ps.join()} />
                        </div>
                    </div>
                </div>  
            </div>

        )
    }
}

export default PageHeader
