import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo.png'
import Dropdown from "./Dropdown";

class HeaderAppCart extends Component {
  constructor() {
    super()
    this.state = {
      openDropdownMenu: false
    }

    this.toogleDropdown = this.toogleDropdown.bind(this)
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
                  <li className="text-green" onClick={this.toogleDropdown}>Hola, Héctor <i className="fas fa-caret-down"></i> </li>
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
          <Dropdown open={this.state.openDropdown}  />
        </div>

    )
  }
}

export default HeaderAppCart