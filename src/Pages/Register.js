import React, {Component} from 'react'
import { history } from '../components/_helpers/history';

import Header from '../components/Header'
import Footer from '../components/Footer'

class Register extends Component {

  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      day: '',
      month: '',
      year: '',
      pass: '',
      pass_c: '',
      registerType: '',
      empleado: '',
      email: '',
      empresa: '',
      tarjeta: '',
      showTarjeta: false,
      showEmail: false,
      showEmpleado: false,
      isDisabled: true,
      valids: {
        firstName: false,
        lastName: false,
        gender: false,
        day: false,
        month: false,
        year: true,
        pass: true,
        pass_c: true,
        email: true,
        registerType: true

      }
    }

    this.changeInput = this.changeInput.bind(this)
    this.sendData = this.sendData.bind(this)
  }

  changeInput(e) {
    let name = e.target.name, value = e.target.value.trim()
    console.log(name, value)

    if(value === '' || value === null) {
      console.log('Esta vacio')
      this.setState({ valids: {...this.state.valids, [name]: false} })
    } else {
      this.setState({ valids: {...this.state.valids, [name]: true} })
    }

    if(name === 'registerType') {
      switch (value) {
        case 'email':
          this.setState({showTarjeta: false})
          this.setState({showEmpleado: false})
          break
        case 'tarjeta':
          this.setState({showEmail: false})
          this.setState({showTarjeta: true})
          this.setState({showEmpleado: false})
          break
        case 'empleado':
          this.setState({showEmail: false})
          this.setState({showTarjeta: false})
          this.setState({showEmpleado: true})
          break

      }
    }


    this.setState({ [name]: value })
  }

  sendData(e) {
    e.preventDefault()
    this.setState({ remember: true })
    console.log(this.state)
    history.push('/home')

  }

  render() {
    let { valids } = this.state

    return (
      <div className="RegisterPage">
        <Header />
        <div className="container">
          <div className="form register">
            <form onSubmit={this.sendData}>
              <input type="text" name="firstName" id="first_name" placeholder="Nombre(s)" onChange={this.changeInput} required />
              <input type="text" name="lastName" id="last_name" placeholder="Apellidos" onChange={this.changeInput} required />
              <div>
                <label htmlFor="fecha">Fecha de Nacimiento</label>
                <div className="d-flex">
                  <input type="number" name="day" placeholder="Dia" onChange={this.changeInput} required/>
                  <input type="number" name="month" placeholder="Mes" onChange={this.changeInput} required/>
                  <input type="number" name="year" placeholder="Año" onChange={this.changeInput} required/>
                </div>
              </div>
              <div className="d-flex">
                <div className="item">
                  <input type="radio" name="gender" id="male" value="hombre" placeholder="Hombre" onChange={this.changeInput} required />
                  <label htmlFor="male">Hombre</label>
                </div>
                <div className="item">
                  <input type="radio" name="gender" id="female" value="mujer" onChange={this.changeInput} required />
                  <label htmlFor="female">Mujer</label>
                </div>
              </div>
              <select name="empresa" id="empresa" onChange={this.changeInput} required>
                <option value="" disabled selected>Selecciona una empresa</option>
                <option value="Leopard Techs">Leopard Tech's</option>
                <option value="coca">Coca Cola</option>
                <option value="bancomer">BBVA Bancomer</option>
              </select>
              <select name="registerType" id="registerType" onChange={this.changeInput} required >
                <option value="" disabled selected>Selecciona una opci&oacute;n</option>
                <option value="email">Correo Corporativo</option>
                <option value="empleado">No. de Empleado</option>
                <option value="tarjeta">No. de Tarjeta</option>
              </select>
              <input type="text" name="empleado" id="empleado" placeholder="Numero de Empleado" onChange={this.changeInput} className={`${this.state.showEmpleado ? 'show' : 'hide'}`} />
              <input type="text" name="tarjeta" id="tarjeta" placeholder="Numero de Tarjeta" onChange={this.changeInput} className={`${this.state.showTarjeta ? 'show' : 'hide'}`} />
              <input type="email" name="email" id="email" placeholder="Correo corporativo o personal" onChange={this.changeInput} required />
              <input type="password" name="pass" id="pass" placeholder="Contraseña" onChange={this.changeInput} required />
              <input type="password" name="pass_c" id="pass_c" placeholder="Confirmar Constraseña" onChange={this.changeInput} required /> <br/>
              <div className="d-flex">
                <div className="item">
                  <input type="checkbox" name="acepto" id="acepto"/> <label htmlFor="acepto"> Acepto términos y condiciones</label>
                </div>
              </div>

              <br/><br/>
              <button type="submit" className="send" >Registrarme</button>
            </form>


          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Register