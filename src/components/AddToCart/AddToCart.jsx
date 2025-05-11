"use client";
import styles from "./AddToCart.module.css"
import React from "react";

function AddToCart({ product }) {



  const handleAddCart = async () => {
    const results = await JSON.parse(localStorage.getItem("products"));
    if (results === null) {
      localStorage.setItem(
        "products",
        JSON.stringify([{ product: product, count: 1 }])
      );
    } else {
      const index = results.findIndex((item) => item.product.id === product.id);

      if (index > -1) {
        results[index].count++;
      } else {
        results.push({ product: product, count: 1 });
      }

      localStorage.setItem("products", JSON.stringify([...results]));
    }
    
  window.history.back();
  };

  return (
    <button onClick={handleAddCart} className={styles.addToCartButton}>
      Add to Cart
    </button>
  );
}

export default AddToCart;