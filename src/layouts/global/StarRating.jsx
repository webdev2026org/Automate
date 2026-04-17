import { useState } from "react";

const StarRating = ({
  rating = 0,
  isInteractive = false,
  onRate,
}) => {
  const [hoverValue, setHoverValue] = useState(null);

  const percentage = ((hoverValue ?? rating) / 5) * 100;

  const handleClick = (value) => {
    if (!isInteractive) return;
    onRate && onRate(value);
  };

  return (
    <div className={`star-rating ${isInteractive ? "interactive" : ""}`}>
      {/* Background */}
      <div className="star-bg">★★★★★</div>

      {/* Fill */}
      <div
        className="star-fill"
        style={{ width: `${percentage}%` }}
      >
        ★★★★★
      </div>

      {/* Interactive Layer */}
      {isInteractive && (
        <div className="star-overlay">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleClick(star)}
              onMouseEnter={() => setHoverValue(star)}
              onMouseLeave={() => setHoverValue(null)}
            >
              ★
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default StarRating;