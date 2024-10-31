import Product from "../Components/Product/Product";
import { useEffect } from "react";

export default function Home() {

    useEffect(()=>{

    })

    return (
        <div className="container flex flex-col space-y-2 mb-2 ">
            <div className="Image h-80 w-full bg-blue-700">
                <b>TODO: Image</b>
            </div>
            <div className="bg-black text-white w-auto">Category</div>
            <div className="Products flex   space-x-2 justify-between">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
            </div>
            <div className="bg-black text-white w-auto">Category</div>
            <div className="Products flex   space-x-2 justify-around">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className="bg-black text-white w-auto">Category</div>
            <div className="Products flex   space-x-2 justify-around">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>

        </div>
    );
}
