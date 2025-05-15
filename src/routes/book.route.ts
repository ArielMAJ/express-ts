// src/routes/bookRoutes.ts
import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  updateBook,
} from "../controllers/book.controller";

const router = Router();

router.post("/", createBook);
router.get("/", getBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
