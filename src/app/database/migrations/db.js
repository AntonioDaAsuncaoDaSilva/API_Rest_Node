import createUserTable from './user.js'
import createTarefaTable from './tarefas.js'
import createCategoriaTable from './categoria.js'
import createHorarioTable from './horario.js'
import createPromodoroTable from './promodoro.js'
import createNotificacoesTable from './notificacoes.js'

async function runMigrations() {
  console.log('🚀 Running migrations...');
  try {
    await createUserTable();
    await createCategoriaTable();
    await createHorarioTable();
    await createTarefaTable();
    await createPromodoroTable();
    await createNotificacoesTable();
    console.log('✅ All migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    process.exit(0); // encerra o processo após a execução
  }
}

runMigrations();
