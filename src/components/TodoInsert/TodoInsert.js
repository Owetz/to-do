import React from 'react';
import './TodoInsert.css';


const TodoInsert = (props) => {
    console.log(props);
    const {list, setActiveList} = props;

    const insertTodo = (e) => {
        const value = e.target.previousSibling.value;
        if(value) {
            const todo = {completed:false, content:e.target.previousSibling.value};
            const newList = list.todos.push(todo);
            setActiveList({...list, todo:newList});
            e.target.previousSibling.value = '';
        }
    }
    console.log({...list});
    const saveTodo = (e) => {
        if(e.key === 'Enter') {
            if(e.target.value) {
                const todo = {completed:false, content:e.target.value};
                const newList = list.todos.push(todo);
                setActiveList({...list, todo:newList});
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