import React, {Component} from 'react'

import Header from '../components/Header'

class Register extends Component {

  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
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
                  <label htmlFor="male">Hombre</label>
                  <input type="radio" name="gender" id="male" value="hombre" placeholder="Hombre" onChange={this.changeInput} />
                </div>
                <div className="item">
                  <label htmlFor="female">Mujer</label>
                  <input type="radio" name="gender" id="female" value="mujer" onChange={this.changeInput} />
                </div>
              </div>
              <input type="text" name="number" id="emplooye" placeholder="Numero de Empleado" />
              <input type="email" name="email" id="email" placeholder="Correo corporativo o personal" onChange={this.changeInput}/> <br/>
              <input type="password" name="pass" id="pass" placeholder="Contraseña" onChange={this.changeInput} />
              <input type="password" name="pass_c" id="pass_c" placeholder="Confirmar Constraseña" onChange={this.changeInput} />
              <br/><br/>
              <button type="submit" className="send">Registrarme</button>
            </form>


          </div>
        </div>
      </div>
    )
  }
}

export default Register