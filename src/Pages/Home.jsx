import Product from "../Components/Product/Product";
import { useEffect, useState } from "react";

export default function Home() {

        const [Products, setProducts]= useState([])

   useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=5')
        .then((response)=>response.json())
        .then((data)=>{
            console.log('Products succesfully fetched ', data)
            setProducts(data)
          }
          )
   },[])
    return (
        <div className="container flex flex-col space-y-2 mb-2 ">
            <div className="Image h-80 w-full bg-blue-700">
                <b>TODO: Image</b>
            </div>
            <div className="bg-black text-white w-auto">Category</div>
            <div className="Products flex   space-x-2 justify-between">
                {
                    Products.map(()=>{

                    })
                }
                
            </div>
            

        </div>
    );
}
