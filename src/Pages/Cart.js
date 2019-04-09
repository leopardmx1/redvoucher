import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeToCart } from '../components/actions/cartActions'

import {history} from "../components/_helpers/history";

import HeaderAppCart from '../components/HeaderAppCart'
import Footer from '../components/Footer'
import {toast} from "react-toastify";

class Cart extends Component {

  constructor() {
    super()
  }

  goBack() {
    history.goBack()
  }

  removeToCart = (id) => {
    this.props.removeToCart(id);
    toast('Producto eliminado del carrito')
  }

  render() {
    let { cart } = this.props
    let items

    if(cart!== null && cart.length > 0) {
      items =  cart.map((item) => {
        return <tr className="item"> <td> <button className="delete" onClick={() => this.removeToCart(item.id)}>&times;</button> </td> <td> <b>{item.title}</b><br/>{item.description} </td>
                      <td> <input type="number" name="qty" defaultValue={item.quantity} /> </td> <td> {item.price} </td> <td> { item.subtotal } </td> </tr>
      })

    } else {
      items = <tr class="cl-2 white-text"> <td colSpan="5">No hay productos en el carrito</td> </tr>
    }
    return(
      <div className="cart">
        <HeaderAppCart />
        <div className="wrapper main">
          <h2>Carrito de Compras</h2>
          <table>
            <thead>
              <tr>
                <th>Eliminar</th>
                <th>Descripcion</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
            {items}
            </tbody>
          </table>
          <div className="cl-2 data">
            Tus folios se enviaran al correo: hola@mundo.com
          </div>

          <div>
            <button className="btn cl-2">Pagar</button>
          </div>
          <div>
            <a onClick={this.goBack}> Regresar al catalogo</a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return { cart: state.cart }

}

const mapDispatchToProps = (dispatch) => {
  return {
    removeToCart: (id) => {
      dispatch(removeToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)