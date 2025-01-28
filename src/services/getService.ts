import { booksArrey } from "../db/booksArrey"
import { Book } from "../types/Book"

//get book service 
export const getBookService = async (bookId: string) => {
    try {
        const book: Book | undefined = await booksArrey.find(b => b.id == bookId)
        if(book)return book
        return "Book not found"
    } catch (error) {
        console.log(error)
        return "Book not addad"
    }
}