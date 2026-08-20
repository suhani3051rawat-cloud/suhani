import mongoose from 'mongoose';

export const mongoDBConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    try {
        console.log("dataBase connected");
    } catch (error) {
        console.log("dataBas not connected");
    }
}