import React, {Component} from 'react'
import {Link} from "react-router-dom";

import { history } from './_helpers/history'

export default class Menu extends Component {
    constructor(props) {
        super(props)
    }

    logout() {
        console.log('Clear the access')
        history.push('/')
    }

    render() {
        let {open} = this.props

        return (
            <div className={`menu ${open ? 'show' : 'hide'} `}>
                <ul>
                    <li>Hola, Héctor</li>
                    <li>Historial de compras</li>
                    <li onClick={this.logout}>Salir</li>
                    <li><Link to="/cart" className="text-blue"> Mis compras <i className="fas fa-shopping-cart"></i></Link></li>
                </ul>
            </div>
        )
    }

}