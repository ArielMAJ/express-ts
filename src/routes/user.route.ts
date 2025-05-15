import { Router } from 'express';
import { createUser, getUser, getUsers, updateUser, deleteUser } from '../controllers/user.controller';
const router = Router();

// Rota para criar um novo usuário
router.post('/', createUser);

// Rota para obter um usuário específico por ID
router.get('/:id', getUser);

// Rota para obter todos os usuários
router.get('/', getUsers);

// Rota para atualizar um usuário por ID
router.put('/:id', updateUser);

// Rota para deletar um usuário por ID
router.delete('/:id', deleteUser);

export default router;
