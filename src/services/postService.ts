import { v4 } from "uuid";
import { Book } from "../types/Book";
import bookModel from "../models/bookModel";

//add book service include validation
export const addBookService = async (book: Book) => {
    try {
        if (typeof (book.name) === typeof ("") && book.name != "" ) {
            const newBook = new bookModel(book)
            await newBook.save
            return book
        }
        else {
            return "Book not addad"
        }
    } catch (error) {
        console.log(error)
        return "Book not addad"
    }
}