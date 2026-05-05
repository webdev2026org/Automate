import { useState } from "react";
import "../../styles/create-product-modal.css";

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

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({
      ...formData,
      _id: Date.now(),
      userId: "user123",
    });
    onClose();
  };

  return (
    <div className="cpm-overlay">
      <div className="cpm-box">

        {/* Header */}
        <div className="cpm-header">
          <h2 className="cpm-title">Create New Product</h2>
          <button onClick={onClose} className="cpm-close">✕</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="cpm-form">

          {/* Title + Subtitle */}
          <div className="cpm-row">
            <div className="cpm-field">
              <label>Title *</label>
              <input name="title" placeholder="e.g. Auralite SportBuds Pro" onChange={handleChange} required />
            </div>
            <div className="cpm-field">
              <label>Subtitle</label>
              <input name="subtitle" placeholder="e.g. Sweat-proof sport earbuds" onChange={handleChange} />
            </div>
          </div>

          {/* Brand + Category */}
          <div className="cpm-row">
            <div className="cpm-field">
              <label>Brand *</label>
              <input name="brand" placeholder="e.g. Auralite" onChange={handleChange} required />
            </div>
            <div className="cpm-field">
              <label>Category *</label>
              <input name="category" placeholder="e.g. Accessories" onChange={handleChange} required />
            </div>
          </div>

          {/* Price + Rating */}
          <div className="cpm-row">
            <div className="cpm-field">
              <label>Price ($) *</label>
              <input type="number" name="price" placeholder="e.g. 109" min="0" onChange={handleChange} required />
            </div>
            <div className="cpm-field">
              <label>Rating (0–5)</label>
              <input type="number" name="rating" placeholder="e.g. 4.5" min="0" max="5" step="0.1" onChange={handleChange} />
            </div>
          </div>

          {/* Stock Status */}
          <div className="cpm-field">
            <label>Stock Status</label>
            <select name="stockText" onChange={handleChange} defaultValue="In Stock">
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Limited Stock">Limited Stock</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="cpm-field">
            <label>Image URL</label>
            <input name="image" placeholder="https://picsum.photos/seed/..." onChange={handleChange} />
          </div>

          {/* Alt Text */}
          <div className="cpm-field">
            <label>Image Alt Text</label>
            <input name="alt" placeholder="Describe the image" onChange={handleChange} />
          </div>

          {/* Actions */}
          <div className="cpm-actions">
            <button type="button" onClick={onClose} className="cpm-btn-cancel">Cancel</button>
            <button type="submit" className="cpm-btn-submit">Add Product</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;