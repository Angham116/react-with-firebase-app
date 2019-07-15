import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';

import * as routes from '../../Routes';

import {
  LandingPage,
  Login,
  SignUp,
  Home,
  Account,
  ForgetPassword,
  ResetPassword,
} from '../index';

import 'antd/dist/antd.css';

export default class App extends Component{
  state = { };

  render(){
    return (
      <Router>
        <Navigation />
        <Route exact path={routes.landing} component={LandingPage}></Route>
        <Route exact path={routes.login} component={Login}></Route>
        <Route exact path={routes.signup} component={SignUp}></Route>
        <Route exact path={routes.home} component={Home}></Route>
        <Route exact path={routes.account} component={Account}></Route>
        <Route exact path={routes.forgetPass} component={ForgetPassword}></Route>
        <Route exact path={routes.resetPass} component={ResetPassword}></Route>
      </Router>
    )
  }
}