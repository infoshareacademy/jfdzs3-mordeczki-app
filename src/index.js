import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import Header from './layout/Header/index';
import Footer from './layout/Footer/index';

import Home from './pages/Home/index';
import Login from './pages/Login/index';
import SignUp from './pages/Signup/index';
import ProfilUser from './pages/ProfileUser/index';
import ProfilProvider from './pages/ProfileProvider/index';

import * as serviceWorker from './serviceWorker';


serviceWorker.unregister();

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/profile_user' component={ProfilUser} />
            <Route exact path='/profile_provider/:id' component={ProfilProvider} />
            <Footer />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

