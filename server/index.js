import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connection } from './db/connection.js';
import { signup } from './controller/user.js';
const app = express();
connection();

// Port number from the .env file to the help of the dotenv file. 
dotenv.config();

// Call the connection for db conection 

// Middleware
app.use(express.json());
app.use(cors());



const PORT = process.env.PORT_NUMBER||5000;


// Routes
app.post('/api/signUp',signup);


// Start the server
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});
