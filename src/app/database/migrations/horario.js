import DB from '../connection.js'

async function createHorarioTable(){
  try{
    await DB.execute(`
      CREATE TABLE IF NOT EXISTS horarios(
        id INT AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(100) NOT NULL,
        tipo ENUM('Trabalho', 'Estudo', 'Lazer', 'Outro','Social','Religioso','Hobby') NOT NULL,
        dia_semana VARCHAR(10) NOT NULL,
        hora_inicio TIME NOT NULL,
        hora_fim TIME NOT NULL,
        user_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
      )`)
    
    console.log('🟢 Horário table created successfully');
  } catch (error) {
    console.error('❌ Error creating Horário table:', error);
  }
}
export default createHorarioTable;
