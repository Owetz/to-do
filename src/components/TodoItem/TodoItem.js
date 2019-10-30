import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import './TodoItem.css';

const TodoEntry = (props) => {
    const { todo, id, updateTodoItem, deleteTodoItem } = props;

    const [todoItem, setTodoItem] = useState(todo);
    useEffect(() => {
        updateTodoItem(id, todoItem);
    },[todoItem]);

    const [editMode, setEditMode] = useState(false);
    const [content, setContent] = useState(todoItem.content);



    //Funktioner
    const updatetodoItemState = (todoItem) => {
        setTodoItem(prevState => { return { ...prevState, ...todoItem } });
    }

    const inputKey = (e) => {
        if (e.key === 'Enter') {
            todoItem.content = content;
            updatetodoItemState(todoItem);
            setEditMode(!editMode);
        }
    }

    const setCompleted = () => {
        todoItem.completed = !todoItem.completed;
        updatetodoItemState(todoItem);
    }

    const updateTodoContent = (e) => {
        setContent(e.target.value);
        todoItem.content = content;
    }

    return (
        <div id={id} className={todoItem.completed ? 'todo-entry completed' : 'todo-entry'}>

            <FontAwesomeIcon icon={todoItem.completed ? faCheckSquare:faSquare} color="#11FFBD" onClick={setCompleted}/>

            {editMode ? (todoItem.completed ? setEditMode(!editMode): <input type="text"
                value={content}
                autoFocus
                onBlur={() => setEditMode(!editMode)}
                onKeyPress={inputKey}
                onChange={updateTodoContent} />) :
                <p>{content}</p>}

            <div className="todo-utils">
                {todoItem.completed ? '' : (editMode ? '' : <FontAwesomeIcon icon={faPen} color="#FFE000" onClick={() => setEditMode(!editMode)} />)}
                
                <FontAwesomeIcon icon={faTrashAlt} color="#EA384D" onClick={deleteTodoItem} />
            </div>
        </div>
    )
}

export default TodoEntry;