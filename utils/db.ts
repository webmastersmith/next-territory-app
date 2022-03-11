import { MongoClient } from 'mongodb'

export function getClient(): MongoClient {
  return new MongoClient(process.env.MONGODB as string)
}
// production
// export const db = 'Lufkin_TerritoryDB'
// test mode
export const db = 'playgroundDB'

export const listCollection = async (client: MongoClient) => {
  // get collection objects with name
  const lists = await client.db(db).listCollections().toArray()
  // turn collection into array of sorted by number files.
  const files = lists
    .map((collection) => collection.name)
    .filter((name) => /\d+/.test(name))
    .sort((a, b) => +a - +b)

  return files
}
