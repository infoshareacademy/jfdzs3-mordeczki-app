import React, { Component } from 'react';
import fire from '../../config/fire';

import Toolbar from './Toolbar/index';
import SideDrawer from './SideDrawer/index';
import Backdrop from './Backdrop/index';
import Home from '../../pages/Home/index';
import Login from '../../pages/Login/index';

import './style.css';
import SignedOutLinks from './SignedOutLinks';


class Header extends Component {
    constructor(props){
        super(props);
        //this.logout= this.logout.bind(this)
        this.state = {
            sideDrawerOpen: false,
            //user:{},
        } 
    }
    /*
    componentDidMount(){
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) =>{
            if(user) {
                this.setState({user});
              //   localStorage.setItem('user', user.uid);
            } else {
                this.setState({user: null});
               // localStorage.removeItem('user');
            }
        });
    }
    
    logout(){
        fire.auth().signOut();
    }
    */
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen:false});
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
            <div style={{ height: '100%' }}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                {/*<div>
                   {this.state.user ? (<Home />) : (<Login/>)} 
                </div>
                <button onClick={this.logout}>Logout</button> */}
            </div>
        );
    }
}

export default Header;