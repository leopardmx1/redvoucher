import React, { Component } from 'react'

class Modal extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        let {type, url} = this.props
        let body
        if(type === 'video') {
            body = <iframe width="791" height="329" src={url} frameBorder="0"
                           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="video"
                           allowFullScreen></iframe>
        } else {
            body = <img src={url} className="img-fluid" />
        }

        return (
            <div className="overlay">
                <div className="body">
                    { body }
                    <div className="addToCart">

                    </div>
                </div>
            </div>
        )
    }
}

export default Modal