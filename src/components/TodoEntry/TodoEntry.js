import React, { useState } from 'react';
import './TodoEntry.css';

const TodoEntry = (props) => {
    console.log(props);
    const [complete, setComplete] = useState(props.completed);
    const [content, setContent] = useState(props.content);
    const [editMode, setEditMode] = useState(false);
    console.log(content);
    function inputKey(e) {
        if(e.key === 'Enter') {
            setEditMode(!editMode);
        }
    }
    function deleteTodo(e) {
        e.target.parentNode.parentNode.remove()
    }

    return (
        <div className={complete ? 'todo-entry completed' : 'todo-entry'}>
            <i className={complete ? 'far fa-check-square' : 'far fa-square'} onClick={() => setComplete(!complete)}></i>
            {editMode ? <input type="text" value={content} autoFocus onKeyPress={inputKey} onChange={(e) => setContent(e.target.value)} />: <p>{content}</p>}
            <div className="todo-utils">
                {complete ? '' : <i className="fas fa-pen" onClick={() => setEditMode(!editMode)}></i>}
                <i className="far fa-trash-alt" onClick={deleteTodo}></i>
            </div>
        </div>
    )
}

export default TodoEntry;