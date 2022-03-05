import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useState, useEffect, createContext, useContext, useMemo } from 'react'
import { getClient, listCollection } from 'utils'
import { NavBar, Cards } from 'components'
import { OwnerType } from 'types'
import { useOwnersContext, ThemeContext } from 'store'

interface Props {
  owners: OwnerType[]
}

const Territory: NextPage<Props> = ({ owners }) => {
  const [search, setSearch] = useState([])
  const ownersContext = useOwnersContext(owners)

  return (
    <div>
      <NavBar />
      <h1>Territory {owners[0]?.territoryNumber}</h1>
      <ThemeContext.Provider value={ownersContext}>
        <Cards />
      </ThemeContext.Provider>
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
    // production
    // const db = 'Lufkin_TerritoryDB'
    // test mode
    const db = 'playgroundDB'

    const ownersCollection = client.db(db).collection<OwnerType>(slug)
    const owners = await ownersCollection.find({}).toArray()
    return {
      props: {
        owners,
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
