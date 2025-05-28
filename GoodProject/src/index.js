// require('dotenv').config({ path: './env' });
import dotenv from 'dotenv';
dotenv.config({ path: './env' });
import express from 'express';
const app = express();
import connectDB from './db/index.js';



connectDB().then(() => {
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    } )
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})








/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log(`an error occurred while connecting to the database`);
            throw error
        })
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
})()
*/