import React, {Component} from 'react'

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
      tarjeta: '',
      showTarjeta: false,
      showEmail: false,
      showEmpleado: false,
    }

    this.changeInput = this.changeInput.bind(this)
    this.sendData = this.sendData.bind(this)
  }

  changeInput(e) {
    let name = e.target.name, value = e.target.value
    console.log(e.target.name, e.target.value)

    if(name === 'registerType') {
      switch (value) {
        case 'email':
          this.setState({showEmail: true})
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

  }

  render() {
    return (
      <div className="RegisterPage">
        <Header />
        <div className="container">
          <div className="form register">
            <form onSubmit={this.sendData}>
              <input type="text" name="firstName" id="first_name" placeholder="Nombre(s)" onChange={this.changeInput} />
              <input type="text" name="lastName" id="last_name" placeholder="Apellidos" onChange={this.changeInput}/>
              <div>
                <label htmlFor="fecha">Fecha de Nacimiento</label>
                <div className="d-flex">
                  <input type="number" name="day" placeholder="Dia" onChange={this.changeInput}/>
                  <input type="number" name="month" placeholder="Mes" onChange={this.changeInput}/>
                  <input type="number" name="year" placeholder="Año" onChange={this.changeInput}/>
                </div>
              </div>
              <div className="d-flex">
                <div className="item">
                  <input type="radio" name="gender" id="male" value="hombre" placeholder="Hombre" onChange={this.changeInput} />
                  <label htmlFor="male">Hombre</label>
                </div>
                <div className="item">
                  <input type="radio" name="gender" id="female" value="mujer" onChange={this.changeInput} />
                  <label htmlFor="female">Mujer</label>
                </div>
              </div>
              <select name="registerType" id="registerType" onChange={this.changeInput}>
                <option value="" disabled selected>Selecciona una opci&oacute;n</option>
                <option value="email">Correo electr&oacute;nico</option>
                <option value="empleado">Empleado</option>
                <option value="tarjeta">No. de Tarjeta</option>
              </select>
              <input type="text" name="empleado" id="empleado" placeholder="Numero de Empleado" onChange={this.changeInput} className={`${this.state.showEmpleado ? 'show' : 'hide'}`} />
              <input type="email" name="email" id="email" placeholder="Correo corporativo o personal" onChange={this.changeInput} className={`${this.state.showEmail ? 'show' : 'hide'}`}/>
              <input type="text" name="tarjeta" id="tarjeta" placeholder="Numero de Tarjeta" onChange={this.changeInput} className={`${this.state.showTarjeta ? 'show' : 'hide'}`} />
              <input type="password" name="pass" id="pass" placeholder="Contraseña" onChange={this.changeInput} />
              <input type="password" name="pass_c" id="pass_c" placeholder="Confirmar Constraseña" onChange={this.changeInput} /> <br/>
              <div className="d-flex">
                <div className="item">
                  <input type="checkbox" name="acepto" id="acepto"/> <label htmlFor="acepto"> Acepto terminos y condiciones</label>
                </div>
              </div>

              <br/><br/>
              <button type="submit" className="send">Registrarme</button>
            </form>


          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Register