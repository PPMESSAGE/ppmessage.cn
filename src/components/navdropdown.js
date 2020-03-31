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
      <div className={navdropdown}
           onMouseOver={(e)=>{this.setState({title_is_hover:true})}}
           onMouseLeave={(e)=>{this.setState({title_is_hover:false})}}>
        
        <span className="navdropdown-title">
          {this.props.title}
          <span className="dropdown-triangle"></span>
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
