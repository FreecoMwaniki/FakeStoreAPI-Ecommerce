import { useState, useEffect } from "react";
import "../pages/Products.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?");
      const fetchData = await response.json();
      setProducts(fetchData);
      setLoading(false);
    } catch (error) {
      setError("Failed to load products.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Add image to the cart item
  const addToCart = (product) => {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart)); 
    alert(`${product.title} has been added to your cart!`);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div id="products" className="products">
      {products.map(({ id, image, title, price, description }) => (
        <div key={id} className="card-body">
          <img src={image} alt={title} />
          <h4>{title}</h4>
          <p>Price: ${price}</p>
          <p>{description}</p>
          <button onClick={() => addToCart({ id, title, price, image })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
