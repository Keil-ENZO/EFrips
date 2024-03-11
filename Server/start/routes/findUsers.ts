import { HttpContextContract } from '@adonisjs/core/build/standalone'

export default async function findUsers({ response }: HttpContextContract) {
  try {
    // Logique pour récupérer les utilisateurs
    const users = await getUsersFromDatabase()

    // Retourner les utilisateurs
    return response.status(200).json(users)
  } catch (error) {
    // Gérer les erreurs
    console.error('Error fetching users:', error)
    return response.status(500).json({ error: 'Internal Server Error' })
  }
}

// Fonction factice pour simuler la récupération des utilisateurs depuis la base de données
async function getUsersFromDatabase() {
  return [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Autres utilisateurs...
  ]
}
