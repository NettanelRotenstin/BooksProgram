import { v4 } from "uuid";
import { booksArrey } from "../db/booksArrey";
import { Book } from "../types/Book";

//add book service include validation
export const addBookService = async (book: Book) => {
    try {
        if (typeof (book.name) === typeof ("") && book.name != "" && typeof (book.author) == typeof ("") && book.author != "" && typeof (book.publishYear) == typeof (1) && typeof (book.price) == typeof (1)) {
            book.id = v4()
            booksArrey.push(book)
            console.log(booksArrey)
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