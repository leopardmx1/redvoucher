import React, { Component } from 'react'

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
    this.setState({ cart: localStorage.getItem('cart') })
  }

  render() {
    let { cart } = this.state
    let items
    if(cart!== null && cart.length > 0) {

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
        </div>
        <Footer />
      </div>
    )
  }
}

export default Cart