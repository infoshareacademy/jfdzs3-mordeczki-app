import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CalendardIcon from '../../image/calendar.png';
import './profileUserStyles.css';

class profileUser extends Component {
    render() {
        return (
            <div className="AppContainer">
              <div className="profileUserMenu">
                <p>Witaj: Login</p>
                <p>EDYTUJ</p>
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
              <div className="myVisitsContainer">
                <div className="myVisits">
                  <div className="iconArea">
                    <img src={CalendardIcon}/>
                  </div>
                  <div className="removeArea">
                    <p>ODWOŁAJ</p>
                  </div>
                </div>
              </div>
            </div>
          );
  }
  }
  
  export default profileUser;