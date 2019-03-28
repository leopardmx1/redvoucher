import React, {Component} from 'react'

import Header from '../components/Header'

class Register extends Component {

  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      user: '',
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
              <input type="text" name="first_name" id="first_name" placeholder="Nombre(s)" />
              <input type="text" name="last_name" id="last_name" placeholder="Apellidos" />
              <div>
                <label htmlFor="fecha">Fecha de Nacimiento</label>
                <div className="d-flex">
                  <input type="number" name="day" placeholder="Dia"/>
                  <input type="number" name="month" placeholder="Mes"/>
                  <input type="number" name="year" placeholder="Año"/>
                </div>
              </div>
              <div className="d-flex">
                <div className="item">
                  <label htmlFor="male">Hombre</label>
                  <input type="radio" name="gender" id="male" value="hombre" placeholder="Hombre" />
                </div>
                <div className="item">
                  <label htmlFor="female">Mujer</label>
                  <input type="radio" name="gender" id="female" value="mujer" />
                </div>
              </div>
              <input type="text" name="number" id="emplooye" placeholder="Numero de Empleado" />
              <input type="email" name="email" id="email" placeholder="Correo corporativo o personal" onChange={this.changeInput}/> <br/>
              <input type="password" name="pass" id="pass" placeholder="Contraseña" onChange={this.changeInput} />
              <input type="password" name="pass_c" id="pass_c" placeholder="Confirmar Constraseña" onChange={this.changeInput} />
              <br/><br/>
              <button type="submit" className="send">Iniciar Sesión</button>
            </form>


          </div>
        </div>
      </div>
    )
  }
}

export default Register