import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Mobile Store</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="col-12">
            <div className="row">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link to={`/products/${product.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
