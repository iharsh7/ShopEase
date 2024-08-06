import './ProductCard.css'
import Image from 'next/image'
import Link from 'next/link'
const ProductCard = (props) => {
    // console.log("=========================================================================================================================================================================================================");
    
    // console.log("=========================================================================================================================================================================================================");
    const liink = props.ide.toString();
  return (
    <div className="card">
            <Link href={`/productdetails/${liink}`} className="link">

        <div className="productimage">
           <Image
           src={props.image}
           width={250}
           height={250}
           
           />
        </div>
        <div className="aboutproduct">
            <div className="title">
                <h4>{props.title}</h4>
            </div>
            <div className="price">
                
                <h2>{props.currency}{props.price} </h2>
            </div>
        </div>
     </Link>
    </div>
  )
}

export default ProductCard