import "../../styles/itemcard.css"

const ItemCard = ({
  image,
  alt,
  category,
  title,
  price,
  subtitle,
  stockText,
  rating,
  note,
}) => {
  return (
    <article className="item-card">
      <div className="item-card__image">
        <img src={image} alt={alt} />
      </div>

      <div className="item-card__body">
        <div className="item-card__header">
          <div>
            <p className="item-card__category">{category}</p>
            <h2 className="item-card__title">{title}</h2>
          </div>
          <span className="item-card__price">{price}</span>
        </div>

        <p className="item-card__subtitle">{subtitle}</p>

        <div className="item-card__meta">
          <span className="item-card__stock">{stockText}</span>
          <span className="item-card__rating">{rating}</span>
        </div>

        <p className="item-card__note">{note}</p>

        <div className="item-card__actions">
          <button type="button" className="item-card__button item-card__button--secondary">
            Quick view
          </button>
          <button type="button" className="item-card__button item-card__button--primary">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ItemCard
