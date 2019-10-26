import React from 'react';
import './TodoList.css';
import TodoEntry from '../TodoEntry/TodoEntry';

const TodoList = (props) => {
    const {setList, todos} = props;
    const {listName} = todos;
    const todoElements = todos.todos.map((e, i) => {
        const {content, completed} = e;
        return <TodoEntry key={listName+'-'+i} completed={completed} content={content} setList={setList}/>;
    });
    return (
        <div className="todolist">
            {todoElements}
        </div>
    )
}

export default TodoList;