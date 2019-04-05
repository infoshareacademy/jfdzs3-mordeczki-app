import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/fire';
import UserIcon from '../../image/user.png';
import LoginIcon from '../../image/people_icon.png';
import PasswordIcon from '../../image/lock.png'


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
            <input onChange={this.handleChange} type="email" name="email" className="inputItems"
              id="email" placeholder="Twój email" />
            <button type="submit" className="formControlButton">
              <img src={LoginIcon} className="formControlIcon" />
            </button>
          </div>
          <div className="loginSpacer" />


          <div className="inputContainerItems ">
            <input onChange={this.handleChange} type="password" name="password" className="inputItems"
              id="password" placeholder="Twoje hasło" />
            <button type="submit" className="formControlButton">
              <img src={PasswordIcon} className="formControlIcon" />
            </button>
          </div>
          <div className="loginButtonContainer">
            <button
              type="submit" onClick={this.login} className="loginFormButton">ZALOGUJ SIĘ
            </button>
            <button
              onClick={this.singup} className="loginFormButton" herf='/sign-up'>
              ZAREJESTRUJ SIĘ
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;