import express from 'express'
import dotenv from 'dotenv'
import routes from './routes.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// Middleware para interpretar JSON
app.use(express.json())

// Usar as rotas importadas
app.use('/', routes)

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`)
})

export default app
