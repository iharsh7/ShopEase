import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    url: { 
        type: String,
        required:true,
        unique:true
    },
    currency :{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    originalPrice:{
        type:String,
        required:true
    },
    priceHistory:[
        {price:{
            type:Number,
            required:true
        },
        date:{
            type: Date,
            default: Date.now
        }
    }

    ],
    lowestPrice: {
        type:Number
    },
    highestPrice: {
        type:Number
    },
    averagePrice: {
        type:Number
    },
    discount:{
        type:Number
    },
    isAvailable:{
        type: String
    }
},{timestamps: true});

let Product;

try {
    Product = mongoose.model('Product');
} catch (error) {
    Product = mongoose.model('Product', productSchema);
}

export default Product;