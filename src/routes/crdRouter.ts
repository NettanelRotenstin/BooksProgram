import { deleteBook } from "../controllers/deleteController"
import { addBook } from "../controllers/postController"

const {Router} = require('express')

const router = Router()

//post book route
router.post('/POST/books',addBook)

//delete book route
router.delete('/DELETE/books/:id',  deleteBook)



export default router