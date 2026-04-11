import "../../styles/productfilter.css"
import { useState } from "react";

const ProductFilter = () => {

    const Categories = ["Headphones", "Speakers", "Accessories"];
    const Brands = ["Auralite", "Boreal Sound", "Crescendo"];
    const Ratings = ["4 stars & up", "3 stars & up", "2 stars & up"];

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState([25, 999]);
    const [isApplied, setIsApplied] = useState(false);


    const toggleSelection = (list, setList, item) => {
        if (list.includes(item)) {
            setList(list.filter((i) => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    const handleApply = () => {
        setIsApplied(true);
        alert("Filters applied !!");
    };

    const resetFilters = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
        setRating("");
        setPrice([25, 999]);
        setIsApplied(false);

    };

    return (
        <div className="product-filter">
            <div className="filters">Filters</div>

            {/* Category */}
            <div className="filter-section">
                <h3>Category</h3>
                {Categories.map((category, index) => (
                    <label key={index} style={{ display: "block", marginBottom: "8px" }}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleSelection(selectedCategories, setSelectedCategories, category)}
                        />
                        {category}
                    </label>
                ))}

            </div>
            <hr className="filter-divider" />

            {/* Price */}
            <div className="filter-section">
                <h3>Price</h3>
                <div className="flex items-center justify-between text-xs mb-2">
                    <span>${price[0]}</span>
                    <span>${price[1]}</span>
                </div>
                <input
                    type="range"
                    min="25"
                    max="999"
                    value={price[1]}
                    onChange={(e) => setPrice([25, Number(e.target.value)])}
                    className="w-full"
                />

            </div>
            <hr className="filter-divider" />

            {/* Brand */}
            <div className="filter-section">
                <h3>Brand</h3>
                {Brands.map((Brand, index) => (
                    <label key={index} style={{ display: "block", marginBottom: "8px" }}>
                        <input
                            type="checkbox"
                            checked={selectedBrands.includes(Brand)}
                            onChange={() => toggleSelection(selectedBrands, setSelectedBrands, Brand)}
                        />
                        {Brand}
                    </label>
                ))}

            </div>
            <hr className="filter-divider" />

            {/* Cutomer Rating */}
            <div className="filter-section">
                <h3>Customer Rating</h3>
                {Ratings.map((Rating, index) => (
                    <label key={index} style={{ display: "block", marginBottom: "8px" }}>
                        <input
                            type="radio"
                            name="rating"
                            checked={rating === Rating}
                            onChange={() => setRating(Rating)}
                        />
                        {Rating}
                    </label>
                ))}
            </div>

            {/* Buttons */}
            <div className="filter-actions">
                <button
                    className={isApplied ? "btn-apply btn-applied" : "btn-apply"}
                    onClick={handleApply}
                >
                    Apply
                </button>

                <button
                    className="btn-reset"
                    onClick={resetFilters}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default ProductFilter;