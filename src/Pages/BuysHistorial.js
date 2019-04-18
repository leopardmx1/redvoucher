import React, { Component } from 'react'
import { connect } from 'react-redux'

import {history} from "../components/_helpers/history";

import HeaderAppCart from '../components/HeaderAppCart'
import Footer from '../components/Footer'

class BuysHistorial extends Component {

  constructor() {
    super()
  }

  goBack() {
    history.goBack()
  }

  render() {
    let { buys } = this.props
    let items

    if(buys!== null && buys.length > 0) {
      items =  buys.map((item, index) => {
        return <tr className="itemBuy"> <td> <b>{item.id}</b> </td> <td> {item.date} </td> <td> {item.status} </td> <td> ${ item.total }.00 </td> </tr>
      })

    } else {
      items = <tr className="cl-2 white-text"> <td colSpan="4">Aun no has comprado nada</td> </tr>
    }
    return(
      <div className="cart historial">
        <HeaderAppCart />
        <div className="wrapper main">
          <h2>Historial de Compras</h2>
          <table>
            <thead>
              <tr>
                <th>No. de orden</th>
                <th>Fecha de orden</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
            {items}
            </tbody>
          </table>

          <div>
            <a onClick={this.goBack} className="btn cl-2"> Regresar </a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { buys: state.buys }
}

export default connect(mapStateToProps)(BuysHistorial)