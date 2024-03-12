import { Response } from 'express' // Assurez-vous d'importer le bon type de réponse
import { MongoClient, MongoClientOptions } from 'mongodb'

export default async function findUsers({ response }: { response: Response }) {
  try {
    // Connexion à la base de données MongoDB
    const client = new MongoClient(
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5',
      {
        useUnifiedTopology: true,
      } as MongoClientOptions // Add this type assertion
    )
    await client.connect()

    // Récupération des utilisateurs depuis la base de données
    const db = client.db('project1') // Remplacez 'votre_base_de_donnees' par le nom de votre base de données
    const usersCollection = db.collection('Users') // Remplacez 'users' par le nom de votre collection d'utilisateurs
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
