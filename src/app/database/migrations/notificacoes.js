import DB from '../connection.js'

async function createNotificacoesTable() {
  try {
    await DB.execute(`
      CREATE TABLE IF NOT EXISTS notificacoes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        titulo VARCHAR(255) NOT NULL,
        estado ENUM('LIDA', 'NAO_LIDA') NOT NULL DEFAULT 'NAO_LIDA',
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        tarefa_id INT,
        horario_id INT,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (tarefa_id) REFERENCES tarefas(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (horario_id) REFERENCES horarios(id) ON DELETE CASCADE ON UPDATE CASCADE
      );
    `)

    console.log('🟢 Tabela "notificacoes" criada com sucesso!')
  } catch (error) {
    console.error('❌ Erro ao criar tabela "notificacoes":', error)
  }
}

export default createNotificacoesTable
