import { Request, Response } from 'express'
import { Db, ObjectId } from 'mongodb'
import { connectDatabase } from '../db/connectDb.js'

export default async function deleteUser(req: Request, res: Response) {
  try {
    const userId = req.params.userId
    if (!userId) {
      return res.status(400).json({ error: 'User ID is missing in request parameters' })
    }

    const db: Db = await connectDatabase()

    const usersCollection = db.collection('Users')

    const result = await usersCollection.deleteOne({ _id: new ObjectId(userId) })

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'User not found' })
    }

    return res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Error deleting user:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
