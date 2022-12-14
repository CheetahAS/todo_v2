import {useState} from 'react';
import {ITodo} from '../types/types'
import DeleteTaskBtn from './DeleteTaskBtn';

interface TaskProps {
    todo: ITodo
    deleteTodo: (id:number) => void
}

const Task:React.FC<TaskProps> = ({todo, deleteTodo}) => {
    const [isChecked, setIsCheked] = useState<boolean>(false);
    
    const checkBoxHandler = () => {
        setIsCheked(!isChecked);
    };

    const cls = isChecked ? "todo__task todo__task-completed" : "todo__task";

    return (
        <div className={cls}>
            <label className="todo__checkbox">
                <input type="checkbox" />
                <div onClick={checkBoxHandler}></div> 
            </label>
            <div className="todo__task-text">{todo.text}</div>
            <DeleteTaskBtn 
                todo={todo} 
                deleteTodo={() => deleteTodo(todo.id)}
            />
        </div>
    );
};

export default Task;