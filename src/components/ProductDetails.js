import React from "react";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const product = props.products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn" onClick={() => props.history.push("/")}>Back</button>
    </div>
  );
};

export default ProductDetails;
