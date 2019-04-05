import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Icon/Logo.png';
import SignedInLink from '../SignedInLinks/index';
import SignedOutLink from '../SignedOutLinks/index';
import UserLogo from '../../../image/person.png'
import ProviderIcon from '../../../image/people_icon.png';


import DrawerToggleButton from '../DrawerToggleButton/index';
import './style.css';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbarNavigation'>
            <div className='toolbarToggleButton'>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbarLogo'>
                <img src={Logo} herf='/' className='toolbarLogoItem' />
            </div>
            <div className='toolbarNavigationItems'>
                <ul>
                    <SignedOutLink />
                    <SignedInLink />
                </ul>
            </div>
            <div className="spacer" />
            <div className='toolbarNavigationItems'>
                <ul>
                    <li>
                        {/*<a><Link to="profile_provider">PROFIL USŁUGODAWCY</Link></a>*/}
                        <img src={ProviderIcon} herf='/profile_provider' className="providerIconToolbar"/>
                    </li>
                    <li>
                        <a><Link to="profile_user">MÓJ PROFIL</Link></a>
                        <img src={UserLogo} herf='/profile_user' className="userIconToolbar"/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);



export default toolbar;