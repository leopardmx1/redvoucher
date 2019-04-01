import React, { Component } from 'react'
import { toast } from 'react-toastify';

import cart from "../assets/images/cart.png";


class Modal extends Component {

    constructor(props) {
        super(props)
        this.cartAdd = this.cartAdd.bind(this)
    }

    cartAdd() {

        let product = this.props.item
        if (localStorage && localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        toast('Producto agregado al carrito', {
            position: toast.POSITION.BOTTOM_RIGHT,
            type: toast.TYPE.INFO,
            className: 'foo-bar'
        })
        console.log('agregar al carrito')
        console.log(localStorage.getItem('cart'))
    }


    render() {
        let {type, url, open, close} = this.props
        let body
        if(type === 'video') {
            body = <iframe src={url} frameBorder="0"
                           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="video"
                           allowFullScreen className="responsive-video"></iframe>
        } else {
            body = <img src={url} className="img-fluid" />
        }

        if(!open && type==="video") {
            body = <iframe src='' frameBorder="0"
                           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="video"
                           allowFullScreen className="responsive-video"></iframe>
        }

        return (
            <div className={`modal overlay ${open ? 'show' : 'hide'}`} onClick={close}>
                <div className="body">
                    <div className="container">
                        <div className="wrapper">
                            { body }
                        </div>
                        <div className="addToCart" onClick={this.cartAdd}>
                            Comprar boletos ahora
                            <div className="circle cinepolis-color"><img src={cart} className="img-fluid"/> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal