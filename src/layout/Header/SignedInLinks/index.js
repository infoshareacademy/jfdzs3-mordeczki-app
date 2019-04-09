import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li>
                <button className='loginButton'>
                    <NavLink to='/'>WYLOGUJ MNIE</NavLink>
                </button>
            </li>
        </ul>
    )
}
export default SignedInLinks;