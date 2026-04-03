import React from 'react'
import img2 from "../../assets/img2.png"
import "../../styles/productCard.css"

const ProductCard = () => {
    return (
        <div className="Product-card">
            {/* Product Image */}
            <div className='ImageContainer'>
                <img
                    src={img2}
                    alt="Stacked beverage crates"
                    className="py-16 px-16 object-cover"
                />
            </div>


            {/* Product Info */}
            <div className="Card-Description">

               <div className='Card-Section'>
                <span className="font-medium">Price:</span> 
                <span>$49.99</span>
                <button className="Card-btn">
                    Add
                </button>
               </div>
                
               <div className='Card-Section'>
                <span className="font-medium">Availability:</span> 
                <span>In stock</span>
                <button className="Card-btn">
                    Details
                </button>
               </div>

            </div>
        </div>
    )
}

export default ProductCard