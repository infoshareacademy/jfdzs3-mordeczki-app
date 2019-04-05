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
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">ZAREJESTRUJ SIĘ</h5>
          <div className="input-field">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">HASŁO</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">IMIĘ</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">NAZWISKO</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">ZAREJESTRUJ SIĘ</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp