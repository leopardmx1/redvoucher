import React, { Component } from 'react'


import { history } from './_helpers/history'

export default class Dropdown extends  Component {

    logout() {
        console.log('Clear the access')
        history.push('/')
    }

    render() {
        let { open } = this.props
        return (
            <div className={`dropdown bg ${ open ? 'show' : 'hide'}`}>
                <ul>
                    <li>Historial de compras</li>
                    <li onClick={this.logout}>Salir</li>
                </ul>
            </div>
        )
    }
}