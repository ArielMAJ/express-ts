   import { Request, Response } from 'express';
   import Book from '../models/Book';

   export const createBook = async (req: Request, res: Response) => {
     try {
       const book = new Book(req.body);
       await book.save();
       res.status(201).json(book);
     } catch (error) {
       res.status(400).json({ error: (error as Error).message });
     }
   };

   export const getBooks = async (req: Request, res: Response) => {
     try {
       const books = await Book.find();
       res.status(200).json(books);
     } catch (error) {
       res.status(500).json({ error: (error as Error).message });
     }
   };

   export const updateBook = async (req: Request, res: Response) => {
     try {
       const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
       if (!book) {
         res.status(404).json({ error: 'Book not found' });
       } else {
         res.status(200).json(book);
       }
     } catch (error) {
       res.status(400).json({ error: (error as Error).message });
     }
   };

   export const deleteBook = async (req: Request, res: Response) => {
     try {
       const book = await Book.findByIdAndDelete(req.params.id);
       if (!book) {
         res.status(404).json({ error: 'Book not found' });
       } else {
         res.status(200).json({ message: 'Book deleted successfully' });
       }
     } catch (error) {
       res.status(500).json({ error: (error as Error).message });
     }
   };