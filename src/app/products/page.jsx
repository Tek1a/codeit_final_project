import ProductItem from "@/components/ProductItem/ProductItem";
import styles from "./page.module.css";
import Link from "next/link";

const Products = async () => {
  let products;
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    products = await data.json();
  } catch (error) {
    throw Error(error);
  }
  console.log("prefetched");

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Link href={`/products/details/${product.id}`}>
          <ProductItem key={product.id} item={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;