/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import Route from '@ioc:Adonis/Core/Route'
import findUsers from './routes/findUsers' // Assurez-vous de l'importer correctement

Route.get('/users', findUsers)

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


