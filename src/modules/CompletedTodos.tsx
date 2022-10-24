import type { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllTodos } from '../store/slices/todoSlice';

import TodoItem from '../Components/TodoItem';
import styles from './CompletedTodos.module.css';

function CompletedTodos() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const completedTodos = todos.filter((todo) => todo.completed === true); 

  return (
    <section className={styles.container}>

        {
          completedTodos.map((todo) => (
            <TodoItem key={todo.id} { ...todo } />
          ))
        }

        <button className={styles.button} onClick={() => dispatch(deleteAllTodos())}>
            <img src='/delete-white.svg' className={styles.iconDelete} />
            delete all
        </button>
    </section>
  )
}

export default CompletedTodos