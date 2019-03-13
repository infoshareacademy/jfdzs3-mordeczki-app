import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import Header from './layout/Header/index';
import Footer from './layout/Footer/index';

import Home from './pages/Home/index';
import Login from './pages/Login/index';
import SignUp from './pages/Signup/index';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();

ReactDOM.render(
<BrowserRouter>
<div>
<Header/>
<Route exact path='/' component={Home} />
<Route exact path='/login' component={Login} />
<Route exact path='/sign-up' component={SignUp} />
<Footer/>
</div>
</BrowserRouter>,
document.getElementById('root')
);

