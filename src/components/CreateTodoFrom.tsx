import React, {useState} from 'react';
import '../styles/styles.css'
import { ITodo } from '../types/types';


interface CreateTodoFormProps {
    addTodo: (todo:ITodo) => void
}

const CreateTodoForm = ({addTodo}:CreateTodoFormProps) => {
    const [value, setValue] = useState<string>('');

    function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    };

    function addElement() {
        const todo:ITodo = {
            id: Math.ceil(Math.random() * 1000000),
            text: value,
        }
        if(todo.text) {
            addTodo(todo);
            setValue('');
        } else {
            alert("Enter a correct value");
        }
    };

    return (
        <div className="todo__new">
            <input 
                onChange={changeValue} 
                value={value} 
                id="new" 
                type="text" 
                placeholder="Add a new task inside"
            />
            <div 
                id="add" 
                className="myButton"
                onClick={addElement}
            >+</div>
        </div>
    );
};

export default CreateTodoForm;