
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { Product } from "../models/Product";
import { getTrendingProducts } from "../services/ProductService";
import { useRecoilValue } from "recoil";
import { UserState } from "../states/atoms/UserState";
import { UserModel } from "../models/UserModel";

const Home = () => {

const [trendingProducts,setTrendingProduct] = useState<Product[]>([]);
const [error,setError] = useState("");
const user = useRecoilValue<UserModel>(UserState);

useEffect(() => {
  //get trending products
  getTrendingProducts()
  .then((response) => {setTrendingProduct(response.data);console.log(response.data);})
  .catch((error) => {setError(error)});
},[])
return (
    <div className="w-full h-full absolute bg-white">
        <NavBar/>
        <div className="mx-8 mt-5">{
          user && <div><span className="text-gray-800 font-semibold text-lg">Welcome </span><span className="font-sans text-lg font-semibold text-gray-500 ml-3">{user.name}</span></div>
          }</div>
      <div className="mx-8  py-4 justify-start">
        {/* <h2 className="text-xl font-semibold mb-5 font-sans text-gray-500">Trending products</h2> */}
        <div className="mt-6 grid gap-x-16 gap-y-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {trendingProducts.map((product) => (
           <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>

)
}

export default Home;