import { Book } from "../types/Book";

export let booksArrey:Book[] = []

export const updateArr = (newArr:Book[])=>{
    booksArrey = newArr;
}