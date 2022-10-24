import { useEffect, useState } from 'react';
import type { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { Todo } from '../store/slices/todoSlice';

import AddTodo from '../Components/AddTodo'
import TodoItem from '../Components/TodoItem'

function Todos() {
  const tab = useSelector((state: RootState) => state.tab.tab);
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [selectedTodos, setSelectedTodos] = useState<Todo[]>(todos);

  useEffect(() => tab === 0 ? setSelectedTodos(todos) : setSelectedTodos(todos.filter((todo) => todo.completed === false)), [tab, todos]);

  return (
    <section>
        <AddTodo/>
        {
           selectedTodos.map((todo) => (
             <TodoItem  key={todo.id} {...todo} />
           ))
        }
    </section>
  )
}

export default Todos