import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading, please wait...</p>
    </div>
  );
}