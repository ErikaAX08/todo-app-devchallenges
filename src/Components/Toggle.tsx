import type { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setTab } from '../store/slices/tabSlice';

import styles from './Toggle.module.css';

function Toggle() {
  const tab = useSelector((state: RootState) => state.tab.tab);
  const dispatch = useDispatch();  

  return (
    <section className={styles.container}>
        <div onClick={() => dispatch(setTab(0))} className={`${styles.toggleContainer} ${tab === 0 ? '' : styles.hidden }`}>
            <span className={styles.toggleText}>All</span>
        </div>
        <div onClick={() => dispatch(setTab(1))} className={`${styles.toggleContainer} ${tab === 1 ? '' : styles.hidden }`}>
            <span className={styles.toggleText}>Active</span>
        </div>
        <div onClick={() => dispatch(setTab(2))} className={`${styles.toggleContainer} ${tab === 2 ? '' : styles.hidden }`}>
            <span className={styles.toggleText}>Completed</span>
        </div>
    </section>
  )
}

export default Toggle