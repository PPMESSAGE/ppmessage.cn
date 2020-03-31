import React from "react";


class PPButton extends React.Component{
    clickButton(){
        if (window.PP.isOpen()) {
            window.PP.close()
        } else {
            window.PP.show()
        }
    }
    render() {
        return (
            <div onClick={this.clickButton}> 
                <font>
                    联系客服
                </font>
            </div>
        )
    }
}
export default PPButton;
