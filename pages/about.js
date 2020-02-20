import Layout from '../components/Layout';
import Head from 'next/head';

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Quintessensse</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
        </Head>
        <div>about togo </div>
      </Layout>
    );
  }
}
