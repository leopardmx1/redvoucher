import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Logo from '../assets/images/logo-bco.png'

class HeaderApp extends Component {

  openMenu() {
    console.log('abre menu')
  }

  render() {
    return (
      <div className="HeaderApp">
        <div className="wrapper">
          <div className="brand-logo">
            <Link to="/home"><img src={Logo} alt="Logo RedVoucher"/></Link>

          </div>
          <nav>
            <ul>
              <li onClick={this.openMenu}>Hola, Héctor <i className="fas fa-caret-down"></i> </li>
              <li className="text-blue"> <Link to="/cart" className="text-blue"> Mis compras <i className="fas fa-shopping-cart"></i> </Link> </li>
            </ul>
          </nav>
        </div>
        <div className="menu">

        </div>
      </div>
    )
  }
}

export default HeaderApp