import React from 'react';
import { ITodo } from '../types/types';

interface DeleteTaskBtnProps {
    todo: ITodo
    deleteTodo: (id:number) => void
}

const DeleteTaskBtn:React.FC<DeleteTaskBtnProps> = ({todo, deleteTodo}) => {

    return (
        <button className="todo__task-del" 
        onClick={() => deleteTodo(todo.id)}
        >-</button>
    );
};

export default DeleteTaskBtn;