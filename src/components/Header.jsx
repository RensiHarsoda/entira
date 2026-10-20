import React from 'react'
import Logo from "../images/logo-entira.webp";

function Header() {
  return (
     <div className="main-nav container">
            <div className="nav-logo">
              <img src={Logo} />
            </div>
            <div className="nav-btn">
              <button>Email us</button>
            </div>
          </div>
  )
}

export default Header