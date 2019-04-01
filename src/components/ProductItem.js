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
    let product = this.props.item
    if (localStorage && localStorage.getItem('cart')) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      if(cart.length >= 1) {
        cart.map(item => {
          if(item.id === product.id) {
            item.qty++
          } else {
            cart.push(product);
          }
        })
        console.log(cart)
        localStorage.setItem('cart', JSON.stringify(cart));
      }


      //cart.push(product);
      //localStorage.setItem('cart', JSON.stringify(cart));
    }
    console.log('agregar al carrito')
    toast('Producto agregado al carrito', {
      position: toast.POSITION.BOTTOM_RIGHT,
      type: toast.TYPE.INFO,
      className: 'foo-bar'
    })

    //console.log(localStorage.getItem('cart'))
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
            ${this.props.item.price} <div className="circle bg"><img src={cart} alt="" className="img-fluid"/> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductItem