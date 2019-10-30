import React from 'react';
import './TodoInsert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const TodoInsert = (props) => {
    const { insertTodoItem, createId } = props;

    const insertTodo = (e) => {
        console.log('Clicked');
        const value = e.target.parentNode.previousSibling.value;
        if (value) {
            const id = createId();
            const newTodo = { id: id, completed: false, content: value };
            insertTodoItem(newTodo);
            e.target.parentNode.previousSibling.value = '';
        }
    }

    const saveTodo = (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value;
            if (value) {
                const id = createId();
                const newTodo = { id: id, completed: false, content: value };
                insertTodoItem(newTodo);
                e.target.value = '';
            }
        }
    }


    return (
        <div className="todo-entry placeholder">
            <input type="text" placeholder="Add To-Do..." onKeyPress={saveTodo} />
            <FontAwesomeIcon icon={faPlus} color="#11FFBD" onClick={insertTodo} />
        </div>
    )
}

export default TodoInsert;