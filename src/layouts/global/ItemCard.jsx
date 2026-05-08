import "../../styles/itemcard.css";
import "../../styles/starrating.css";
import StarRating from "./StarRating";

const ItemCard = ({
  _id,
  image,
  alt,
  category,
  title,
  price,
  subtitle,
  stockText,
  rating,
  note,
  onRate,
  brand,
  isOwner,
  onEdit,
  onDelete,
}) => {
  return (
    <article className="item-card">
      <div className="item-card__image">
        <img src={image} alt={alt} />

        {isOwner && (
          <div className="item-card__overlay">
            <button
              type="button"
              className="item-card__overlay-btn item-card__overlay-btn--edit"
              onClick={() => onEdit && onEdit(_id)}
            >
              ✏️ Edit
            </button>
            <button
              type="button"
              className="item-card__overlay-btn item-card__overlay-btn--delete"
              onClick={() => onDelete && onDelete(_id)}
            >
              🗑️ Delete
            </button>
          </div>
        )}
      </div>

      <div className="item-card__body">
        <div className="item-card__header">
          <div>
            <p className="item-card__category">{category}</p>
            <h2 className="item-card__title">{title}</h2>
          </div>
          <span className="item-card__price">${price}</span>
        </div>

        <p className="item-card__subtitle">{subtitle}</p>

        <div className="item-card__meta">
          <span className="item-card__stock">{stockText}</span>

          <div className="item-card__rating">
            <StarRating
              rating={Number(rating)}
              isInteractive={false}
              onRate={(value) => onRate && onRate(value, _id)}
            />
            <span className="text-sm text-gray-600">({rating})</span>
          </div>
        </div>

        <p className="item-card__note">{note}</p>

        <div className="item-card__actions">
          <button
            type="button"
            className="item-card__button item-card__button--secondary"
          >
            Quick view
          </button>
          <button
            type="button"
            className="item-card__button item-card__button--primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
