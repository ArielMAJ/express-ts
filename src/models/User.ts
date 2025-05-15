import { Schema, model, Document } from 'mongoose';

// Interface para tipagem do documento do usuário
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Esquema do usuário
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Modelo do usuário
const User = model('User', userSchema);

export default User;