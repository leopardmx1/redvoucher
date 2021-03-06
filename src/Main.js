import React, { Component } from 'react'
import { history } from './components/_helpers/history';
import {Router, Switch, Route} from 'react-router-dom'


import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import RecoverPassword from './Pages/RecoverPassword'
import PageCinepolis from './Pages/PageCinepolis'
import Cart from './Pages/Cart'
import BuysHistorial from './Pages/BuysHistorial'
import PageVips from './Pages/PageVips'
import PageEscape from './Pages/PageEscape'
import Aviso from './Pages/Aviso'
import Condiciones from './Pages/Condiciones'




class Main extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/cinepolis' component={PageCinepolis} />
                        <Route exact path='/vips' component={PageVips} />
                        <Route exact path='/mi-escape' component={PageEscape} />
                        <Route exact path='/cart' component={Cart} />
                        <Route exact path='/historial' component={BuysHistorial} />
                        <Route exact path='/aviso-privacidad' component={Aviso} />
                        <Route exact path='/terminos-y-condiciones' component={Condiciones} />
                        <Route exact path='/recover-password' component={RecoverPassword} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main
