import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductsDetailes = () => {
  const api = "https://fakestoreapi.com/products";
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${api}/${productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [productId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Product Details</h2>
      <div style={styles.content}>
        <div>
          <img
            src={product.image}
            alt={product.title}
            style={styles.image}
          />
        </div>
        <div style={styles.details}>
          <h3>{product.title}</h3>
          <p style={styles.description}>{product.description}</p>
          <h4 style={styles.price}>${product.price}</h4>
          <button style={styles.button}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailes;








const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  image: {
    width: "300px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  details: {
    textAlign: "left",
    maxWidth: "500px",
  },
  description: {
    fontSize: "18px",
    color: "#555",
  },
  price: {
    color: "#28a745",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
