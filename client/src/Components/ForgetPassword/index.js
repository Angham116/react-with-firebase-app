import React, { Component } from 'react';

import { Form, Input, Alert, Button } from 'antd';

import { withFirebase } from '../Firebase';

import * as routes from '../../Routes';

class ForgetPassword extends Component{
  state = {
    email: '',
    errorMsg: '',
    successMsg: '',
    showSucessAlert: false,
    showWrongAlert: false,
  };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { email } = this.state;
      // console.log(this.props);
      this.props.firebase.resetPassword(email)
        .then(() => this.props.history.push(routes.login))
        .catch(err => console.log('error from reset password', err));
    };

    handleChange = (e) => this.setState({[e.target.name] : e.target.value})

  render(){
    const { email, errorMsg, successMsg, showWrongAlert, showSucessAlert } = this.state;
    const invalidEmail = email === '';
    return(
      <Form onSubmit={this.handleSubmit} className="login-form">
        {errorMsg && showWrongAlert && <Alert message={errorMsg} type="error"/>}
        {successMsg && showSucessAlert && <Alert message={successMsg} type="success"/>}
        <Form.Item>
            <Input
              type="text"
              name="email"
              placeholder="E-mail Address"
              onChange={this.handleChange}
              required
            />
        </Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          className="change__pass-form-button"
          disabled={invalidEmail}>
            Reset my password
        </Button>
      </Form>
    )
  }
}

export default withFirebase(ForgetPassword);

