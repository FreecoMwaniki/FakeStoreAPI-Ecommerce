import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart); // inafetch from local storage
  }, []);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", height: "100px", marginRight: "20px" }}
              />
              <div>
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
