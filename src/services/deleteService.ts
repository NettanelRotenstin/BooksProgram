import { booksArrey, updateArr } from "../db/booksArrey"

//remove book service
export const deleteBookService = async (bookId: string) => {
    try {
        console.log(bookId)
        if (bookId) {
            const numBooks = booksArrey.length
            const newArr = booksArrey.filter(b => b.id != bookId)
            updateArr(newArr)
            if (newArr.length != numBooks) {
                return true
            }
        }
        return false
    } catch (error) {
        console.log(error)
    }
}