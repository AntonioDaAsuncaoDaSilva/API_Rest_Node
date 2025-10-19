// routes.js
import { Router } from 'express'
import UserController from './app/controllers/UserController.js'
import { validateUser } from './app/middlewares/UserRole.js'
import AuthController from './app/controllers/AuthController.js'
import { AuthMiddleware } from './app/middlewares/AuthMiddleware.js'
const router = Router()

router.get('/', (req, res) => {
  res.status(200).send('Hello World 🌍')
})
//register 
router.post('/cadastro',validateUser, UserController.index)

//Login 
  router.post('/login', AuthController.login)

  router.get('/users/:id', AuthMiddleware, UserController.show)
export default router
