import { Response } from 'express'
import { MongoClient, MongoClientOptions } from 'mongodb'

export default async function findUsers({ response }: { response: Response }) {
  try {
    // Connexion à la base de données MongoDB
    const client = new MongoClient(
      process.env.MONGO_URL as string,
      {
        useUnifiedTopology: true,
      } as MongoClientOptions
    )
    await client.connect()

    // Récupération des utilisateurs depuis la base de données
    const db = client.db('project1')
    const usersCollection = db.collection('Users')
    const users = await usersCollection.find().toArray()

    // Fermeture de la connexion à la base de données
    await client.close()

    // Retourner les utilisateurs récupérés
    return response.status(200).json(users)
  } catch (error) {
    // Gérer les erreurs
    console.error('Error fetching users:', error)
    return response.status(500).json({ error: 'Internal Server Error' })
  }
}
