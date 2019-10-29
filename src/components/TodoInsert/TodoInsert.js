import React from 'react';
import './TodoInsert.css';


const TodoInsert = (props) => {
    const {setTodoLists} = props;

    const insertTodo = (e) => {
        const value = e.target.previousSibling.value;
        if (value) {
            const newTodo = {completed: false, content:value};
            setTodoLists(prevState => {
                return [...prevState, newTodo]
            })
            e.target.previousSibling.value = '';
        }
    }

    const saveTodo = (e) => {
        if(e.key === 'Enter') {
            const value = e.target.value;
            if (value) {
                const newTodo = {completed: false, content:value};
                setTodoLists(prevState => {
                    return [...prevState, newTodo]
                })
                e.target.value = '';
            }
        }
    }

    return (
        <div className="todo-entry placeholder">
            <input type="text" placeholder="Add To-Do..." onKeyPress={saveTodo} />
            <i className="fas fa-plus" onClick={insertTodo}></i>
        </div>
    )
}

export default TodoInsert;