import { getProductById } from "../../../../serve"
import Image from "next/image";
import './page.css'
import Link from "next/link";
import Tracker from "@/app/track/Tracker";
const Page = async(params) => {
    const product_p = await getProductById(params.params.id);
    const priceString = product_p.originalPrice;
    const priceNumber = parseInt(priceString.replace('₹', '').replace(',', ''), 10);
    // console.log(product_p)
  return (
    <div className="containerproduct">
    <div className="mainpage">
        <div className="mainpageleft">
            <Image 
            src={product_p.image}
            height={500}
            width={500}
            className="photo"/>
        </div>
        <div className="mainpageright">
            <div className="mainpagerighttitle">
            <h2>{product_p.title}</h2>
            </div>
            <div className="mainpagerightvisit">
            <span className="available">{product_p.isAvailable}</span>
            <Link href={product_p.url}><p>Visit Item</p></Link>
            </div>
            <div className="mainpagerightprice">
                <span className="realprice">{product_p.currency}{product_p.price}</span>
                <span className="originalPrice">{(product_p.price!=product_p.originalPrice)? `${product_p.originalPrice}`:""}</span>
                <span className="discount">Discount:</span>
                <span className="originalPriceDiscount">-{product_p.discount}%</span>
            </div>
            <div className="tracker">
                <Tracker price={product_p.price}  currency={product_p.currency} name={"Price"}/>
                <Tracker price={product_p.lowestPrice} currency={product_p.currency} name={"Lowestprice"}/>
                <Tracker price={priceNumber} currency={product_p.currency} name={"Highestprice"}/>
                <Tracker price={product_p.averagePrice} currency={product_p.currency} name={"Averageprice"}/>
                {/* <Tracker/> */}
            </div>
            <div className="trkbtn">
            <Link href={'/email'}><button className="trackButton">Track Order</button></Link>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Page