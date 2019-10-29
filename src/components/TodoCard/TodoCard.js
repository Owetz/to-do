import React from 'react';
import './TodoCard.css';
import TodoEntry from '../TodoEntry/TodoEntry';
import TodoInsert from '../TodoInsert/TodoInsert';

const TodoCard = (props) => {
    //console.log(props);
    const {todoLists, setTodoLists, updateTodoCompleted} = props;
    // const {list, setActiveList} = props;
    // const {todos} = list;
    
    const todoArr = todoLists.map(todo => {
        
        return <TodoEntry key={todoLists.indexOf(todo)} todo={todo} updateTodoCompleted={updateTodoCompleted}/>
    })

    return (
        <div className="card-body">
            {todoArr}


            <TodoInsert setTodoLists={setTodoLists}/>
        </div>
    )
}

export default TodoCard;