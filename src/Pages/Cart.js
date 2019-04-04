import React, { Component } from 'react'

import {history} from "../components/_helpers";

import HeaderAppCart from '../components/HeaderAppCart'
import Footer from '../components/Footer'

class Cart extends Component {

  constructor() {
    super()
    this.state = {
      cart: []
    }
  }

  componentWillMount() {
    this.setState({ cart: JSON.parse(localStorage.getItem('cart')) })
  }

  goBack() {
    history.goBack()
  }

  render() {
    let { cart } = this.state
    let items

    if(cart!== null && cart.length > 0) {
      items =  cart.map((item) => {
        return <tr className="item"> <td> <button className="delete">&times;</button> </td> <td> {item.description} </td>
                      <td> <input type="number" name="qty" defaultValue={item.qty} /> </td> <td> {item.price} </td> <td> {item.qty*item.price} </td> </tr>
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
            <div className="d-flex">
              <div className="item">
                <input type="checkbox" name="acepto" id="acepto"/> <label htmlFor="acepto"> Acepto aviso de privacidad</label>
              </div>
            </div>
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

export default Cart