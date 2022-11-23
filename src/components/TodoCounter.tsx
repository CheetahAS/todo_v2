import React from 'react';

interface TodoCounterProps {
    todoCount: number
}

const TodoCounter = ({todoCount}: TodoCounterProps) => {
    return (
        <div> 
            <span>Tasks in total:</span>
            <strong id="count"> {todoCount} </strong>
        </div>
    );
};

export default TodoCounter;