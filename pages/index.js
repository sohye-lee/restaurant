import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resto</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  );
}
