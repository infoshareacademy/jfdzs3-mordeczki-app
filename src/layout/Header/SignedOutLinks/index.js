import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li>
                <button className='loginButton'>
                    <NavLink to='/login'>ZALOGUJ SIĘ</NavLink>
                </button>
            </li>
            <li>
                <button className='singUpButton'>
                    <NavLink to='/sign-up'>ZAREJESTRUJ SIĘ</NavLink>
                </button>
            </li>
        </ul>
    )
}
export default SignedOutLinks;

