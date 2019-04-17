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
        <h1 className="text"> &iquest;Qué quieres hacer hoy? </h1>
        <div className="gridPage">
          <div className="gridItem cinepolis-color">
              <p style={{color: "#7accf4"}}>¿Vamos al cine?</p>
              <Link className="logo" to="/cinepolis">
                <img src={logoCinepolis} alt="Logo cinepolis" className="img-fluid"/>
              </Link>
          </div>
          <div className="gridItem vips-color">
              <p style={{color: "#f4c7a8"}}>¿Y si mejor nos tomamos un café?</p>
              <Link to="/vips" className="logo">
                <img src={logoVips} alt="Logo vips" className="img-fluid"/>
              </Link>
          </div>
          <div className="gridItem viajes-color">
              <p style={{color: "#c8f78b"}}>¿O nos vamos de viaje?</p>
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