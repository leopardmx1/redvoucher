import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/css/Login.css'


class Login extends Component {

  constructor() {
    super()

    this.state = {
      user: '',
      pass: '',
      remember: false
    }

    this.changeInput = this.changeInput.bind(this)
    this.sendData = this.sendData.bind(this)
  }

  changeInput(e) {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  sendData(e) {
    this.setState({ remember: true })
    console.log(this.state)
  }



  render() {
    return (
      <div className="LoginPage">
        <Header />
        <div className="container">
          <div className="form">
            <form onSubmit={this.sendData}>
              <input type="text" name="user" id="user" placeholder="Correo corporativo / Número de empleado / No. Tarjeta" onChange={this.changeInput}/> <br/>
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
      </div>
    )
  }
}

export default Login