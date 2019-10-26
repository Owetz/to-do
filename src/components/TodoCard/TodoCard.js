import React, {useState}from 'react';
import './TodoCard.css';
import TodoList from '../TodoList/TodoList';
import TodoInsert from '../TodoInsert/TodoInsert';

const TodoCard = (props) => {
    const [activeList, setActiveList] = useState(props.todos[0]);
    const [todoList, addTodo] = useState(activeList.todos);
    console.log(todoList);
    
    return (
        <div className="card">
            <div className="card-header">
                <h1>To-Do List:</h1>
            </div>
            <div className="card-body">
                <TodoList todos={todoList}/>


                <TodoInsert todos={todoList} addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default TodoCard;