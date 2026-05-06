// CreateProductModal.jsx
import { useState } from "react";
import Dropdown from "../global/Dropdown";
import "../../styles/create-product-modal.css";

const STOCK_OPTIONS = ["In Stock", "Out of Stock", "Limited Stock"];

const CreateProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const [formData, setFormData] = useState({
    image: "",
    alt: "",
    category: "",
    title: "",
    price: "",
    subtitle: "",
    stockText: "In Stock",
    rating: "",
    brand: "",
  });
  console.log("Form data submitted is: ", formData);
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAddProduct({ ...formData, userId: "user123" });
    onClose();
  };

  return (
    <div className="cpm-overlay">
      <div className="cpm-wrapper">

        {/* Close button — floating above modal like LoginSignUpModal */}
        <div className="cpm-close-container">
          <span className="cpm-close" onClick={onClose}>&times;</span>
        </div>

        <div className="cpm-box">
          {/* Header */}
          <div className="cpm-header">
            <h2 className="cpm-title">Create New Product</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="cpm-form">

            {/* Title + Subtitle */}
            <div className="cpm-row">
              <div className="cpm-field">
                <label>Title *</label>
                <input name="title" placeholder="e.g. Auralite SportBuds Pro"
                  onChange={handleChange} className="LoginSignUpModal-input" required />
              </div>
              <div className="cpm-field">
                <label>Subtitle</label>
                <input name="subtitle" placeholder="e.g. Sweat-proof sport earbuds"
                  onChange={handleChange} className="LoginSignUpModal-input" />
              </div>
            </div>

            {/* Brand + Category */}
            <div className="cpm-row">
              <div className="cpm-field">
                <label>Brand *</label>
                <input name="brand" placeholder="e.g. Auralite"
                  onChange={handleChange} className="LoginSignUpModal-input" required />
              </div>
              <div className="cpm-field">
                <label>Category *</label>
                <input name="category" placeholder="e.g. Accessories"
                  onChange={handleChange} className="LoginSignUpModal-input" required />
              </div>
            </div>

            {/* Price + Rating */}
            <div className="cpm-row">
              <div className="cpm-field">
                <label>Price ($) *</label>
                <input type="number" name="price" placeholder="e.g. 109" min="0"
                  onChange={handleChange} className="LoginSignUpModal-input" required />
              </div>
              <div className="cpm-field">
                <label>Rating (0–5)</label>
                <input type="number" name="rating" placeholder="e.g. 4.5" min="0" max="5" step="0.1"
                  onChange={handleChange} className="LoginSignUpModal-input" />
              </div>
            </div>

            {/* Stock Status — reusing Dropdown */}
            <div className="cpm-field">
              <label>Stock Status</label>
              <Dropdown
                options={STOCK_OPTIONS}
                defaultValue={formData.stockText}
                onChange={(val) => setFormData((prev) => ({ ...prev, stockText: val }))}
              />
            </div>

            {/* Image URL */}
            <div className="cpm-field">
              <label>Image URL</label>
              <input name="image" placeholder="https://picsum.photos/seed/..."
                onChange={handleChange} className="LoginSignUpModal-input" />
            </div>

            {/* Alt Text */}
            <div className="cpm-field">
              <label>Image Alt Text</label>
              <input name="alt" placeholder="Describe the image"
                onChange={handleChange} className="LoginSignUpModal-input" />
            </div>

            {/* Actions */}
            <div className="cpm-actions">
              <button type="button" onClick={onClose} className="cpm-btn-cancel">
                Cancel
              </button>
              <button type="submit" className="LoginSignUpModal-button cpm-btn-submit">
                Add Product
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;