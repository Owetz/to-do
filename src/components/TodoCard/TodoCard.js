import React, { useState } from 'react';
import './TodoCard.css';
import TodoEntry from '../TodoEntry/TodoEntry';
import TodoInsert from '../TodoInsert/TodoInsert';

const TodoCard = (props) => {
    console.log(props.list);
    const {list, setActiveList} = props;
    const {todos} = list;
    const todoArr = todos.map(todo => {
        return <TodoEntry key={todos.indexOf(todo)} todo={todo}/>
    })

    return (
        <div className="card-body">
            {todoArr}


            <TodoInsert list={list} setActiveList={setActiveList}/>
        </div>
    )
}

export default TodoCard;