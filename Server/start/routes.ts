/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import findUsers from './routes/findUsers.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/users', findUsers)