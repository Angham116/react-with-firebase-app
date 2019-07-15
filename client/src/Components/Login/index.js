import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';

import './style.css';

import { Form, Input, Checkbox, Button, Icon } from 'antd';
class Login extends Component{
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleChange = (event) => this.setState({ [event.target.name] : event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.firebase.signInUserWithEmailAndPassword(email, password)
      .then(user => this.props.history.push("/app/home"))
      .catch(error => this.setState({ error: 'Check your E-mail or Password' }))
  }

  render(){
    const { error } = this.state;
    return (
      <>
      <h1>Login</h1>
      <Form onSubmit={this.handleSubmit} className="login-form">
        {error ? <span className="err__msg">{error}</span> : null}
        <Form.Item>
            <Input
              name="email"
              type="text"
              placeholder="e.g: someone.hotmail.com"
              onChange={this.handleChange}
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
        </Form.Item>
        <Form.Item>
          <>
            <Checkbox>Remember me</Checkbox>
            <Link className="login-form-forgot" to="/pass-forget">
              Forgot password
          </Link>
          </>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form>
    </>
    )
  }
}

const LoginForm = withFirebase(Login);

export default LoginForm;