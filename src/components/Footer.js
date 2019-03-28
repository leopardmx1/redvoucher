import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <hr className="cl-4" />
        <div className="wrapper">
          Si tienes alguna duda, comunicate con nosotros: <a href="tel:+525555959476"> <i className="fas fa-phone-volume"></i> +52 (55) 5595 9476</a>/<a
          href="tel:+525575890292">7589 0292</a> <a href="mailto:hola@somosredcompanies.com"> <i className="fas fa-envelope"></i> hola@somosredcompanies.com</a>
        </div>
      </footer>
    )
  }
}

export default Footer