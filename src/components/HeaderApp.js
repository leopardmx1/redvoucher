import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Dropdown from './Dropdown'
import Menu from './Menu'
import LogoColor from '../assets/images/logo.png'
import Logo from '../assets/images/logo-bco.png'

class HeaderApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      openDropdown: false,
      openMenu: false,
    }

    this.toogleMenu = this.toogleMenu.bind(this)
    this.toogleDropdown = this.toogleDropdown.bind(this)
  }

  toogleMenu() {
    console.log(this.state.openMenu)
    if(!this.state.openMenu) {
      console.log('abre drop')
      this.setState({ openMenu: true })
    } else {
      console.log('cierra drop')
      this.setState({ openMenu: false })
    }
  }

  toogleDropdown() {
    console.log(this.state.openDropdown)
    if(!this.state.openDropdown) {
      console.log('abre drop')
      this.setState({ openDropdown: true })
    } else {
      console.log('cierra drop')
      this.setState({ openDropdown: false })
    }

  }

  render() {
    let { bgMenu } = this.props
    return (
        <div>
          <div className={`HeaderApp ${ bgMenu ? 'bg' : ''}`}>
            <div className="wrapper">
              <div className="brand-logo">
                <Link to="/home" className="desktop"><img src={Logo} alt="Logo RedVoucher"/></Link>
                <Link to="/home" className="mobile"><img src={LogoColor} alt="Logo RedVoucher"/></Link>
              </div>
              <nav>
                <ul>
                  <li onClick={this.toogleDropdown} className="openDropdown">Hola, Héctor <i className="fas fa-caret-down"></i> </li>
                  <li className="text-blue"> <Link to="/cart" className="text-blue"> Mis compras <i className="fas fa-shopping-cart"></i> </Link> </li>
                </ul>
              </nav>
              <a className="open-menu-mob text-white" onClick={this.toogleMenu}>
                 <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
          <Dropdown open={this.state.openDropdown}  />
          <Menu open={this.state.openMenu} />
        </div>

    )
  }
}

export default HeaderApp