import React, { Component } from 'react';

import withAuthorization from '../Session/withAutherization';

class Home extends Component{
  state = {};

  render(){
    return <h1> Home </h1>
  }
}

const isAuth = isAuthUser => !!isAuthUser; // same as isAuthUser != null

export default withAuthorization(isAuth)(Home);
