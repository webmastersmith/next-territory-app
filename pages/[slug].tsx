import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { getClient, listCollection } from 'utils'
import { NavBar } from 'components'
import { OwnerType } from 'types'

interface Props {
  owners: string
}

const Territory: NextPage<Props> = ({ owners }) => {
  return (
    <div>
      <NavBar />
      <h1>Territory {JSON.stringify(owners, null, 2)}</h1>
    </div>
  )
}

export default Territory

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // folder names can only contain: a-z, A-Z, 0-9, -
  const { slug } = params as { slug: string }

  const client = getClient()
  let owners: any = []
  try {
    await client.connect()
    const ownersCollection = client.db('Lufkin_TerritoryDB').collection(slug)
    owners = await ownersCollection.find({}).toArray()
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }

  console.log(slug)
  return {
    props: {
      owners,
    },
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
