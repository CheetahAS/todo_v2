import React, {useState} from 'react';
import '../styles/styles.css'
import { ITodo } from '../types/types';


interface CreateTodoFormProps {
    addTodo: (todo:ITodo) => void
}

const CreateTodoForm: React.FC<CreateTodoFormProps> = ({addTodo}) => {
    const [inputValue, setInputValue] = useState<string>('');

    function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    };

    function addElement() {
        const todo:ITodo = {
            id: Math.ceil(Math.random() * 1000000),
            text: inputValue,
        }
        if(todo.text) {
            addTodo(todo);
            setInputValue('');
        } else {
            alert("Enter a correct value");
        }
    };

    return (
        <div className="todo__new">
            <input 
                onChange={changeValue} 
                value={inputValue} 
                id="new" 
                type="text" 
                placeholder="Add a new task inside"
            />
            <button
                id="add" 
                className="myButton"
                onClick={addElement}
            >+</button>
        </div>
    );
};

export default CreateTodoForm;