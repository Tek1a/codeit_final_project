"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

function Page() {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductsFromStorage = async () => {
    const products = await JSON.parse(localStorage.getItem("products"));
    setCartProducts(products);
  };

  useEffect(() => {
    getProductsFromStorage();
  }, []);

  const handleAddOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
    products[index].count++;

    setCartProducts(products);
    localStorage.setItem("products", JSON.stringify([...products]));
  };

  const handleRemoveOne = async (product) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);

    if (index > -1) {
      products[index].count--;

      if (products[index].count <= 0) {
        products.splice(index, 1);
      }

      setCartProducts(products);
      localStorage.setItem("products", JSON.stringify([...products]));
    }
  };

  const calculateTotal = () => {
    return cartProducts.reduce((acc, item) => acc + item.product.price * item.count, 0).toFixed(2);
  };

  return (
    <div className={styles.container}>
      {cartProducts?.length > 0 ? (
        <>
          {cartProducts.map((prod) => (
            <div key={prod.product.id} className={styles.itemWrapper}>
              <Image
                src={prod.product.image}
                width={70}
                height={70}
                alt={prod.product.title}
                className={styles.productImage}
              />
              <div className={styles.textWrapper}>
                <h4>{prod.product.title}</h4>
                <p>Quantity: {prod.count}</p> 
                <p>Unit Price: ${prod.product.price}</p> 
                <p>Subtotal: ${(prod.product.price * prod.count).toFixed(2)}</p> 
              </div>
              <div className={styles.buttonWrapper}>
                <button
                  className={`${styles.button} ${styles.addButton}`}
                  onClick={() => handleAddOne(prod.product)}
                >
                  +1
                </button>
                <button
                  className={`${styles.button} ${styles.removeButton}`}
                  onClick={() => handleRemoveOne(prod.product)}
                >
                  -1
                </button>
              </div>
            </div>
          ))}
          <div className={styles.totalWrapper}> 
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </>
      ) : (
        <p className={styles.emptyCart}>🛒 Your cart is empty</p> 
      )}
    </div>
  );
}


export default Page;

