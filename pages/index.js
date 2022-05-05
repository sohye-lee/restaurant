import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import Contact from '../components/Contact';

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Resto</title>
        <meta name="description" content="Best pizza in town" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
      <Contact />
    </div>
  );
}
