import { Db, MongoClient, MongoClientOptions } from 'mongodb'

let db: Db | null = null

export async function connectDatabase(): Promise<Db> {
  try {
    if (db) {
      return db
    }

    // Connexion à la base de données MongoDB
    const client = new MongoClient(
      process.env.MONGO_URL as string,
      {
        useUnifiedTopology: true,
      } as MongoClientOptions
    )
    await client.connect()

    // Récupérer la base de données
    db = client.db('project1')

    return db
  } catch (error) {
    console.error('Error connecting to database:', error)
    throw new Error('Error connecting to database')
  }
}
