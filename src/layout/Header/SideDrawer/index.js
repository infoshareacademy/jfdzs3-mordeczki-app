import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if(props.show){
        drawerClasses = 'sideDrawer open';
    }
    return(
    <nav className={drawerClasses}>
        <ul>
            <li>
                <a><Link to="sign-up"> Sign Up</Link></a>
            </li>
            <li>
                <a><Link to="login">Login</Link></a>
            </li>
            <li>
                <a><Link to="profile_user">My Profile</Link></a>
            </li>
            <li>
                <a><Link to="profile_provider">Profile</Link></a>
            </li>
        </ul>
    </nav>
    );
};

export default sideDrawer;