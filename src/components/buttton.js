import React from "react";


class PPButton extends React.Component{
    clickButton() {
        if (window.PP.isOpen()) {
            window.PP.close()
        } else {
            window.PP.open()
        }
    }
    render() {
        return (
            <div onClick={this.clickButton}> 
                联系客服
            </div>
        )
    }
}
export default PPButton;
