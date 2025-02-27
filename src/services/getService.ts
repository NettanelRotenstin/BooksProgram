 import bookModel from "../models/bookModel"
import { Book } from "../types/Book"

//get book service 
export const getBookService = async (bookId: string) => {
    try {
        const book: Book | null | undefined = await bookModel.findById(bookId)
        if(book)return book
        return "Book not found"
    } catch (error) {
        throw new Error("book not found");
        
    }
}

//get all books service
export const getAllBooksService = async () => {
    try {
        return bookModel.find({})
    } catch (error) {
        throw new Error("error in get all books");
        
    }
}