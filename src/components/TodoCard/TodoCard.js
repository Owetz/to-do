import React from 'react';
import './TodoCard.css';
import TodoEntry from '../TodoEntry/TodoEntry';
import TodoInsert from '../TodoInsert/TodoInsert';

const TodoCard = (props) => {
    const { todoList, updateTodoItem, insertTodoItem, deleteTodoItem } = props;

    return (
        <div className="card-body">
            {todoList.map(todo => {
                return <TodoEntry 
                key={todoList.indexOf(todo)} 
                id={todoList.indexOf(todo)} 
                todo={todo} 
                updateTodoItem={updateTodoItem}
                deleteTodoItem={deleteTodoItem} />
            })}


            <TodoInsert insertTodoItem={insertTodoItem} />
        </div>
    )
}

export default TodoCard;