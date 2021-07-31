/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// post
Route.group(() => {
  Route.post('/posts', 'PostsController.create')
  Route.get('/posts' , 'PostsController.postlist')
  Route.get('/users/posts' , 'PostsController.getUsersPosts')
}).prefix('/api')

// User
Route.group(() => {
Route.post('/users', 'UsersController.create')
Route.get('/users', 'UsersController.listall')
Route.get('/user/:id' , 'UsersController.userId')
Route.put('/user/:id' , 'UsersController.update')
Route.delete('/user/:id' , 'UsersController.delete')
}).prefix('/api')
