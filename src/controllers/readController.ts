
import express, { Request, Response } from "express"
import { getAllBooksService, getBookService } from "../services/getService"

export const getBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const resFromGetService = await getBookService(req.params.id)
        res.status(200).json({
            resFromGetService
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllBooks = async (req: Request, res: Response): Promise<void> => {
    try {
        const allBooks = await getAllBooksService()
        res.status(200).json({
            allBooks
        })
    } catch (error) {
        
    }
}