import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { history } from '../components/_helpers';

import Header from '../components/Header'
import Footer from '../components/Footer'


import video from '../assets/videos/redvoucher.mp4'
import '../assets/css/Login.css'
import cart from "../assets/images/cart.png";

class Login extends Component {

  constructor() {
    super()

    this.state = {
      user: '',
      pass: '',
      remember: false,
      open: true
    }

    this.changeInput = this.changeInput.bind(this)
    this.sendData = this.sendData.bind(this)
    this.close = this.close.bind(this)
  }

  changeInput(e) {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  sendData(e) {
    e.preventDefault()


    this.setState({ remember: true })
    console.log(this.state)
    history.push('/home')
  }

  close() {
    this.setState({open: false})
  }



  render() {
    return (
      <div className="LoginPage">
        <Header />
        <div className="container">
          <div className="form">
            <form onSubmit={this.sendData}>
              <input type="text" name="user" id="user" placeholder="Email / No. de empleado / No. Tarjeta" onChange={this.changeInput}/> <br/>
              <input type="password" name="pass" id="pass" placeholder="Constraseña" onChange={this.changeInput} /> <br/>
              <input type="checkbox" name="rembember" id="remember"/> <label htmlFor="remember">Recordarme</label> <br/><br/>
              <button type="submit" className="send">Iniciar Sesión</button>
            </form>
            <hr/>
            <h3>
              &iquest;No tienes cuenta aún?
            </h3>
            <Link to="/register" className="outline">
              Registrarme
            </Link>

          </div>
        </div>
        <Footer/>
        <div id="intro" className={`${this.state.open ? 'show': 'hide'}`}>
          <video className="responsive-video" controls autoPlay>
            <source src={video} type="video/mp4"></source>
          </video>
          <div className="addToCart" onClick={this.close}>
            Skip intro
          </div>
        </div>
      </div>
    )
  }
}

export default Login