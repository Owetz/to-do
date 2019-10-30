import React from 'react';
import './TodoCard.css';
import TodoEntry from '../TodoEntry/TodoEntry';
import TodoInsert from '../TodoInsert/TodoInsert';

const TodoCard = (props) => {
    const { todoList, updateTodoItem, insertTodoItem, deleteTodoItem, createId } = props;
    return (
        <>
            <div className="card-body">
                {todoList.map(todo => {
                    return <TodoEntry
                        key={todo.id}
                        id={todo.id}
                        todo={todo}
                        updateTodoItem={updateTodoItem}
                        deleteTodoItem={deleteTodoItem} />
                })}
            </div>

            <TodoInsert insertTodoItem={insertTodoItem} createId={createId} />
        </>
    )
}

export default TodoCard;