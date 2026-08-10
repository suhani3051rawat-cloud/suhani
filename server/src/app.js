import express from 'express';
import dotenv from 'dotenv';

let app = express();
dotenv.config();
app.use(express.json());

export default app;