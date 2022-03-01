import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/HomePage.module.scss'
import { NavBar } from 'components'

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lufkin Central</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default HomePage
