import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo.png'

class HeaderAppCart extends Component {
  render() {
    return (
      <header className="header-page">
        <div className="wrapper">
          <div className="brand-logo">
            <Link to="/home"><img src={Logo} alt="Logo RedVoucher"/></Link>
          </div>
          <nav>
            <ul>
              <li className="text-green">Hola, Héctor <i className="fas fa-caret-down"></i> </li>
              <li className="text-blue">Mis compras <i className="fas fa-shopping-cart"></i> </li>
            </ul>
          </nav>
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

export default HeaderAppCart