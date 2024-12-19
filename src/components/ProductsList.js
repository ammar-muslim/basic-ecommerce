import { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductsList.css";

const ProductsList = () => {
  const api = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = () =>
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch((error) =>
        console.error("There was a problem with your fetch operation:", error)
      );

  const getProducts = () =>
    fetch(`${api}/categories`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("There was a problem with your fetch operation:", error)
      );

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);


  const getProductsInCategory = (cat) => {
    fetch(`${api}/categories/${cat}`)
    .then((res) => res.json())
    .then((product) => setProducts(product))
  }
  return (
    <>
      <h3 className="text-center m-4 p-3 fw-bold">Products List</h3>
      <div className="container">
        <div className="categories_filter">
          <button className="category btn btn-info" onClick={() => {setProducts(getProducts())}}>All</button>
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => {getProductsInCategory(cat)}}
                className=" category btn btn-info">

                {cat}
              </button>
            );
          })}
        </div>
        <div className="row gy-4">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
