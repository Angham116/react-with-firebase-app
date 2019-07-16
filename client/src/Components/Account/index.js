import React, { Component } from 'react';

import withAuthorization from '../Session/withAutherization';

class Account extends Component{
  state = {};

  render(){
    return <h1> Account </h1>
  }
}

const isAuth = isAuthUser => !!isAuthUser; // same as isAuthUser => isAuthUser != null

export default withAuthorization(isAuth)(Account);

