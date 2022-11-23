import React from 'react';
import { ITodo } from '../types/types';

interface DeleteTaskBtnProps {
    todo: ITodo
    deleteTodo: (id:number) => void
}

const DeleteTaskBtn = ({todo, deleteTodo}:DeleteTaskBtnProps) => {

    return (
        <div className="todo__task-del" onClick={() => deleteTodo(todo.id)}>-</div>
    );
};

export default DeleteTaskBtn;