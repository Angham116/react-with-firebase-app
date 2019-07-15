import React, { Component } from 'react';
import * as routes from '../../../Routes';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';

export default class NonAuthNavigation extends Component{
  state = {
    current: '',
  };

  render(){
    const { current } = this.state;

    return (
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="landing" onClick={() => this.setState({current: "landing"})}>
          <Link to={routes.landing}>
            Brand
          </Link>
        </Menu.Item>
        <Menu.Item key="login" onClick={() => this.setState({current: "login"})}>
          <Link to={routes.login}>
            Login
          </Link>
        </Menu.Item>
        <Menu.Item key="signup" onClick={() => this.setState({current: "signup"})}>
          <Link to={routes.signup}>
            Signup
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}