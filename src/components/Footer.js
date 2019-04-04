import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <hr className="cl-4" />
        <div className="wrapper">
          Si tienes alguna duda, comunicate con nosotros:
            <a href="tel:+525555959476">
                <span className="fa-stack fa-1x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-phone-volume fa-stack-1x fa-inverse"></i>
                </span>
                 +52 (55) 5595 9476</a>/<a href="tel:+525575890292">7589 0292</a>
            <a href="mailto:hola@somosredcompanies.com">
                <span className="fa-stack fa-1x">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
                </span> hola@somosredcompanies.com</a>
        </div>
          <div className="wrapper">
              <br/><br/>
              2019 &copy; RED VOUCHER - AVISO DE PRIVACIDAD
              <br/><br/>
          </div>
      </footer>
    )
  }
}

export default Footer