import React from 'react';
import './TodoInsert.css';


const TodoInsert = () => {
    return (
        <div className="todo-entry placeholder">
            <input type="text" placeholder="Add To-Do..." />
            <i className="fas fa-plus"></i>
        </div>
    )
}

export default TodoInsert;