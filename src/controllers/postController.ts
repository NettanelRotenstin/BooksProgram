
import { Response } from "express";
import { addBookService } from "../services/postService";
import { Book } from "../types/Book";

const { Request, Response } = require("express")
export const addBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const resFromPostService = await addBookService(req.body as unknown as Book)
        res.status(201).json(resFromPostService)
    } catch (error) {
        console.log(error)
    }
}