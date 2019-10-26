import React from 'react';
import './TodoInsert.css';


const TodoInsert = (props) => {
    //console.log(props);
    const {setList, list} = props;
    const insertTodo = (e) => {
        const value = e.target.previousSibling.value;
        if(value) {
            const todo = {completed:false, content:e.target.previousSibling.value};
            const newList = list.push(todo);
            setList(newList);
            e.target.previousSibling.value = '';
        }
    }
    const saveTodo = (e) => {
        if(e.key === 'Enter') {
            if(e.target.value) {
                const todo = {completed:false, content:e.target.value};
                const newList = list.push(todo);
                setList(newList);
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