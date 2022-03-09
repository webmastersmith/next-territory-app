import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/HomePage.module.scss'
import { Hero, NumberBlock } from 'components'
import { listCollection, getClient } from 'utils'

type Props = { files: string[] }
const HomePage: NextPage<Props> = ({ files }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lufkin Central Territory</title>
        <meta name="description" content="" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Hero />

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
