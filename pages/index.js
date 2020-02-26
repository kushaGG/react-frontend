import React from 'react';
import Layout from '../components/Layout';

import { connect } from 'react-redux';
import initialize from '../utils/initialize';

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>This is home page</h1>
      </div>
    </Layout>
  );
};

Home.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect((state) => state)(Home);
