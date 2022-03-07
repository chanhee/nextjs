import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({name}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a>home</a>
        </Link>
        &middot;
        <Link href="/about">
          <a>about</a>
        </Link>
        &middot;
        <Link href="/me">
          <a>me</a>
        </Link>
      </main>

      <h1>About</h1>
      hello world about {name}
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      name: 'world',
    },
  }
}
