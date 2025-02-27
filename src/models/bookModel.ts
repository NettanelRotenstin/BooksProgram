import mongoose, { model, Schema } from "mongoose";
import { Book } from "../types/Book";
 const bookSchema = new Schema<Book>({
     name: { 
        type: String,
         required: true 
        },
     author: { 
        type: String, 
        default:"" 
     },
     publishYear: { 
        type: Number, 
        default: 2000, 
        min: 1900,
        max: 2025 
    },
     price: { 
        type: Number, 
        default: 0,
        min: 0 
    }
   });
 
 
export default model<Book>('book',bookSchema);
 