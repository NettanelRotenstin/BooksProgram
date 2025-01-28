import { addBook } from "../controllers/postController"

const {Router} = require('express')

const router = Router()

//post book route
router.post('/POST/books',addBook)

export default router