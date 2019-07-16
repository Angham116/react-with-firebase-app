import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, Input, Icon, Checkbox, Button} from 'antd';

import { withFirebase } from '../Firebase';

import './style.css';

import * as routes from '../../Routes';
class SignUp extends Component{
  state = {
    username: '',
    email: '',
    password: '',
    confirmedPass: '',
    error: null,
  };

  componentDidMount(){
    // console.log(1111, this.props.firebase)
  }

  handleOnChange = (event) => this.setState({ [event.target.name] : event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password} = this.state;
    this.props.firebase.signUpUserWithEmailAndPassword(email, password)
      .then(newUser => this.props.history.push("/app/home"))
      .catch(error => this.setState({ error }))
  }

  render(){
    const { username, email, password, confirmedPass, error } = this.state;

    const isInvalid = 
      password !== confirmedPass ||
      password === '' ||
      username === '' ||
      email === '';

    return (
      <>
        <h1>Sign up</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          {error ? <span className="err__msg">{error.message}</span> : null}
          <Form.Item>
            <label>
              Username:
              <Input
                prefix={<Icon type="user"style={{ color: 'rgba(0,0,0,.25)' }} />}
                name="username"
                type="text"
                placeholder="Username"
                onChange={this.handleOnChange}
              />
            </label>
          </Form.Item>
          <Form.Item>
            <label>
              E-mail:
              <Input
                name="email"
                type="text"
                placeholder="e.g: someone.hotmail.com"
                onChange={this.handleOnChange}
              />
            </label>
          </Form.Item>
          <Form.Item>
            <label>
              Password:
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleOnChange}
              />
            </label>
          </Form.Item>
          <Form.Item>
            <label>
              Confirm Password:
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                name="confirmedPass"
                type="password"
                placeholder="Password"
                onChange={this.handleOnChange}
              />
            </label>
          </Form.Item>
          <Form.Item>
            <>
              <Checkbox>Remember me</Checkbox>
              <Button 
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={isInvalid}
              >
                Sign up
              </Button>
              Or Already have an account! <Link to={routes.login}> Login </Link>
            </>
          </Form.Item>
        </Form>
    </>
    )
  }
}

export default withFirebase(SignUp);

