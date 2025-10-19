import DB from '../connection.js'

async function createPromodoroTable(){
  try{
    await DB.execute(`
      CREATE TABLE IF NOT EXISTS promodoros(
        id INT AUTO_INCREMENT PRIMARY KEY,
        start_time DATETIME NOT NULL,
        end_time DATETIME NOT NULL,
        duration INT NOT NULL,
        status ENUM('pending', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        tarefa_id INT NOT NULL,
        FOREIGN KEY (tarefa_id) REFERENCES tarefas(id) ON DELETE CASCADE ON UPDATE CASCADE
      )
      `)
    
    console.log('🟢 Promodoro table created successfully');
  } catch (error) {
    console.error('❌ Error creating Promodoro table:', error);
  }
  
}
export default createPromodoroTable;