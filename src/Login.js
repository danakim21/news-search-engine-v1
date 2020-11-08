import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { loginSuccess } from './redux/newsActions';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value }, () => {
      console.log('username is set to', this.state.username);
    });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value }, () => {
      console.log('password is set to', this.state.password);
    });
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    console.log('submit');
    if (this.state.username === 'alyce' && this.state.password === 'alyce123') {
      console.log(this.props.userLoginSuccess);
      this.props.loginSuccess();
      alert('Login success');
      this.props.history.push('/');
    } else {
      alert('Invalid username or password');
    }
  }

  render() {
    return (
      <>
        <Link to="/">
          <button>Back</button>
        </Link>
        <div>
          <h1>Login Page</h1>
          <form onSubmit={(e) => this.handleLoginSubmit(e)}>
            <div>
              <label>Username: </label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: () => dispatch(loginSuccess()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
