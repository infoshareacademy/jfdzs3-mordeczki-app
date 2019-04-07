import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from '../SignedInLinks/index';
import SignedOutLink from '../SignedOutLinks/index';

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
                <a><Link to="profile_user">Mój Profil</Link></a>
            </li>
            <li>
                <a><Link to="profile_provider">Profil Firmy</Link></a>
            </li>
            <li>
                <a><Link to="login">Logowanie</Link></a>
            </li>
            <li>
                <a><Link to="sign-up"> Zarejestruj się</Link></a>
            </li>
            <li>
                <a><Link to="profile_provider">Wyloguj Mnie</Link></a>
            </li>
        </ul>
    </nav>
    );
};

export default sideDrawer;