import styles from '../app/strata.module.css';

// Bedded layers with a single fault seam; the right block is thrown 20px down.
export default function StrataField() {
  return <div className={styles.field} aria-hidden="true">
    <div className={styles.bedsLeft} />
    <div className={styles.bedsRight} />
    <div className={styles.seamLine} />
    <div className={styles.fieldGlow} />
  </div>;
}
