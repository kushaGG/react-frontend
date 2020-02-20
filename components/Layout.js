import Header from './Header';
import Head from 'next/head';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <title>Quintessensse</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
    </Head>
    <Header />
    {props.children}
    {props.content}
  </div>
);

export default Layout;
