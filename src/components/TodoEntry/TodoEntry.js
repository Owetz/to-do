import React, { useState } from 'react';
import './TodoEntry.css';

const TodoEntry = (props) => {
    const [complete, setComplete] = useState(props.completed);
    const [content] = useState(props.content);
    return (
        <div className={complete ? 'todo-entry completed' : 'todo-entry'}>
            <i className={complete ? 'far fa-check-square' : 'far fa-square'} onClick={() => setComplete(!complete)}></i>
            <p>{content}</p>
            <div className="todo-utils">
                {complete ? <i className="fas fa-pen"></i> : ''}
                <i className="far fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default TodoEntry;