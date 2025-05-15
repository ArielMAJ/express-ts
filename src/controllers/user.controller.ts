import { Request, Response } from 'express';
import User from '../models/User';

// Cria um novo usuário
export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Nome, email e senha são obrigatórios' });
    }
    if (req.body.password.length < 8) {
      return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres' });
    }
    const user = new User(req.body);
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
};

// Obtém um usuário específico por ID
export const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao obter usuário', error });
  }
};

// Obtém todos os usuários
export const getUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao obter usuários', error });
  }
};

// Atualiza um usuário por ID
export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar usuário', error });
  }
};

// Deleta um usuário por ID
export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar usuário', error });
  }
};