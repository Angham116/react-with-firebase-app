import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';

import * as routes from '../../Routes';

import { withFirebase } from '../Firebase'

import {
  LandingPage,
  Login,
  SignUp,
  Home,
  Account,
  ForgetPassword,
  ChangePassword,
} from '../index';

import 'antd/dist/antd.css';

class App extends Component{
  state = { 
    authUser: null,
  };

  componentDidMount(){
    // console.log(111, this.props.firebase.auth.onAuthStateChanged);
    this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser ? this.setState({ authUser }) : this.setState({ authUser : null})
      }
    )
  }
  
  render(){
    const { authUser } = this.state;
    return (
      <Router>
        {
          authUser && <Navigation authUser={authUser}/>
        }
        {/* <>{console.log(222, authUser)}</> */}
        <Route exact path={routes.landing} component={LandingPage}></Route>
        <Route exact path={routes.login} component={Login}></Route>
        <Route exact path={routes.signup} component={SignUp}></Route>
        <Route exact path={routes.home} component={Home}></Route>
        <Route exact path={routes.account} component={Account}></Route>
        <Route exact path={routes.forgetPass} component={ForgetPassword}></Route>
        <Route exact path={routes.resetPass} component={ChangePassword}></Route>
      </Router>
    )
  }
}

export default withFirebase(App);