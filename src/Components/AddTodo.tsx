import styles from './AddTodo.module.css';

function AddTodo() {
  return (
    <section className={styles.container}>
        <form className={styles.form}>
            <input className={styles.input} type="text" name="todo" id="todo" placeholder="add details" />
            <button className={styles.button} type="submit">Add</button>  
        </form>
    </section>
  )
}

export default AddTodo