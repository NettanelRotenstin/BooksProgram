
import {Request,  Response } from "express";
import { addBookService } from "../services/postService";
import { Book } from "../types/Book";

export const addBook = async (req: Request, res: Response): Promise<void> => {
    console.log(1)
    try {
        const resFromPostService = await addBookService(req.body as unknown as Book)
        res.status(201).json({
            "massage":"Book addad succesfully",
            "book":resFromPostService
    })
    } catch (error) {
        console.log(error)
    }
}