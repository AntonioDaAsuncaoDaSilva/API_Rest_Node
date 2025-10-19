import DB from "../connection.js";

async function createTarefaTable() {
  try {
    await DB.execute(`
      CREATE TABLE IF NOT EXISTS tarefas(
      id INT PRIMARY KEY AUTO_INCREMENT,
      titulo VARCHAR(255) NOT NULL,
      descricao VARCHAR(255),
      estatus ENUM('pendente', 'em andamento', 'concluído') NOT NULL DEFAULT 'pendente',
      prioridade ENUM('baixa', 'média', 'alta') NOT NULL DEFAULT 'baixa',
      data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      data_atualizacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      data_conclusao DATETIME,
      usuario_id INT NOT NULL,
      FOREIGN KEY (usuario_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
      categoria_id INT,
      FOREIGN KEY (categoria_id) REFERENCES categoria(id) ON DELETE SET NULL ON UPDATE CASCADE,
      horario_id INT,
      FOREIGN KEY (horario_id) REFERENCES horarios(id) ON DELETE SET NULL ON UPDATE CASCADE
      )
      `);

    console.log("🟢 Tarefas table created successfully");
  } catch (error) {
    console.error("❌ Error creating tarefa table:", error);
  }
}

export default createTarefaTable;
