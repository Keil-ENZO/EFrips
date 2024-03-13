/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import addUser from './routes/addUser.js'
import deleteUser from './routes/delete.js'
import findUsers from './routes/findUsers.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/users', findUsers)
router.post('/addUser', addUser)
router.delete('/deleteUsers/:userId', deleteUser)
