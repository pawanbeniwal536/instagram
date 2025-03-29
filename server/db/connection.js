import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connection =()=>{
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("successfully connected to database")
    } catch (error) {
        console.log("Error in connecting to the database");
    }
} 

