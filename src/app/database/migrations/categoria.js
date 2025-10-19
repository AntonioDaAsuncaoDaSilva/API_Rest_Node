import DB  from '../connection.js'

async function createCategoriaTable(){
  try{
    await DB.execute(`
      CREATE TABLE IF NOT EXISTS categoria(
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      descricao TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
    console.log('🟢 categoria table created successfully');

  }catch(error){
     console.error('❌ Error creating categoria table:', error);
  }
  
}
 export default createCategoriaTable;