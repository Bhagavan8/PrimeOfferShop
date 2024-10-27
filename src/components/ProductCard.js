
import React from 'react';
import '../css/ProductCard.css';

const ProductCard = ({ image, title, price, description, onAddToCart, onBuyNow }) => {
    return (
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="card product-card shadow-sm h-100">
          <img src={image} alt={title} className="card-img-top img-fluid" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title font-weight-bold">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="text-danger font-weight-bold product-price">${price.toFixed(2)}</p>
            <div className="d-flex justify-content-between mt-auto">
              <button className="btn btn-primary mr-2 w-50" onClick={onAddToCart}>
                Add to Cart
              </button>
              <button className="btn btn-success w-50" onClick={onBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default ProductCard;
