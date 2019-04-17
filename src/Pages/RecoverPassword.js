import React, { Component } from 'react'
import { history } from '../components/_helpers/history';

import Header from '../components/Header'
import Footer from '../components/Footer'

class RecoverPassword extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      pass: '',
      pass_c: '',
    }

    this.changeInput = this.changeInput.bind(this)
    this.sendData = this.sendData.bind(this)
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



  render() {
    return (
      <div className="LoginPage">
        <Header />
        <div className="container">
          <div className="form">
            <form onSubmit={this.sendData}>
              <div> <input type="text" name="email" id="email" placeholder="email" onChange={this.changeInput}/></div>
              <div> <input type="password" name="pass" id="pass" placeholder="Contraseña" onChange={this.changeInput} /></div>
              <div> <input type="password" name="pass_c" id="pass_c" placeholder="Confirmar Contraseña" onChange={this.changeInput} /></div>
              <br/>
              <button type="submit" className="send">Enviar</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default RecoverPassword