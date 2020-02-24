import Header from './Header';
import Head from 'next/head';
import { connect } from 'react-redux';
import actions from '../redux/actions';

const Layout = (props) => (
  <div>
    <Head>
      <title>Quintessensse</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Head>
    <Header />
    {props.children}
    {props.content}
  </div>
);


const mapStateToProps = (state) => (
  {isAuthenticated: !!state.authentication.token}
);

export default connect(mapStateToProps, actions)(Layout);