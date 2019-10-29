import React, { useState, useEffect } from 'react';
import './Todo.css';
import CardHeader from './components/CardHeader/CardHeader';
import TodoCard from './components/TodoCard/TodoCard';

const Todo = () => {
  const localLists = JSON.parse(localStorage.getItem('TodoLists')) || [];
  const [todoLists, setTodoLists] = useState(localLists);


  useEffect(() => {
    console.log('Todo.js');
    localStorage.setItem('TodoLists', JSON.stringify(todoLists));
  },[todoLists]);
  

  const updateEntry = (oldTodo, newTodo) => {
    const index = todoLists.indexOf(oldTodo);
    todoLists.splice(index,1, newTodo);
    setTodoLists();
  }

  const updateTodoCompleted = () => {
    console.log('Hello');
  }

  return (
    <div className="card">
      <CardHeader />
      
      <TodoCard todoLists={todoLists} updateTodoCompleted={updateTodoCompleted} setTodoLists={setTodoLists}/>
    </div>
  )
}

export default Todo;
