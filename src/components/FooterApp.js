import React, { Component } from 'react'
import Logo from '../assets/images/logo-bco.png'

class FooterApp extends Component {
  render() {
    return (
      <footer className="white-text">
        <div className="wrapper flex">
          <div className="col text-left">
            <h4>NEWSLETTER</h4>
            <br/>
            <p>Te mantendremos informado, sobre las actualizaciones y noticias de nuestras marcas y productos.</p>
            <form>
              <input type="email" name="email" placeholder="email"/>
              <br/><br/>
              <button type="submit">FOLLOW</button>
              <a href="#"> <i className="fab fa-facebook"></i> Redvoucher</a>
            </form>
          </div>
          <div className="col">

          </div>
          <div className="col text-left">
            <h4>CONTACTO</h4>
            <p>hola@somosredcompanies.com</p>
            <p>+ 52 (55) 5595 9476 / 7889 0902</p>
            <img src={Logo} alt="" className="logo-footer"/>
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterApp