import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/HomePage.module.scss'
import { NavBar, NumberBlock } from 'components'
import { listCollection, getClient } from 'utils'

type Props = { files: string[] }
const HomePage: NextPage<Props> = ({ files }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lufkin Central</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main className={styles.main}>
        <NumberBlock files={files} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  const client = getClient()
  let files: string[] = []
  try {
    await client.connect()
    files = await listCollection(client)
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }

  return {
    props: { files },
  }
}
