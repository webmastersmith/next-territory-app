import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import styles from 'styles/HomePage.module.scss'
import { Hero, ImageSection, NumberBlock } from 'components'
import { listCollection, getClient } from 'utils'

type Props = { files: string[] }
const HomePage: NextPage<Props> = ({ files }) => {
  let basePath = '/next-territory-app'
  if (process.env.NEXT_PUBLIC_BUILD_TYPE === 'local') {
    basePath = ''
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Lufkin Address Helper</title>
        <meta httpEquiv="last-modified" content={Date()} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <section className={styles.section}>
        <Hero />
      </section>

      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Spend More Time Writing</h1>
          <ImageSection />
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Choose Your Territory!</h1>
          <NumberBlock files={files} />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          &copy;2022 by <span>Bryon Smith</span>
        </p>
      </footer>
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
