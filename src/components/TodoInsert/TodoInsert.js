import React from 'react';
import './TodoInsert.css';


const TodoInsert = (props) => {
    const {addTodo, todos} = props;
    //console.log(todos); //array
    const insertTodo = (e) => {
        let value = e.target.previousSibling.value;
        if(value) {
            const todo = {completed:false, content:value};
            const updatedList = todos;
            updatedList.push(todo);
            addTodo(updatedList);
            e.target.previousSibling.value = '';
        }
    }
    const saveTodo = (e) => {
        let value = e.target.value;
        if(e.key === 'Enter') {
            if(value) {
                const todo = {completed:false, content:value};
                const updatedList = todos;
                updatedList.push(todo);
                addTodo(updatedList);
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