
import { Book } from "../types/Book"
import { updateBookService } from "../services/updateService"
import { Request, Response } from "express"

export const updateBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const resFromUpdateService = await updateBookService(req.params.id, req.body)
        res.status(200).json({
            "massage": "Book updated succesfully",
            "book":
            resFromUpdateService
        })
    } catch (error) {
        console.log(error)
    }
}
