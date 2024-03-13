import { Request, Response } from 'express'
import { connectDatabase } from '../db/connectDb.js'

export default async function findUsers({ response }: { response: Response; request: Request }) {
  try {
    // Connexion à la base de données MongoDB
    const db = await connectDatabase()

    // Récupérer la collection d'utilisateurs
    const usersCollection = db.collection('Users')
    const users = await usersCollection.find().toArray()

    return response.status(200).json(users)
  } catch (error) {
    // Gérer les erreurs
    console.error('Error fetching users:', error)
    return response.status(500).json({ error: 'Internal Server Error' })
  }
}
