import Layout from '../components/layout/layout';
import '../styles/globals.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    // The component here is our page component
  return (
    <Layout>
        <Head> {/* Add common head tags */}
            <title>Next Events</title> {/* If you have multiple components of the same type, then the later one wins. */}
            <meta name={'viewport'} content={'initial-scale=1.0, width=device-width'} />
        </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
