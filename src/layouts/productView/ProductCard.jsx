import React from 'react'
import img2 from "../../assets/img2.png"
const ProductCard = () => {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
            {/* Product Image */}
            <div className='ImageContainer bg-gray-300'>
                <img
                    src={img2}
                    alt="Stacked beverage crates"
                    className="py-16 px-16 object-cover"
                />
            </div>


            {/* Product Info */}
            <div className="Card-Description flex justify-between bg-black text-white ">

               <div className='Card-Left-Section flex flex-col w-full m-6 gap-2'>
                <span className="font-medium">Price:</span> 
                <span>$49.99</span>
                <button className="flex-1 bg-white text-black py-3 px-3 hover:bg-gray-800">
                    Add
                </button>
               </div>
                
               <div className='Card-Right-Section flex flex-col w-full m-6 gap-2'>
                <span className="font-medium">Availability:</span> 
                <span>In stock</span>
                <button className="flex-1 bg-white text-black px-3 py-3 hover:bg-gray-800">
                    Details
                </button>
               </div>

            </div>
        </div>
    )
}

export default ProductCard