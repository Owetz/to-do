import React, {useState, useEffect} from 'react';
import './TodoEntry.css';

const TodoEntry = (props) => {
    const {todo, id, updateTodoItem, deleteTodoItem} = props;

    const [todoItem, setTodoItem] = useState(todo);
    useEffect(() => {
        updateTodoItem(id, todoItem);
    },[todoItem]);

    const [editMode, setEditMode] = useState(false);
    const [content, setContent] = useState(todoItem.content);



    //Funktioner
    const updatetodoItemState = (todoItem) => {
        setTodoItem(prevState => {return {...prevState, ...todoItem}});
    } 

    const inputKey = (e) => {
        if(e.key === 'Enter') {
            todoItem.content = e.target.value;
            updatetodoItemState(todoItem);
            setEditMode(!editMode);
        }
    }

    const setCompleted = () => {
        todoItem.completed = !todoItem.completed;
        updatetodoItemState(todoItem);
    }

    const updateTodoContent =(e) => {
        setContent(e.target.value);
    }

    return (
        <div id={id} className={todoItem.completed ? 'todo-entry completed' : 'todo-entry'}>
            
            <i className={todoItem.completed ? 'far fa-check-square' : 'far fa-square'} onClick={setCompleted}></i>
            
            {editMode ? <input type="text" 
            value={content} 
            autoFocus 
            onKeyPress={inputKey} 
            onChange={updateTodoContent}/> : 
            <p>{content}</p>}

            <div className="todo-utils">
                {todoItem.completed ? '' : (editMode ? '' : <i className="fas fa-pen" onClick={() => setEditMode(!editMode)}></i>)}
                <i className="far fa-trash-alt" onClick={deleteTodoItem}></i>
            </div>
        </div>
    )
}

export default TodoEntry;