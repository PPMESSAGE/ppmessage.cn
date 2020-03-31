import React from 'react'

import "./hamburger.css"

// size -> small middle large

class Hamburger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false,
            height:0
        }
        this.resize = this.resize.bind(this)
    }

    resize() {
        this.setState({height:window.innerHeight});
    }
    
    componentWillUnmount() {       
        window.removeEventListener('resize',this.resize);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
    }
    
    render() {

        let _class = "hamburger"

        let _heightStyle = {};

        if (this.state.height) {
            _heightStyle = {height: this.state.height};
        }
        
        if (this.state.open) {
            _class = "hamburger active"
        }
        
        return (
            <div className={_class}>
                
                <div className="hamburger-button"
                     onClick={(e)=>{this.setState((prev)=>{
                             console.log(prev);
                             return {open:!prev.open}
                     })}}>
                    <span className="hamburger-title"></span>
                </div>
                <div className="dropdown" style={_heightStyle}>
                    <div className="dropdown-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hamburger
