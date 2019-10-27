import React from 'react';
import './TodoListEntry.css';


const TodoListEntry = (props) => {
    //console.log(props);
    const {list, setActiveList} = props;
    const {listName, todos} = props.list
    const completedTodos = todos.map(todo => {
        return todo.completed ? todo:null;
    })

    return (
        <div className="todoListEntry" onClick={() => setActiveList(list)}>
            <p>{listName ? listName:'Name of list not set'}</p><p>Number of Todos: {todos.length}</p><p>Number of Completed Todos: {completedTodos.length}</p>
        </div>
    )
}


export default TodoListEntry;