import React, { useState, useEffect } from 'react';
import './Todo.css';
import CardHeader from './components/CardHeader/CardHeader';
import TodoCard from './components/TodoCard/TodoCard';


const localLists = JSON.parse(localStorage.getItem('TodoLists')) || [];

const Todo = () => {
  const [todoList, setTodoList] = useState(localLists);

  useEffect(() => {
    console.log(todoList);
    localStorage.setItem('TodoLists', JSON.stringify(todoList));
  }, [todoList]);

  const updateTodoItem = (id, todoItem) => {
    const updatedTodoList = todoList.map((item, index) => {
      return index === id ? todoItem : item
    })
    setTodoList(updatedTodoList);
  }

  const insertTodoItem = (todoItem) => {
    setTodoList(prevState => [...prevState, todoItem])
  }

  const deleteTodoItem = (e) => {
    const Id = e.target.parentNode.parentNode.id;
    const updatedArray = [...todoList];
    updatedArray.splice(Id,1);
    console.log(todoList);
    console.log(updatedArray);
    setTodoList(prevState => updatedArray);
  }

  return (
    <div className="card">
      <CardHeader />

      <TodoCard todoList={todoList} updateTodoItem={updateTodoItem} insertTodoItem={insertTodoItem} deleteTodoItem={deleteTodoItem}/>
    </div>
  )
}

export default Todo;
