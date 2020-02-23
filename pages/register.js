import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';

import Layout from '../components/Layout';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate(
      { username: this.state.username, email: this.state.email, password: this.state.password },
      'register',
    );
  }

  render() {
    return (
      <Layout>
        <div class="container" style={{ marginTop: '50px', width: '700px' }}>
          <h2 class="label" style={{ marginBottom: '40px' }}>
            Registration
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="text"
                  placeholder="Name"
                  class="input"
                  name="username"
                  required
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="email"
                  placeholder="Email"
                  class="input"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />{' '}
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="password"
                  placeholder="Password"
                  class="input"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-link">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default connect((state) => state, actions)(Register);
