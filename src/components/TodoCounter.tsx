import React from 'react';

interface TodoCounterProps {
    todoCount: number
}

const TodoCounter:React.FC<TodoCounterProps> = ({todoCount}) => {
    return (
        <div> 
            <span>Tasks in total:</span>
            <strong id="count"> {todoCount} </strong>
        </div>
    );
};

export default TodoCounter;