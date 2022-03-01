import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/HomePage.module.scss'
import { NavBar } from 'components'
import { listCollection, getClient } from 'utils'
import { MongoClient } from 'mongodb'

type Props = { files: string[] }
const HomePage: NextPage<Props> = ({ files }) => {
  console.log(files)

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

export const getStaticProps: GetStaticProps = async () => {
  // folder names can only contain: a-z, A-Z, 0-9, -
  // const { slug } = params as {slug: string}
  const client = new MongoClient(process.env.MONGODB as string)
  let files: string[] = []
  try {
    const lists = await client
      .db('Lufkin_TerritoryDB')
      .listCollections()
      .toArray()
    console.log(lists)

    files = lists
      .map((collection) => collection.name)
      .filter((name) => /\d+/.test(name))
      .sort((a, b) => +a - +b)
    console.log(files)

    console.log(files)
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }

  return {
    props: { files },
  }
}
