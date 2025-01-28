import { v4 } from "uuid";
import { booksArrey } from "../db/booksArrey";
import { Book } from "../types/Book";

//add book service include validation
export const addBookService = async (book: Book) => {
    try {
        if(typeof (book.name) === typeof ("") && book.name != "") {
            book.id = v4()
            booksArrey.push(book)
            console.log(booksArrey)
            return "Book added successfully"
        }
        else{
            return "Book not addad"
        }
    } catch (error) {
        console.log(error)
        return "Book not addad"
    }
}