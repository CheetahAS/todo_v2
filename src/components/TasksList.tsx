import React from 'react';

import {Todos} from '../types/types'
import Task from './Task'

 interface TasksListProps {
     arrForTodos: Todos
     deleteTodo: (id:number) => void
 }

 const TasksList = ({arrForTodos, deleteTodo}: TasksListProps) => {

    return (
        <div className="todo__list">
            {arrForTodos.map(todo => 
                <Task 
                    todo={todo}
                    key={todo.id} 
                    deleteTodo={() => deleteTodo(todo.id)}
                    />
                    )
            }
        </div>
)};

export default TasksList;