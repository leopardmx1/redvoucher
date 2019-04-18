import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo.png'
import Dropdown from "./Dropdown";
import Menu from './Menu'

class HeaderAppCart extends Component {
  constructor() {
    super()
    this.state = {
      openDropdownMenu: false,
      openMenu: false
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
    return (
        <div>
          <header className="header-page">
            <div className="wrapper">
              <div className="brand-logo">
                <Link to="/home"><img src={Logo} alt="Logo RedVoucher"/></Link>
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
            <div className="bottom">
              <div className="cl-1"></div>
              <div className="cl-2"></div>
              <div className="cl-3"></div>
              <div className="cl-4"></div>
              <div className="cl-5"></div>
            </div>
          </header>
          <Dropdown open={this.state.openDropdown}  />
          <Menu open={this.state.openMenu} />
        </div>

    )
  }
}

export default HeaderAppCart