import React, { Component } from 'react'

import ticket from '../assets/images/ticket.png'
import cart from '../assets/images/cart.png'

class ProductItem extends Component {

  constructor(props) {
    super(props)
    this.pushCart = this.pushCart.bind(this)
  }

  pushCart() {

    console.log(this.props.item)
    console.log('agregar al carrito')
  }

  render() {
    let image
    if(this.props.type === 'cinepolis') {
      image = ticket
    } else if(this.props.type === 'Viajes') {
      image = ticket
    } else {
      image = ticket
    }

    return (
      <div className="productItem" onClick={this.pushCart}>
        <div className="image">
          <img src={image} alt="" className="img-fluid"/>
        </div>
        <div className="text">
          <div className="text-gray">
            {this.props.item.name}
          </div>
          <div className="productPrice text-blue">
            ${this.props.item.price} <div className="circle cinepolis-color"><img src={cart} alt="" className="img-fluid"/> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductItem