import React from 'react'

import styles from "../pages/about-css-modules.module.css";
import "./iconhovercard.css";

class IconHoverCard extends React.Component {

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
            <div style={{display:"flex", "justifyContent":"center"}}>
                <div className="icon-hovercard">

                    <div className="icon-hovercard-image">
                        <img src={require("../icon/" + texts.image)}/>
                    </div>
                    
                    <div style={{
                        color: "#000",
                        fontSize: "11px",
                        paddingTop: "5px",
                        paddingRight: "5px",
                        paddingBottom: "1px",
                        textAlign: "left",
                        fontWeight: "600",
                    }}>
                        <h2>{texts.title}</h2>
                        <p style={{
                            fontSize:"14px",
                            fontWeight:"300",
                            paddingBottom:"15px",
                            paddingTop: "15px"
                        }}>
                            {texts.desc}
                        </p>                        
                    </div>
                </div>              
            </div>  
        )
    }
}

export default IconHoverCard
