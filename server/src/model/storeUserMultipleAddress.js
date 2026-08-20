import mongoose from "mongoose"

let addressSchema = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref  : "userRegisterModel"
    },
    address:[{
            addr1:{
            type    : String,
        },
            addr2:{
            type    : String
        },
            addrType:{
            type    : String,
            enum    : ['Home','Work']
        },
            isDelete:{
            type    : Boolean,
            default : false
        }

    }]
});
export const addressModel = mongoose.model('addressModel', addressSchema);