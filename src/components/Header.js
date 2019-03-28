import React, {Component} from 'react'
import Logo from '../assets/images/logo.png'

class Header extends Component {
  render() {
    return (
      <header className="header-page">
        <div className="wrapper">
          <div className="brand-logo">
            <img src={Logo} alt="Logo RedVoucher"/>
          </div>
        </div>
        <div className="bottom">
          <div className="cl-1"></div>
          <div className="cl-2"></div>
          <div className="cl-3"></div>
          <div className="cl-4"></div>
          <div className="cl-5"></div>
        </div>
      </header>
    )
  }
}

export default Header