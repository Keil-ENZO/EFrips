import { connectDatabase } from '#start/db/connectDb'
import { Request, Response } from 'express'
import { Db } from 'mongodb'

export default async function createUser({
  response,
  request,
}: {
  response: Response
  request: Request
}) {
  try {
    // Connexion à la base de données MongoDB
    const db: Db = await connectDatabase()

    // Récupérer les données du corps de la requête (nom, age, ville, email)
    const { nom, age, ville, email } = request.body()

    // Récupérer la collection d'utilisateurs
    const usersCollection = db.collection('Users')

    // Insérer l'utilisateur dans la base de données
    const result = await usersCollection.insertOne({ nom, age, ville, email })

    // Retourner la réponse avec l'ID de l'utilisateur inséré
    return response.status(201).json({ id: result.insertedId })
  } catch (error) {
    // Gérer les erreurs
    console.error('Error creating user:', error)
    return response.status(500).json({ error: 'Internal Server Error' })
  }
}
