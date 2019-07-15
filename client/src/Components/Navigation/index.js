import React, { Component } from 'react';

import AuthNavigation from './AuthNavigation';
import NonAuthNavigation from './NonAuthNavigation';

export default class Navigation extends Component{
  state = {};

  render(){
    return (
      <>
        <AuthNavigation />
        <NonAuthNavigation />
      </>
    )
  }
}