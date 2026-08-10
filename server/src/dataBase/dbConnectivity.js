import mongoose from 'mongoose';

export const mongoDBConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    try {
        console.log("dataBase conncted");
    } catch (error) {
        console.log("dataBas not connected");
    }
}