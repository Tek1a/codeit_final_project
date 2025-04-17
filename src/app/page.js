import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <form className={styles.container}>
        <h3 className={styles.signin}>Sign In</h3>
        <p className={styles.desc}>please sign in to access market.</p>
        <input className={styles.input} placeholder="username" />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
        />
        <Link prefetch={false} href="/products">
          <button className={styles.button}>Sign In</button>
        </Link>
      </form>
    </main>
  );
}
