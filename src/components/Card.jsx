import React from "react";

const Card = ({ name, price, description, image, onClick, id }) => {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt="deneme-resmi" />
        <h3>{name}</h3>
        <p className="meal-item-price">{price}</p>
        <p className="meal-item-description">{description}</p>
        <button
          onClick={() => onClick(id)}
          className="button"
          style={{ marginBottom: "20px" }}
        >
          Add to Cart
        </button>
      </article>
    </div>
  );
};

export default Card;
