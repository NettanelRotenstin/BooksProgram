import { Request, Response } from "express"
import { getBookService } from "../services/getService"

const { Request, Response } = require("express")
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