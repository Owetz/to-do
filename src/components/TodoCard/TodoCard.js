import React from 'react';
import './TodoCard.css';
import TodoList from '../TodoList/TodoList';
import TodoInsert from '../TodoInsert/TodoInsert';

const TodoCard = (props) => {
    const lists = props.todos.map(e => {
        return <TodoList key={e.name} name={e.name} todos={e.todos}/>
    })
    
    return (
        <div className="card">
            <div className="card-header">
                <h1>To-Do Lists</h1>
            </div>
            <div className="card-body">
                {lists}


                <TodoInsert />
            </div>
        </div>
    )
}

export default TodoCard;