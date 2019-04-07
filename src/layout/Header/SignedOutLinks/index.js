import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li>
                <button className='loginButton'>
                    <NavLink to='/login'>LOGOWANIE / REJESTRACJA</NavLink>
                </button>
            </li>
        </ul>
    )
}
export default SignedOutLinks;

