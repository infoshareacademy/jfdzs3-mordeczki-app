import React  from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Icon/Logo.png';

import DrawerToggleButton from '../DrawerToggleButton/index';
import './style.css';

const toolbar = props =>(
            <header className='toolbar'>
                <nav className='toolbarNavigation'>
                    <div className='toolbarToggleButton'>
                        <DrawerToggleButton  click={props.drawerClickHandler}/>
                    </div>
                    <div className='toolbarLogo'>
                        <img src={Logo} herf='/' className='toolbarLogoItem'/>
                    </div>
                            <div>
                                <button className='singUpButton'>
                                    <Link to="sign-up"> Sign Up</Link>
                                </button>
                            </div>
                            <div>
                                <button className='loginButton'>
                                    <Link to="login">Login</Link>
                                </button>
                            </div>
                    <div className="spacer"/>
                    <div className='toolbarNavigationItems'>
                        <ul>
                            <li>
                                <a><Link to="profile_user">My Profile</Link></a>
                            </li>
                            <li>
                                <a><Link to="profile_provider">Profile Provider</Link></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    


export default toolbar;