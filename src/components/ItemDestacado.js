import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { addToCart } from './actions/cartActions'
import { connect } from 'react-redux'
import cart from "../assets/images/cart.png";

class ItemDestacado extends Component {
    constructor(props) {
        super(props)
    }

    pushCart = (id) => {
        this.props.addToCart(id);
        toast('Producto agregado al carrito')
    }

    render() {
        return(
            <div className="itemDestacado" onClick={() => this.pushCart(this.props.item.id)}>
                <img src={this.props.item.img} alt="" className="img-fluid"/>
                <div className="image">
                    <div className="text-gray" onClick={() => this.pushCart(this.props.item.id)}>
                        {this.props.item.title}
                    </div>
                    <div className="productPrice text-blue">
                        ${this.props.item.price}
                    </div>
                </div>
                <div className="text">
                    <div className="productPrice text-blue">
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

export default connect(null, mapDispatchToProps)(ItemDestacado)