import React, { Component } from 'react';
import './style.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state= {
      first_name:'',
      last_name:'',
      type:'',
      email:'',
      password:''
    }

    
  }

  // zapełniam state - input wyświetlam to co jest w state
  // binduje do profilu / formularz
  // 
  // validacja
  // 

  render() {
    return (
      <div className='register-container'>
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Type"
             floatingLabelText="User or Provider ?"
             onChange = {(event,newValue) => this.setState({type:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} className='submit-button' onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default SignUp;