import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../../image/user.png';
import './profileUserStyles.css';

class profileUser extends Component {
    render() {
        return (
            <div className="AppContainer">
              <div className="profileUserMenu">
                <p>Witaj: Login</p>
                <p>EDYTUJ</p>
                <p>WYLOGUJ</p>
              </div>
              <div className="profilUserAvatar">
                <p>AVATAR</p>
                <div className="profilUserAvatarSquare" />
              </div>
              <div className="user">
                <p>PIOTR NOWAK</p>
              </div>
              <div className="visits">
              <p>Moje wizyty</p>
              </div>
            </div>
          );
  }
  }
  
  export default profileUser;