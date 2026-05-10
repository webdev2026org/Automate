import "../../styles/productfilter.css";
import { useState } from "react";
import { FILTER_DATA } from "../../constants/productFilter";

const ProductFilter = ({ setPayload }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState([199, 80000]);
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
    setPayload({
      category: selectedCategories,
      brand: selectedBrands,
      rating: rating,
      price: price,
    });
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setRating("");
    setPrice([199, 80000]);
    setIsApplied(false);
    setPayload({
      category: [],
      brand: [],
      rating: "",
      price: [199, 80000],
    });
  };

  return (
    <div className="product-filter">
      <div className="filters">Filters</div>

      <div className="filter-section">
        <h3>Category</h3>
        {FILTER_DATA.Categories.map((category, index) => (
          <label key={index} style={{ display: "block", marginBottom: "8px" }}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() =>
                toggleSelection(
                  selectedCategories,
                  setSelectedCategories,
                  category,
                )
              }
            />
            {category}
          </label>
        ))}
      </div>
      <hr className="filter-divider" />

      <div className="filter-section">
        <h3>Price</h3>
        <div className="flex items-center justify-between text-xs mb-2">
          <span>₹{price[0]}</span>
          <span>₹{price[1]}</span>
        </div>
        <input
          type="range"
          min="199"
          max="80000"
          value={price[1]}
          onChange={(e) => setPrice([199, Number(e.target.value)])}
          className="w-full"
        />
      </div>
      <hr className="filter-divider" />

      <div className="filter-section">
        <h3>Brand</h3>
        {FILTER_DATA.Brands.map((Brand, index) => (
          <label key={index} style={{ display: "block", marginBottom: "8px" }}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(Brand)}
              onChange={() =>
                toggleSelection(selectedBrands, setSelectedBrands, Brand)
              }
            />
            {Brand}
          </label>
        ))}
      </div>
      <hr className="filter-divider" />

      <div className="filter-section">
        <h3>Customer Rating</h3>
        {FILTER_DATA.Ratings.map((Rating, index) => (
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

      <div className="filter-actions">
        <button
          className={isApplied ? "btn-apply btn-applied" : "btn-apply"}
          onClick={handleApply}
        >
          Apply
        </button>
        <button className="btn-reset" onClick={resetFilters}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
