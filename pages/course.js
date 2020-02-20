import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

export default class extends React.Component {
  static async getInitialProps({ query }) {
      const res = await axios.get(`https://gentle-cove-75304.herokuapp.com/courses/${query.id}`);

      return {
        course: res.data
      };
  }

  componentDidMount() {
    if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', JSON.stringify(this.props.data));
  }

  render() {
    const detailStyle = {
      ul: {
        marginTop: '100px',
      },
    };

    return (
      <Layout>
        <div className="pure-g">
          <div className="pure-u-8-24"></div>
          <div className="pure-u-4-24">
            <h2>{this.props.course.title}</h2>
            <h3>description: {this.props.course.description}</h3>
          </div>
        </div>
      </Layout>
    );
  }
}
