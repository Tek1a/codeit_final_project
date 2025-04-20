import ProductItem from "@/components/ProductItem/ProductItem";
import styles from "./page.module.css";
import Link from "next/link";
import { headers } from "next/headers";

const Products = async () => {
  const headersList = await headers();
  const path = headersList.get("x-next-url");
  let products;
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    products = await data.json();
  } catch (error) {
    throw Error(error);
  }
  console.log(path);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Link key={product.id} href={`/products/details/${product.id}`}>
          <ProductItem item={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;