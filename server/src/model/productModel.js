import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type        : String,
            required    : true,
            trim        : true
        },
        description:{
            type        : String,
            required    : true
        },
        price: {
            type        : Number,
            required    : true,
            min         : 0
        },
        category_id: {
            type        : mongoose.Schema.Types.ObjectId,
            ref         : "categoryModel",
            required    : true
        },
        brand: {
            type        : String,
            required    : true,
            trim        : true
        },
        image: [
            {
                type    : String,
                required: true
            }
        ],
        stock: {
            type        : Number,
            required    : true,
            min         : 1
        },
        status: {
            type        : Boolean,
            default     : true
        }
    },
    {
        timestamps: true
    }
);

export const productModel = mongoose.model("ProductModel", productSchema);
