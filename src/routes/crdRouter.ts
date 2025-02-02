import { deleteBook } from "../controllers/deleteController"
import { addBook } from "../controllers/postController"
import { getAllBooks, getBook } from "../controllers/readController"
import { updateBook } from "../controllers/updateController"

const {Router} = require('express')

const router = Router()

//post book route
router.post('/POST/books',addBook)

//delete book route
router.delete('/DELETE/books/:id',  deleteBook)

//get all books
router.get('/Get/books',getAllBooks)

//get book route
router.get('/GET/books/:id',getBook)

//update book route
router.put('/PUT/books/:id',updateBook)


export default router