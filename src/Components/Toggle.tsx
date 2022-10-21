import styles from './Toggle.module.css';

function Toggle() {
  return (
    <section className={styles.container}>
        <div className={styles.toggleContainer}>
            <span className={styles.toggleText}>All</span>
        </div>
        <div className={styles.toggleContainer}>
            <span className={styles.toggleText}>Active</span>
        </div>
        <div className={styles.toggleContainer}>
            <span className={styles.toggleText}>Completed</span>
        </div>
    </section>
  )
}

export default Toggle