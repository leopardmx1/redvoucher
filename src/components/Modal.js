import React, { Component } from 'react'
import cart from "../assets/images/cart.png";

class Modal extends Component {

    constructor(props) {
        super(props)
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

        return (
            <div className={`modal overlay ${open ? 'show' : 'hide'}`} onClick={close}>
                <div className="body">
                    <div className="container">
                        <div className="wrapper">
                            { body }
                        </div>
                        <div className="addToCart">
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