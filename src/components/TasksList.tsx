import React from 'react';

import {ITodo, Todos} from '../types/types'
import Task from './Task'

 interface TasksListProps {
     todos: Todos
     deleteTodo: (todo:ITodo) => void
 }

 const TasksList:React.FC<TasksListProps> = ({todos, deleteTodo}) => {

    return (
        <div className="todo__list">
            {todos.map(todo => 
                <Task 
                    todo={todo}
                    key={todo.id} 
                    deleteTodo={() => deleteTodo(todo)}
                    />
                    )
            }
        </div>
)};

export default TasksList;