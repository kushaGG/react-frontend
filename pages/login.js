import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';

import Layout from '../components/Layout';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate({ email: this.state.email, password: this.state.password }, 'login');
  }

  render() {
    return (
      <Layout>
        <div className="container" style={{ marginTop: '50px', width: '700px' }}>
          <h2 style={{ marginBottom: '40px' }}>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                required
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                required
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login User
              </button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default connect((state) => state, actions)(Login);
