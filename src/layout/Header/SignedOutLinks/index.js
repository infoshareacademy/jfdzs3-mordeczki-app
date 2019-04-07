import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li>
                <button className='loginButton'>
                    <Link to='/login'>LOGOWANIE / REJESTRACJA</Link>
                </button>
            </li>
        </ul>
    )
}
export default SignedOutLinks;

