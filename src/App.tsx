import React from 'react';
import CreateTodoForm from './components/CreateTodoFrom';
import TasksList from './components/TasksList';
import TodoCounter from './components/TodoCounter';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { todosSlice } from './store/todoReducer';
import { ITodo} from './types/types';

const App:React.FC = () => {

  const {todos, count} = useAppSelector(state => state.todoReducer);
  const {addTodo, deleteTodo, incrementCounter, decrementCounter} = todosSlice.actions;
  const dispatch = useAppDispatch();

  function addTodoComp(todo:ITodo) {
      dispatch( addTodo(todo) );
      dispatch( incrementCounter() );
    };

  function deleteTodoComp(todo:ITodo) {
    dispatch( deleteTodo(todo) );
    dispatch( decrementCounter() );
    };

  return (
    <div className="todo">
      <div className="todo__content">
            <h1 className="todo__title">All tasks</h1>
                <CreateTodoForm addTodo={(todo) => addTodoComp(todo)}/>
                <TodoCounter todoCount={count}/>
                <TasksList todos={todos} deleteTodo={(todo) => deleteTodoComp(todo)}/>
      </div>
    </div>
  );
  
}

export default App;
