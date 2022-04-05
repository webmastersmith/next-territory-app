import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getClient, listCollection, db } from 'utils'
import { NavBarTerritory, Cards } from 'components'
import { OwnerType } from 'types'
import { store } from 'store'
import { Provider } from 'react-redux'
import styles from 'styles/[slug].module.scss'

interface Props {
  owners: OwnerType[]
}

const Territory: NextPage<Props> = ({ owners }) => {
  return (
    <div>
      <Head>
        <title>{owners[0].territoryNumber}</title>
        <meta httpEquiv="last-modified" content={Date()} />
        <meta httpEquiv="cache-control" content="Private" />
        <meta httpEquiv="Expires" content="2629800" />
        <meta
          name="description"
          content={`Lufkin Territory ${owners[0].territoryNumber}`}
        />
      </Head>

      <Provider store={store}>
        <NavBarTerritory />
        <Cards initOwners={owners} />
      </Provider>

      <footer className={styles.footer}>
        <p>
          &copy;{new Date().getFullYear()} by <span>Bryon Smith</span>
        </p>
      </footer>
    </div>
  )
}

export default Territory

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // folder names can only contain: a-z, A-Z, 0-9, -
  const { slug } = params as { slug: string }

  const client = getClient()
  try {
    await client.connect()

    // db comes from utils
    const ownersCollection = client.db(db).collection<OwnerType>(slug)
    const owners = await ownersCollection.find({}).toArray()
    //remove unnecessary cruft. Loop through ownerProperty and extract owner only, discard others.
    const _owners = owners.map((owner) => {
      const { ownerProperty, landId } = owner
      const _ownerProperty = ownerProperty.filter(
        (item) => item.propertyId === landId
      )
      return {
        ...owner,
        ownerProperty: _ownerProperty,
      }
    })

    return {
      props: {
        owners: _owners,
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: {
        owners: [],
      },
    }
  } finally {
    await client.close()
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient()
  let files: string[] = []
  type Path = { params: { slug: string } }
  let paths: Path[] = []
  try {
    await client.connect()
    files = await listCollection(client)
    paths = files.map((slug: string) => ({ params: { slug } }))
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
  return {
    paths,
    fallback: false, //show 404 page
  }
}
