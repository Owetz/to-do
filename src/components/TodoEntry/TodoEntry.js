import React, {useState} from 'react';
import './TodoEntry.css';

const TodoEntry = (props) => {
    const {todo} = props;
    console.log(props);
    const [editMode, setEditMode] = useState(false);


    function inputKey(e) {
        if(e.key === 'Enter') {
            setEditMode(!editMode);
        }
    }

    function updateTodoContent(e) {
        const value = e.target.value;
        console.log(value);
        console.log(todo.content);
    }

    function deleteTodo(e) {
        e.target.parentNode.parentNode.remove();
    }

    return (
        <div className={todo.completed ? 'todo-entry completed' : 'todo-entry'}>
            
            <i className={todo.completed ? 'far fa-check-square' : 'far fa-square'} onClick={() => todo.updateTodoCompleted}></i>
            
            {editMode ? <input type="text" 
            value={todo.content} 
            autoFocus 
            onKeyPress={inputKey} 
            onChange={updateTodoContent} /> : 
            <p>{todo.content}</p>}

            <div className="todo-utils">
                {todo.completed ? '' : <i className="fas fa-pen" onClick={() => setEditMode(!editMode)}></i>}
                <i className="far fa-trash-alt" onClick={deleteTodo}></i>
            </div>
        </div>
    )
}

export default TodoEntry;