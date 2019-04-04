import React, { Component } from 'react'
import { toast } from 'react-toastify';


import ticket from '../assets/images/ticket.png'
import cart from '../assets/images/cart.png'

class ProductItem extends Component {

  constructor(props) {
    super(props)
    this.pushCart = this.pushCart.bind(this)
  }

  pushCart() {

  }

  render() {

    return (
      <div className="productItem" onClick={this.pushCart}>
        <div className="image">
          <img src={this.props.item.img} alt="" className="img-fluid"/>
        </div>
        <div className="text">
          <div className="text-gray">
            {this.props.item.title}
          </div>
          <div className="productPrice text-blue">
            ${this.props.item.price} <div className="circle bg"><img src={cart} alt="" className="img-fluid"/> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductItem