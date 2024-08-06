"use server"
import scrapeAmazon from "./scrapper/page";
import { connectToDB } from "./database/mongoose";
import Product from "./database/models/models";
import { getLowestPrice, getHighestPrice, getAveragePrice } from "./extractprice/getprice";

export async function scrapeProduct(productURL) {
    if (!productURL) return;

    try {
        connectToDB();
        const scrapedProduct = await scrapeAmazon(productURL);
        if (!scrapedProduct || !scrapedProduct.price) return;

        let pro = scrapedProduct;

        const existingProduct = await Product.findOne({ url: scrapedProduct.url });
        if (existingProduct) {
            console.log("Welcome, you have searched about this product earlier also!");
            const finddata = existingProduct.priceHistory.find((ele)=>{
                // console.log("Comparing:", ele.price, "with", scrapedProduct.price);
               return ele.price == scrapedProduct.price;
            })
            if(!finddata){
            console.log("HELLO DEVLOPER");
            existingProduct.priceHistory.push({ price: scrapedProduct.price });
            }

            // Save the existingProduct with the updated priceHistory
            await existingProduct.save();
            // console.log(priceHistory);
                        // await existingProduct.save();

            pro = {
                ...scrapedProduct,
                priceHistory: existingProduct.priceHistory,
                lowestPrice: getLowestPrice(existingProduct.priceHistory),
                highestPrice: getHighestPrice(existingProduct.priceHistory),
                averagePrice: getAveragePrice(existingProduct.priceHistory),
            };

            await Product.findOneAndUpdate(
                { _id: existingProduct._id },
                pro,
                { new: true }
            );

            return;
        }

        // If product not found, create a new one
        const newProduct = new Product({
            ...pro,
            priceHistory: [{ price: pro.price }],
            lowestPrice: pro.price,
            highestPrice: pro.price,
            averagePrice: pro.price
        });
        await newProduct.save();
    } catch (err) {
        console.log(err);
    }
}

export async function getProductById(productId){
    try{
        connectToDB();

        const product = await Product.findOne({_id:productId});
        if(!product){
            return;
        }
        return product;
    }
    catch(err){
        console.log(err);
    }
}
export async function getAllProduct(){
    try{
        connectToDB();
        const product = await Product.find();

        return product;
    }
    catch(err){
        console.log(err);
    }
}