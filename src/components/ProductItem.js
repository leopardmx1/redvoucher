import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { addToCart } from './actions/cartActions'
import { connect } from 'react-redux'

import cart from '../assets/images/cart.png'

class ProductItem extends Component {

  constructor(props) {
    super(props)
    this.pushCart = this.pushCart.bind(this)
  }

  pushCart = (id) => {
    this.props.addToCart(id); 
    toast('Producto agregado al carrito')
  }

  

  render() {

    return (
      <div className="productItem" onClick={() => this.pushCart(this.props.item.id)}>
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

const mapDispatchToProps = (dispatch) =>{
  return{
      addToCart: (id) => { 
        dispatch(addToCart(id)) 
      }
  }
}

export default connect(null, mapDispatchToProps)(ProductItem)