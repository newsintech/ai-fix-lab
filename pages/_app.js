import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5938363104467152" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
