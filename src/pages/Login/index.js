import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/fire';
import UserIcon from '../../image/user.png'


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
          <div className="formLogin">
            <label htmlFor="email">EMAIL</label>
            <input onChange={this.handleChange} type="email" name="email" className="formControl" id="email"placeholder="Twój email" />
          </div>
          <div className="formLogin">
            <label htmlFor="password">HASŁO</label>
            <input onChange={this.handleChange} type="password" name="password" className="formControl" id="password" placeholder="Twóje hasło" />
          </div>
          <button type="submit" onClick={this.login} className="loginButton">ZALOGUJ </button>
          <div>
            <button onClick={this.singup} className="singUpButton"><h1>ZAREJESTRUJ SIĘ</h1>USŁUGOBIORCA  </button>
            <button onClick={this.singup} className="singUpButton"><h1>ZAREJESTRUJ SIĘ</h1>USŁUGODAWCA   </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;