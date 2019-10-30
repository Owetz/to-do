import React, { useState, useEffect } from 'react';
import './Todo.css';
import CardHeader from './components/CardHeader/CardHeader';
import TodoCard from './components/TodoCard/TodoCard';


const localLists = JSON.parse(localStorage.getItem('TodoLists')) || [];

const Todo = () => {
  const [todoList, setTodoList] = useState(localLists);

  useEffect(() => {
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

  const createId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  const deleteTodoItem = (e) => {
    const Id = e.target.parentNode.parentNode.id;
    const updatedArray = [...todoList];
    updatedArray.splice(Id, 1);
    setTodoList(prevState => updatedArray);
  }

  return (
    <div className="card">
      <CardHeader />

      <TodoCard
        todoList={todoList}
        updateTodoItem={updateTodoItem}
        insertTodoItem={insertTodoItem}
        deleteTodoItem={deleteTodoItem}
        createId={createId} />

    </div>
  )
}

export default Todo;
