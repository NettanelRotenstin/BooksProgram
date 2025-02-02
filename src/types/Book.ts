const {uuidv4} = require('uuid')

//type of book
export type Book = {
    id?:string,
    name?:string
    author?:string
    publishYear?:number
    price?:number
}