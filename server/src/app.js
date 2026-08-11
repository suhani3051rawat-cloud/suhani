import express from 'express';
import dotenv from 'dotenv';
import userAuth from './routes/userAuth.js';
import cookieParser from 'cookie-parser';

let app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use('/user/Auth', userAuth);

export default app; 