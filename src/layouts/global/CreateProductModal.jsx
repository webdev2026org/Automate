// CreateProductModal.jsx
import { useState, useEffect } from "react";
import Dropdown from "../global/Dropdown";
import "../../styles/create-product-modal.css";

const STOCK_OPTIONS = ["In Stock", "Out of Stock", "Limited Stock"];
const EMPTY_FORM = {
  image: "",
  alt: "",
  category: "",
  title: "",
  price: "",
  subtitle: "",
  stockText: "In Stock",
  rating: "",
  brand: "",
};
const CreateProductModal = ({
  isOpen,
  onClose,
  onAddProduct,
  onEditProduct,
  initialData = null,
  mode = "create",
}) => {
  const [formData, setFormData] = useState(EMPTY_FORM);

  // ✅ Prefill form when editing, reset when creating
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData(initialData);
    } else {
      setFormData(EMPTY_FORM);
    }
  }, [mode, initialData, isOpen]);

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
    console.log("MODE:", mode);
    console.log("initialData:", initialData);
    console.log("initialData._id:", initialData?._id);
    console.log("formData:", formData);
    if (mode === "edit") {
      await onEditProduct(initialData._id, formData);
    } else {
      await onAddProduct(formData);
    }
    onClose();
  };

  return (
    <div className="cpm-overlay">
      <div className="cpm-wrapper">
        {/* Close button — floating above modal like LoginSignUpModal */}
        <div className="cpm-close-container">
          <span className="cpm-close" onClick={onClose}>
            &times;
          </span>
        </div>

        <div className="cpm-box">
          {/* Header */}
          <div className="cpm-header">
            <h2 className="cpm-title">
              {mode === "edit" ? "Edit Product" : "Create New Product"}
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="cpm-form">
            {/* Title + Subtitle */}
            <div className="cpm-row">
              <div className="cpm-field">
                <label>Title *</label>
                <input
                  name="title"
                  placeholder="e.g. Auralite SportBuds Pro"
                  value={formData.title}
                  onChange={handleChange}
                  className="LoginSignUpModal-input"
                  required
                />
              </div>
              <div className="cpm-field">
                <label>Subtitle</label>
                <input
                  name="subtitle"
                  placeholder="e.g. Sweat-proof sport earbuds"
                  value={formData.subtitle}
                  onChange={handleChange}
                  className="LoginSignUpModal-input"
                />
              </div>
            </div>

            {/* Brand + Category */}
            <div className="cpm-row">
              <div className="cpm-field">
                <label>Brand *</label>
                <input
                  name="brand"
                  placeholder="e.g. Auralite"
                  value={formData.brand}
                  onChange={handleChange}
                  className="LoginSignUpModal-input"
                  required
                />
              </div>
              <div className="cpm-field">
                <label>Category *</label>
                <input
                  name="category"
                  placeholder="e.g. Accessories"
                  value={formData.category}
                  onChange={handleChange}
                  className="LoginSignUpModal-input"
                  required
                />
              </div>
            </div>

            {/* Price + Rating */}
            <div className="cpm-row">
              <div className="cpm-field">
                <label>Price ($) *</label>
                <input
                  type="number"
                  name="price"
                  placeholder="e.g. 109"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  className="LoginSignUpModal-input"
                  required
                />
              </div>
              <div className="cpm-field">
                <label>Rating (0–5)</label>
                <input
                  type="number"
                  name="rating"
                  placeholder="e.g. 4.5"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={handleChange}
                  className="LoginSignUpModal-input"
                />
              </div>
            </div>

            {/* Stock Status — reusing Dropdown */}
            <div className="cpm-field">
              <label>Stock Status</label>
              <Dropdown
                options={STOCK_OPTIONS}
                defaultValue={formData.stockText}
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, stockText: val }))
                }
              />
            </div>

            {/* Image URL */}
            <div className="cpm-field">
              <label>Image URL</label>
              <input
                name="image"
                placeholder="https://picsum.photos/seed/..."
                value={formData.image}
                onChange={handleChange}
                className="LoginSignUpModal-input"
              />
            </div>

            {/* Alt Text */}
            <div className="cpm-field">
              <label>Image Alt Text</label>
              <input
                name="alt"
                placeholder="Describe the image"
                value={formData.alt}
                onChange={handleChange}
                className="LoginSignUpModal-input"
              />
            </div>

            {/* Actions */}
            <div className="cpm-actions">
              <button
                type="button"
                onClick={onClose}
                className="cpm-btn-cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="LoginSignUpModal-button cpm-btn-submit"
              >
                {mode === "edit" ? "Save Changes" : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
