import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {notUndefinedAndNull, empty } from '../utils/Validation';

class Login extends React.Component {

  constructor(props) {
    super(props);
    let isLoggedIn=false
    localStorage.setItem("isLoggedIn",isLoggedIn)
    this.state = {
      username: "",
      password: "",
      errorMessage:"",
      successMessage:""
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }





  onSubmit(event){
     event.preventDefault();
     let username = this.state.username;
     let password = this.state.password;
     if(username == "kiran"&& password =="kiran123"){
      let isLoggedIn = true
      localStorage.setItem("isLoggedIn",isLoggedIn)
      this.props.history.push('/products', { successMessage: "User login done successfully"})
     }else{
      this.setState((state, props)=>({
        errorMessage: "Username & Password does not matched!",
      }));
         setTimeout(()=>{
        this.setState((state, props)=>({
          errorMessage: "",
        }));
      },4000)
     }
  }

  

  onChangeUsername(event){
    var username = event.target.value;
    this.setState((state, props)=>({
      username: username, 
    }));
  }

  onChangePassword(event){
    var password = event.target.value;

    this.setState((state, props)=>({
      password: password,
    }));
  }

  renderErrorMsg(){
    let message = this.state.errorMessage
    if(!empty(message) && notUndefinedAndNull(message)){
      return(
        <div className="error-div">{message}</div>
      )
    }
  }

  render() {
    return (
      <Fragment>

      <div className="form-box">
      {this.renderErrorMsg()}
      <form className="login-form" onSubmit={this.onSubmit}>
      <h2>Login</h2>
                <hr/>
        <div className="form-group">
          <input
            type="text"
            placeholder="UserName"
            name="username"
            value={this.state.username}
            onChange={this.onChangeUsername}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChangePassword}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
             <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
        </div>
      </form>
      </div>
    </Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    //user: store.user.user,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
