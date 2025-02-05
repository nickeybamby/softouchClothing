import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStars";

const ProductCards = ({ products }) => {
  console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
      {products.map((product, index) => (
        <div key={index} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt="product image"
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300 rounded-md"
              />
            </Link>

            <div className="hover:block absolute top-3 right-3">
              <button>
                <i className="ri-shopping-cart-line bg-primary p-1.5 text-white hover:bg-primary-dark rounded-sm"></i>
              </button>
            </div>
          </div>

          {/* product description */}
          <div className="product__card__content">
            <h4>{product.name}</h4>
            <p>
              &#8358;{product.price}
              {product.oldPrice ? <s> &#8358;{product?.oldPrice}</s> : null}
            </p>

            <RatingStars rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
