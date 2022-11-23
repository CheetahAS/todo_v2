import React, {useState} from 'react';
import CreateTodoForm from './components/CreateTodoFrom';
import TasksList from './components/TasksList';
import TodoCounter from './components/TodoCounter';
import { ITodo, Todos } from './types/types';

const App:React.FC = () => {
  const [arrForTodos, setArrForTodos] = useState<Todos>([]);
  const [todoCount, setTodoCount] = useState<number>(arrForTodos.length);

  function addTodo(todo:ITodo) {
    setArrForTodos([...arrForTodos, todo]);
    setTodoCount((prev) => prev + 1);
  };

  function deleteTodo(id:number) {
    setArrForTodos(arrForTodos.filter(elem => {
      return elem.id !== id;
    }));
    setTodoCount((prev) => prev - 1);
  };

  return (
    <div className="todo">
      <div className="todo__content">
            <h1 className="todo__title">All tasks</h1>
                <CreateTodoForm addTodo={(todo) => addTodo(todo)}/>
                <TodoCounter todoCount={todoCount}/> 
                <TasksList arrForTodos={arrForTodos} deleteTodo={(id) => deleteTodo(id)}/> {/* How does it work????????? */}
      </div>
    </div>
  );
  
}

export default App;
