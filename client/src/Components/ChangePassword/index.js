import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { Form, Input, Icon, Button, Alert } from 'antd';

class ChangePassword extends Component{
  state = {
    newPassword: '',
    confirmNewPassword: '',
    successMsg: '',
    errMsg: '',
    showSucessAlert: false,
    showWrongAlert: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newPassword } = this.state;
    console.log(this.props);
    this.props.firebase.doUpdatePassword(newPassword)
      .then(() => 
        {
          this.setState({ successMsg : 'Password updated', showSucessAlert: true}, 
          () => setTimeout(() => {
            this.setState({ showSucessAlert : false })
          }, 3000)
          )
          this.props.history.goBack()
      }
      )
      .catch((error) => 
        this.setState({ errMsg : error.message, showWrongAlert: true}, 
      () => setTimeout(() => {
        this.setState({ showWrongAlert : false })
      }, 3000)
      ))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  render(){
    const { 
      newPassword, 
      confirmNewPassword, 
      showSucessAlert, 
      successMsg, 
      showWrongAlert, 
      errMsg 
    } = this.state;

    const invalid = newPassword !== confirmNewPassword || newPassword === '';

    return(
      <Form onSubmit={this.handleSubmit} className="login-form">
        {successMsg && showSucessAlert && <Alert message={successMsg} type="success"/>}
        {errMsg && showWrongAlert && <Alert message={errMsg} type="error"/>}
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              name="newPassword"
              placeholder="New Password"
              onChange={this.handleChange}
            />
        </Form.Item>
				<Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              name="confirmNewPassword"
              placeholder="confirm New Password"
              onChange={this.handleChange}
            />
        </Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="change__pass-form-button"
            disabled={invalid}>
            Update Password
          </Button>
      </Form>
    )
  }
} 

export default withFirebase(ChangePassword);