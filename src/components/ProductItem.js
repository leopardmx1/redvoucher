import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { addToCart } from './actions/cartActions'
import { connect } from 'react-redux'

import cart from '../assets/images/cart.png'

class ProductItem extends Component {

  constructor(props) {
    super(props)
      this.state = {
        info: false,
      }

    this.pushCart = this.pushCart.bind(this)
      this.showInfo = this.showInfo.bind(this)
  }

  pushCart = (id) => {
    this.props.addToCart(id); 
    toast('Producto agregado al carrito')
  }

  showInfo() {
      let info = !this.state.info
      this.setState({info: info})
      console.log(info)
  }

  

  render() {
      let { info }= this.state;

    return (
      <div className="productItem" >
        <div className="image" onClick={() => this.pushCart(this.props.item.id)}>
          <img src={this.props.item.img} alt="" className="img-fluid"/>
          <div className={`productOverlay bg ${info ? 'show' : 'hide' }`}>
              Lorem ipsum dolor ...
          </div>
        </div>

        <div className="text">
          
          <div className="text-gray" onClick={() => this.pushCart(this.props.item.id)}>
            {this.props.item.title}
          </div>
          <div className="productPrice text-blue">
            <div className="info circle-outline" onClick={this.showInfo}>i</div>
            ${this.props.item.price} 
            <div className="cartSmall">
              <span>
                Agregar al carrito
              </span>
              <div className="circle bg" onClick={() => this.pushCart(this.props.item.id)}><img src={cart} alt="" className="img-fluid"/> </div>
            </div>
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