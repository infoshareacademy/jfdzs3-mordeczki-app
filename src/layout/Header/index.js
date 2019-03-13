import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Header extends Component {
render() {
return (
<div>
    <Link to="sign-up"> Sign Up</Link>
    <Link to="login">Login</Link>
</div>
);
}
}

export default Header;