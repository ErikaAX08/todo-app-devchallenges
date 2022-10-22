import TodoItem from '../Components/TodoItem';
import styles from './CompletedTodos.module.css';

function CompletedTodos() {
  return (
    <section className={styles.container}>
        <TodoItem />
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>

        <button className={styles.button}>
            <img src='/delete-white.svg' className={styles.iconDelete} />
            delete all
        </button>
    </section>
  )
}

export default CompletedTodos