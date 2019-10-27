import React from 'react';
import './TodoList.css';
import TodoListEntry from '../TodoListEntry/TodoListEntry';

const TodoList = (props) => {
    console.log(props);
    const {todoLists, setActiveList} = props;
    const lists = todoLists.map(list => {
        return <TodoListEntry 
        key={list.id} 
        list={list} 
        setActiveList={setActiveList} />;
    })
    return (
        <div className="card-body">
            {lists}
        </div>
    )
}

export default TodoList;