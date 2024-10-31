import {FaCartPlus} from '../Icons/Icons'


export default function Product({
    img= 'url',
    name='Product Name '
}
        
){
    return(
        <div className="flex flex-col ">
            {/* Product image */}
            <div className=" flex flex-col h-52 w-52 bg-blue-800">
               <div
               className="h-48 w-52">
                <img  
                src={img}
                alt="image"
                >
                </img>
               </div>
               <button className="flex justify-center items-center w-52  text-blue-800  hover:bg-red-500  hover:text-black">
               <FaCartPlus 
               />
               <div
            className=" ml-1 text-center ">
                 Add to Cart
            </div>
            
               </button>
            </div >
            
            
            <div
            className="w-52 text-center bg-black text-white ">
                {name}
            </div>
        </div>
    )
}