// zapełniam state - input wyświetlam to co jest w state
// binduje do profilu / formularz
// 
// validacja
// 
// select dla ser or prov.
// <select>
//   <option> User</option>
//   <option> Provider</option>
// </select>
//reduce
// destruktyzacja {...a} ..prev,


import React, { Component } from 'react'

import PasswordIcon from '../../image/lock.png'
import UserIcon from '../../image/user.png';
import PersonIcon from '../../image/person.png';
import EmailIcon from '../../image/email.png';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="loginContainer">

          <form onSubmit={this.handleSubmit} className="formContainer">
            <img src={UserIcon} className="userIcon" />

            <div className="inputContainerItems ">
              <button type="submit" className="formControlButton">
                <img src={PersonIcon} className="formControlIcon" />
              </button>
              <input onChange={this.handleChange} type="name" name="firstName" className="inputItems"
                id="firstName" placeholder="Imię" />
            </div>
            <div className="loginSpacer" />

            <div className="inputContainerItems ">
              <button type="submit" className="formControlButton">
                <img src={PersonIcon} className="formControlIcon" />
              </button>
              <input onChange={this.handleChange} type="lastName" name="lastName" className="inputItems"
                id="lastName" placeholder="Nazwisko" />
            </div>
            <div className="loginSpacer" />
            <div className="inputContainerItems ">
              <button type="submit" className="formControlButton">
                <img src={EmailIcon} className="formControlIcon" />
              </button>
              <input onChange={this.handleChange} type="email" name="email" className="inputItems"
                id="email" placeholder="Email" />
            </div>
            <div className="loginSpacer" />
            <div className="inputContainerItems ">
              <button type="submit" className="formControlButton">
                <img src={PasswordIcon} className="formControlIcon" />
              </button>
              <input onChange={this.handleChange} type="password" name="password" className="inputItems"
                id="password" placeholder="Hasło" />
            </div> 
            <div className="loginSpacer" />
            <div className="loginButtonContainer">
              <button
                onClick={this.singup} className="loginFormButton" herf='/sign-up'>
                ZAREJESTRUJ SIĘ
              </button>
            </div>
          </form>
        </div>

      </div>

    )
  }
}

export default SignUp