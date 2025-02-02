import { booksArrey, updateArr } from "../db/booksArrey";
import { Book } from "../types/Book";

export const updateBookService = async (bookId: string, book: Book) => {
    try {
        let bookToUpdate: Book | undefined = await booksArrey.filter(b => b.id == bookId)[0]
        if (!bookToUpdate) {
            throw new Error('book not found!')
        }
        bookToUpdate = { ...bookToUpdate, ...book }
        if ((bookToUpdate.name || bookToUpdate.author == "") || (!bookToUpdate.publishYear || bookToUpdate.publishYear > 2025) || (!bookToUpdate.price || bookToUpdate.price < 0)) {
            throw new Error('Invalid book data!')
        }
        let newArr = await booksArrey.filter(b => b.id != bookToUpdate.id)
        newArr.push(bookToUpdate)
        updateArr(newArr)
        return bookToUpdate
    } catch (error) {
        throw error

    }



}