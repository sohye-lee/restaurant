import Layout from '../components/Layout';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import { useEffect } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyles, mainTheme } from '../styled/theme.config';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js');
    import('jquery/dist/jquery.js');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
