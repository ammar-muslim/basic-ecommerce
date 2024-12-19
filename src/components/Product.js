import React from 'react';
import './Product.css'; 
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { product } = props;
  return (
    <>
      <div className="card h-100"> 
        <img src={product.image} className="card-img-top product-image" alt={product.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <h5 className="card-price">$ {product.price}</h5>
          <Link to={`product/${product.id}`} className="btn btn-primary mt-auto">Details</Link>
        </div>
      </div>
    </>
  );
}

export default Product;
