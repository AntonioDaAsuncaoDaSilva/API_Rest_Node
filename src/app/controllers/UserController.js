import UserModel from '../../models/UserModel.js'

class UserController {
  
  async index(req,res){
    const { nome, email, password } = req.body
    try {
          const userId = await UserModel.create(nome, email, password)
          res.status(201).json({ id: userId, nome, email })
        } catch (error) {
          res.status(400).json({ error: error.message })
        }
      }
 


 show(){}
  
}
export default new UserController();