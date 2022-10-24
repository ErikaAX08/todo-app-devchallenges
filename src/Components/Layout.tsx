import type { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import CompletedTodos from '../modules/CompletedTodos';
import Todos from '../modules/Todos';

export default function Layout() {
    const tab = useSelector((state: RootState) => state.tab.tab);
    return tab === 2 ? <CompletedTodos/> : <Todos/>
}