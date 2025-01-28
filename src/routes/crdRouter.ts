import { deleteBook } from "../controllers/deleteController"
import { addBook } from "../controllers/postController"
import { getBook } from "../controllers/readController"

const {Router} = require('express')

const router = Router()

//post book route
router.post('/POST/books',addBook)

//delete book route
router.delete('/DELETE/books/:id',  deleteBook)

//get book route
router.get('/GET/books/:id',getBook)
export default router