import React, { useState } from 'react';
import './TodoEntry.css';

const TodoEntry = (props) => {
    const [complete, setComplete] = useState(props.completed);
    const [content, setContent] = useState(props.content);
    const [editMode, setEditMode] = useState(false);
    return (
        <div className={complete ? 'todo-entry completed' : 'todo-entry'}>
            <i className={complete ? 'far fa-check-square' : 'far fa-square'} onClick={() => setComplete(!complete)}></i>
            {editMode ? <input type="text" onKeyUp={(event) => console.log(event)} />: <p>{content}</p>}
            <div className="todo-utils">
                {complete ? '' : <i className="fas fa-pen" onClick={() => setEditMode(true)}></i>}
                <i className="far fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default TodoEntry;