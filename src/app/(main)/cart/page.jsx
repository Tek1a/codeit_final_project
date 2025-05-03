"use client";
 import React, { useEffect, useState } from "react";
 import styles from './page.module.css'
 
 function page() {
   const [cartProducts, setCartProducts] = useState([]);
 
   const getProductsFromStorage = async () => {
     const products = await JSON.parse(localStorage.getItem("products"));
     setCartProducts(products);
   };
 
   useEffect(() => {
     getProductsFromStorage();
   }, []);
 
   return (
     <div className={styles.container}>
       {cartProducts.map((prod) => (
         <div key={prod.id}>
           <h4>{prod.title}</h4>
           <p>{prod.description}</p>
         </div>
       ))}
     </div>
   );
 }
 
 export default page;