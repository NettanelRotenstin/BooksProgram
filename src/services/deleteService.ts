import bookModel from "../models/bookModel"

 //remove book service
export const deleteBookService = async (bookId: string) => {
    try {
        if (bookId) {
           const book = await bookModel.findByIdAndDelete(bookId)
           return book
        }
        throw new Error("book not found");
        
    } catch (error) {
        throw new Error("error in deleteBookService");
        
    }
}