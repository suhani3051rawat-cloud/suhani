import mongoose from "mongoose";
let AdminSchema = mongoose.Schema({
    name: {
        type     : String,
        required : true
    },
    phone_Number: {
        type     : Number,
        required : true
    },
    email: {
        type     : String,
        required : true
    },
    password:{
        type     : String,
        required : true
    }

});
export const AdminPannelModel  = mongoose.model("adminModel",AdminSchema);