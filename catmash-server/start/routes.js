'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

  Route.get('/cats', 'CatController.getAllCats')

}).prefix('api/v1')

// handle route not found 404 error with message
Route.any('*', async ({ response }) => {
  return response.status(404).json({error: 'Not Found'})
})
