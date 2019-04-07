import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/fire';
import UserIcon from '../../image/user.png';
import LoginIcon from '../../image/people_icon.png';
import PasswordIcon from '../../image/lock.png'
import EmailIcon from '../../image/email.png';


import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    //this.login = this.login.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    //this.singup = this.singup.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }
  /*
   login(e) {
     e.preventDefault();
     fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error) => {
       console.log(error);
     });
   }
  
   singup(e){
     e.preventDefault();
     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
     .catch((error) =>{
       console.log(error);
     })
   }
  
   */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div className="loginContainer">
        <form onSubmit={this.handleSubmit} className="formContainer">
          <img src={UserIcon} className="userIcon" />
          <div className="inputContainerItems ">
            <button type="submit" className="formControlButton">
              <img src={EmailIcon} className="formControlIcon" />
            </button>
            <input onChange={this.handleChange} type="email" name="email" className="inputItems"
              id="email" placeholder="Twój email" />
          </div>
          <div className="loginSpacer" />


          <div className="inputContainerItems ">
            <button type="submit" className="formControlButton">
              <img src={PasswordIcon} className="formControlIcon" />
            </button>
            <input onChange={this.handleChange} type="password" name="password" className="inputItems"
              id="password" placeholder="Twoje hasło" />
          </div>
          <div className="loginButtonContainer">
            <button
              type="submit" onClick={this.login} className="loginFormButton">ZALOGUJ SIĘ
            </button>
            <div className="signUpButtonContainer">
            <button
              onClick={this.singup} className="loginFormButton" herf='/sign-up'>
              ZAREJESTRUJ SIĘ <br/> UŻYTKOWNIK
            </button>
            <button
              onClick={this.singup} className="loginFormButton" herf='/sign-up'>
              ZAREJESTRUJ SIĘ <br/> FIRMA
            </button>

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;