import Image from "next/image";
import styles from "./page.module.css";

const Page = async ({ params }) => {
    const { id } = await params;
    let product;
    try {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      product = await data.json();
    } catch (error) {
      throw Error(error);
    }
    console.log("prefetched");

    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className={styles.productImage}
          />
          <div className={styles.textContent}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>
        </div>
      </div>
    );
  }

export default Page;