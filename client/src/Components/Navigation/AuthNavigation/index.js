import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Menu, Icon} from 'antd';

import * as routes from '../../../Routes';

import { withFirebase } from '../../Firebase';
 
class AuthNavigation extends Component{
  state = {
    current: '',
  };

  handleLogout = () => {
    this.props.firebase.signOut()
      .then(() => this.props.history.push("/"))
      .catch(error => console.log(error))
  };

  render(){
    const { current } = this.state;

    return (
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" onClick={() => this.setState({current: "home"})}>
          <Link to={routes.home}>
            <Icon type="home"/>
            Home
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          title={
            <span>
              <Icon type="user"/>
              Username
            </span>
          }
        >
          <Menu.Item key="account" onClick={() => this.setState({current: "account"})}>
            <Link to={routes.account}>
              <Icon type="user"/>
              Account
            </Link>
          </Menu.Item>
          <Menu.Item onClick={this.handleLogout}>
              <Icon type="logout"/>
              Logout
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          title={
            <span>
              <Icon type="setting"/>
              Settings
            </span>
          }
        >
          <Menu.Item key="settings" onClick={() => this.setState({current: "settings"})}>
            <Link to={routes.resetPass}>
              Change Password
            </Link>
          </Menu.Item>

        </Menu.SubMenu>
      </Menu>
    )
  }
}

export default withRouter(withFirebase(AuthNavigation));

