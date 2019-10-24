import React from 'react';
import './TodoList.css';
import TodoEntry from '../TodoEntry/TodoEntry';

const TodoList = (props) => {
    const todos = props.todos.map(e => {
        const {content, completed} = e;
        return <TodoEntry key={content} completed={completed} content={content} />;
    });
    return (
        <div className="todolist">
            {todos}
        </div>
    )
}

export default TodoList;