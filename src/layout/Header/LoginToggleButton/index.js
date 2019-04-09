import React from 'react';
import './style.css'

const loginToggleButton = props => (
    <button className='toggleButton' onClick={props.click}>
        ZAREJESTRUJ SIĘ/ZAŁÓŻ KONTO
    </button>
);

export default loginToggleButton;