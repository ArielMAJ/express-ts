import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI!,
  {
    dbName: process.env.MONGODB_DBNAME,
  }
)
.then(() => {
  console.log('Conectado ao MongoDB');
})
.catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

// Usando as rotas de usuário
app.use('/api/users', userRoutes);

// Rota básica para teste
app.get('/', (req: Request, res: Response) => {
  res.send('API funcionando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});