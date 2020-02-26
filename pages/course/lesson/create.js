import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import initialize from '../../../utils/initialize';

import Layout from '../../../components/Layout';

class CreateLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getInitialProps(ctx) {
    initialize(ctx);
    return{
        props: ctx
    }
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createLesson(
      { title: this.state.title, description: this.state.description, user: this.props.authentication.auth_token, courseId: this.props.props.query.id },
      'create',
    );
  }

  render() {
    return (
      <Layout>
        <div class="container" style={{ marginTop: '50px', width: '700px' }}>
          <h2 class="label" style={{ marginBottom: '40px' }}>
            Create Lesson Form
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div class="field">
              <label class="label">title</label>
              <div class="control">
                <input
                  type="text"
                  placeholder="Title"
                  class="input"
                  name="title"
                  required
                  onChange={(e) => this.setState({ title: e.target.value })}
                  value={this.state.title}
                />
              </div>
            </div>

            <div class="field">
              <label class="label">description</label>
              <div class="control">
                <input
                  type="text"
                  placeholder="Description"
                  class="textarea"
                  name="description"
                  required
                  value={this.state.description}
                  onChange={(e) => this.setState({ description: e.target.value })}
                />
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-link">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default connect((state) => state, actions)(CreateLesson);
