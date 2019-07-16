import React, { Component } from 'react';

import AuthNavigation from './AuthNavigation';
import NonAuthNavigation from './NonAuthNavigation';

export default class Navigation extends Component{
  state = {};

  componentDidMount(){
    console.log(this.props);
  }

  render(){
    return (
      <>
        {
          this.props.authUser ? <AuthNavigation /> : <NonAuthNavigation />
        }
      </>
    )
  }
}