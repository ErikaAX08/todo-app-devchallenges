import { FormEvent, useState } from 'react';
import { addTodo } from '../store/slices/todoSlice';
import { useDispatch } from 'react-redux';

import styles from './AddTodo.module.css';
import randomNumer from '../lib/helpers/RandomNumber';

function AddTodo() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (todo === '') return;
    e.preventDefault();
    dispatch(addTodo({ id: randomNumer(), todo, completed: false }));
    setTodo('');
  }

  return (
    <section className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} onChange={(e) => setTodo(e.target.value)} value={todo} type="text" name="todo" id="todo" placeholder="add details" />
            <button className={styles.button} type="submit">Add</button>  
        </form>
    </section>
  )
}

export default AddTodo