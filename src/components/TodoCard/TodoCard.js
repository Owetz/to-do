import React, {useState}from 'react';
import './TodoCard.css';
import TodoList from '../TodoList/TodoList';
import TodoInsert from '../TodoInsert/TodoInsert';

const TodoCard = (props) => {
    //const [lists] = useState(props.todos);
    const [active, setActive] = useState(props.todos[0]);
    //console.log(active);
    const [list, addTodo] = useState(active);
    //console.log(list);
     
    return (
        <div className="card">
            <div className="card-header">
                <h1>To-Do List:</h1>
            </div>
            <div className="card-body">
                <TodoList todos={active.todos}/>


                <TodoInsert list={active.todos} addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default TodoCard;