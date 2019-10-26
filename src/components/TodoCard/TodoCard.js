import React, {useState} from 'react';
import './TodoCard.css';
import TodoList from '../TodoList/TodoList';
import TodoInsert from '../TodoInsert/TodoInsert';

const TodoCard = (props) => {
    const [activeList, setActiveList] = useState(props.todos[0]);
    const [list, setList] = useState(activeList.todos);

    function listButtons(todos) {
        return todos.map((e, i) => {
            return <button key={i} onClick={() => setActiveList(todos[i])}>{e.listName}</button>
        })
    }
    return (
        <div className="card">
            <div className="card-header">
                <h1>To-Do List: {activeList.listName}</h1>
                {listButtons(props.todos)}
            </div>
            <div className="card-body">
                <TodoList todos={activeList} setList={setList}/>


                <TodoInsert list={activeList.todos} setList={setList}/>
            </div>
        </div>
    )
}

export default TodoCard;