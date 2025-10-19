import DB from '../app/database/connection.js'
import bcrypt from 'bcrypt'
class UserModel {
  async create(nome, email, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10)
      const [result] = await DB.execute(
        'INSERT INTO users (nome, email, password) VALUES (?, ?, ?)',
        [nome, email, password]
      )
      console.log('🟢 Novo usuário criado com ID:', result.insertId)
      return result.insertId
    } catch (error) {
      console.error('❌ Erro ao criar usuário:', error)
      throw error
    }
  }
  
  async show(id){
    try{
      const [user]=await DB.execute(
        `
        SELECT * FROM users WHERE id = ?`,
        [id]
      )
       return user[0]
      
    }catch(error){
      console.error('❌ Erro ao buscar usuário:', error)
      throw error
    }
  }
  
  
  
  
  
  
  
  
  
  
}

export default new UserModel()
