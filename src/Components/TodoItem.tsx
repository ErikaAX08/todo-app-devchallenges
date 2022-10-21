import styles from './TodoItem.module.css'

function TodoItem() {
  return (
    <label className={styles.container}>
      <div className={`${styles.checkbox} ${styles.checked}`}>
        <img className={styles.iconDone} src='/done.svg' />
      </div>
      Do challenges
      <img onClick={() => console.log("Deleted")} className={styles.icon} src="/delete.svg" alt="Delete" />
    </label>
  );
}

export default TodoItem;
