import React from 'react'

import "./navdropdown.css"

// size -> small middle large

class NavDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title_is_hover:false,
      content_is_hover:false
    }
  }
  
  render() {

    let navdropdown = ["navdropdown"]
    
    if (this.state.title_is_hover || this.state.content_is_hover) {
      navdropdown = ["navdropdown", "active"]
    } else {
      navdropdown = ["navdropdown"]
    }

    navdropdown = navdropdown.join(" ")
    
    return (
        <div className={navdropdown} style={{display:"flex", "flexDirection":"row"}}
             onMouseOver={(e)=>{this.setState({title_is_hover:true})}}
             onMouseLeave={(e)=>{this.setState({title_is_hover:false})}}>
            
            <span className="navdropdown-title">
                {this.props.title}
                <span className="dropdown-triangle"></span>
            </span>

            <span className="dropdown-chevron">
                <svg focusable="false" style={{display:"block"}} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </span>
            
            <div className="dropdown"
                 onMouseOver={(e)=>{this.setState({content_is_hover:true})}}
                 onMouseLeave={(e)=>{this.setState({content_is_hover:false})}}>            
                <div className="dropdown-content">
                    {this.props.children}
                </div>
            </div>
        </div>
    )
  }
}

export default NavDropdown
