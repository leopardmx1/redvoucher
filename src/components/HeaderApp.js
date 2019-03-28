import React, { Component } from 'react'
import Logo from '../assets/images/logo-bco.png'

class HeaderApp extends Component {
  render() {
    return (
      <div className="HeaderApp">
        <div className="wrapper">
          <div className="brand-logo">
            <img src={Logo} alt="Logo RedVoucher"/>
          </div>
          <nav>
            <ul>
              <li>Hola, Héctor</li>
              <li className="text-blue">Mis compras <i className="fas fa-shopping-cart"></i> </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default HeaderApp