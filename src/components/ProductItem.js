import React, { Component } from 'react'

import ticket from '../assets/images/ticket.png'

class ProductItem extends Component {



  render() {
    let image
    if(this.props.type === 'cinepolis') {
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
            ${this.props.item.price}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductItem