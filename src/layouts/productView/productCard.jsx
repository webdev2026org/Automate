import React from 'react'
import img2 from "../../assets/img2.png"
import "../../styles/productcard.css"

const ProductCard = () => {
    return (
        <div className="product-card">
            {/* Product Image */}
            <div className='image-container'>
                <img
                    src={img2}
                    alt="Stacked beverage crates"
                />
            </div>


            {/* Product Info */}
            <div className="card-description">

               <div className='card-section'>
                <span className="font-medium">Price:</span> 
                <span>$49.99</span>
                <button className="card-btn">
                    Add
                </button>
               </div>
                
               <div className='card-section'>
                <span className="font-medium">Availability:</span> 
                <span>In stock</span>
                <button className="card-btn">
                    Details
                </button>
               </div>

            </div>
        </div>
    )
}

export default ProductCard