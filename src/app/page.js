
import Searchbar from "./components/searchbar"
import Curosel from "./components/curosel"
import { getAllProduct } from "../../serve"
import ProductCard from "./productcard/ProductCard"
import Product from "../../serve/database/models/models"
const page = async() => {
  const allProduct = await getAllProduct();
  console.log("HI____________________>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<____________________________________________________________________");
  console.log(allProduct);

  return (
    <div>
      <div className="container1">
        <div className="lefty">
        <p>Smart Shopping starts here</p>
        <h1>Unleash the power of <span className="s1"> Shop  </span> <span className="s2"> Wisely  </span></h1>
        <Searchbar/>
        </div>
        <div className="righty">
      <Curosel/>
        </div>
      </div>
      
      <div className="container3">
        <div className="headingcont3">
        <h2>Unleash the power of your searches!</h2>
        </div>
        <div className="trendingproduct">
          {allProduct.map((ele,ind)=>{
            console.log(ele.image);
            return (
              <>
              <ProductCard url={ele.url} image={ele.image} price={ele.price} title={ele.title} currency={ele.currency} ide={ele._id}                    />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default page