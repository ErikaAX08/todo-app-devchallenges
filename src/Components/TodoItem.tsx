import type { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';

import { setCompletedTodo, deleteTodo , Todo } from '../store/slices/todoSlice';
import styles from './TodoItem.module.css'
import { useEffect, useState } from 'react';

function TodoItem({id, todo, completed}: Todo) {
  
  const [isCompleted, setIsCompleted] = useState<Boolean>(completed);
  const tab = useSelector((state: RootState) => state.tab.tab);
  const dispatch = useDispatch();

  useEffect(() => {
    completed = isCompleted;
    dispatch(setCompletedTodo({ id, todo, completed }))
  }, [isCompleted]);

  return (
    <label className={`${styles.container} ${isCompleted && styles.todoCompleted}`}>
      <div onClick={() => setIsCompleted((value) => !value)} className={`${styles.checkbox} ${isCompleted && styles.checked}`}>
        <img className={styles.iconDone} src='/done.svg' />
      </div>
      <span onClick={() => setIsCompleted((value) => !value)}>{ todo }</span>
      <img onClick={() => dispatch(deleteTodo({id, todo, completed}))} className={`${styles.icon} ${tab === 2 && styles.showIcon}`} src="/delete.svg" alt="Delete" />
    </label>
  );
}


export default TodoItem;
