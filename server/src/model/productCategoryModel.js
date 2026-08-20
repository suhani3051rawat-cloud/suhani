import mongoose from "mongoose";

let categorySchema = mongoose.Schema({
   category : {
       type     : String,
       required : true
   },
   totalProduct : {
        type    : Number,
        default : 0 
   }
});
export const categoryModel = mongoose.model('categoryModel', categorySchema);