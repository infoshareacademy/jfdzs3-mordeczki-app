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
import UserIcon from '../../image/user.png';
import LoginIcon from '../../image/people_icon.png';
import PasswordIcon from '../../image/lock.png'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
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
                <img src={LoginIcon} className="formControlIcon" />
              </button>
              <input onChange={this.handleChange} type="email" name="email" className="inputItems"
                id="email" placeholder="Twój email" />
            </div>
            <div className="loginSpacer" />

            <div className="inputContainerItems ">
              <button type="submit" className="formControlButton">
                <img src={LoginIcon} className="formControlIcon" />
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
           
            
            <div className="loginSpacer" />
            <div className="inputContainerItems ">
              <button type="submit" className="formControlButton">
                <img src={LoginIcon} className="formControlIcon" />
              </button>
              <input onChange={this.handleChange} type="email" name="email" className="inputItems"
                id="email" placeholder="Twój email" />
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