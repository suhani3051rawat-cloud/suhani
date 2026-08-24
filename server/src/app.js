import express from 'express';
import dotenv from 'dotenv';
import userAuthRouter from './routes/userAuthRouter.js'
import cookieParser from 'cookie-parser';
import adminPannelRoute from './routes/adminPannelRoute.js';
import cors from 'cors';

let app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin      : "http://localhost:5173",
    credentials : true
}))

app.use('/user/Auth', userAuthRouter);
app.use('/admin/Auth', adminPannelRoute);

export default app; 