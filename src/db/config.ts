import { connect } from "mongoose";
export const connectDB = async () => {
    try {
        await connect('mongodb://localhost:27017/books');
        console.log('database connection')
    } catch (error) {
        throw new Error("database faild");
    }
}