import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import '../home.css'
import logoCinepolis from '../assets/svg/Cinepolis.svg'
import logoVips from '../assets/svg/VIPS.svg'
import logoEscape from '../assets/svg/MIESCAPE.svg'

class Home extends Component{
    componentWillMount() {
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]))
        }
    }

    render() {
    return(
      <div className="HomePage">
        <h1 className="text"> &iquest;Qué quieres a hacer hoy? </h1>
        <div className="gridPage">
          <div className="gridItem cinepolis-color">
              <Link className="logo" to="/cinepolis">
                <img src={logoCinepolis} alt="Logo cinepolis" className="img-fluid"/>
              </Link>
          </div>
          <div className="gridItem vips-color">

              <Link to="/vips" className="logo">
                <img src={logoVips} alt="Logo vips" className="img-fluid"/>
              </Link>
          </div>
          <div className="gridItem viajes-color">
              <Link to="/mi-escape" className="logo">
                <img src={logoEscape} alt="Logo mi escape" className="img-fluid"/>
              </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home