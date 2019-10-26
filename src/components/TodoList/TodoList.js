import React from 'react';
import './TodoList.css';
import TodoEntry from '../TodoEntry/TodoEntry';

const TodoList = (props) => {
    console.log(props.todos);
    const todos = props.todos.map((e, i) => {
        const {content, completed} = e;
        return <TodoEntry key={i} completed={completed} content={content} />;
    });
    return (
        <div className="todolist">
            {todos}
        </div>
    )
}

export default TodoList;