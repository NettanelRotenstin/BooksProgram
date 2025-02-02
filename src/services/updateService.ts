import { booksArrey, updateArr } from "../db/booksArrey";
import { Book } from "../types/Book";

export const updateBookService = async (bookId: string, book: Book) => {
    try {
        let bookToUpdate: Book | undefined = await booksArrey.filter(b => b.id == bookId)[0]
        if (!bookToUpdate) {
            throw new Error('book not found!')           
        }
        bookToUpdate = {...bookToUpdate,...book}
        let newArr = await booksArrey.filter(b => b.id != bookToUpdate.id)
        newArr.push(bookToUpdate)
        updateArr(newArr)
        return bookToUpdate
    } catch (error) {

    }



}