import { Request, Response } from "express"
import { deleteBookService } from "../services/deleteService"

const { Request, Response } = require("express")
export const deleteBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const resFromDeleteService = await deleteBookService(req.params.id)
        console.log(resFromDeleteService)
        resFromDeleteService && res.status(200).json({
            "massage": "Book removed succesfully",
        })
        !resFromDeleteService && res.json({"massage":"book not found"})
    } catch (error) {
        console.log(error)
    }
}