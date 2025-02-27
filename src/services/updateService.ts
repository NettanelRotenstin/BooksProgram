 import bookModel from "../models/bookModel";
import { Book } from "../types/Book";

export const updateBookService = async (bookId: string, book: Book) => {
    try {
        let bookToUpdate: Book  | null = await bookModel.findByIdAndUpdate(bookId,book);
        if (!bookToUpdate) {
            throw new Error('book not found!')
        }
        if ((!bookToUpdate.name || bookToUpdate.author == "") || (!bookToUpdate.publishYear || bookToUpdate.publishYear > 2025) || (!bookToUpdate.price || bookToUpdate.price < 0)) {
            throw new Error('Invalid book data!')
        }
        return bookToUpdate
    } catch (error) {
        throw error
    }
}