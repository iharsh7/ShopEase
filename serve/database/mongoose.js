import mongoose from 'mongoose';

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {

mongoose.connect("mongodb://127.0.0.1:27017/ShopWisely").then(()=>{
    console.log("Connected with database");
}).catch((e)=>{
    console.log(e);
})
};

export default connectToDB;
