import React, { useState, useEffect } from 'react';
import './Todo.css';
import TodoCard from './components/TodoCard/TodoCard';
import TodoList from './components/TodoList/TodoList';
import TodoInsert from './components/TodoInsert/TodoInsert';

const Todo = (props) => {
  const localLists = JSON.parse(localStorage.getItem('TodoLists')) || [];

  //State
  const [todoLists, setTodoLists] = useState(localLists);
  const [activeList, setActiveList] = useState();
  const [list, setList] = useState(activeList);
  

  //Methods
  const createNewList = () => {
    const newList = { id: todoLists.length+1, listName:'', todos:[]};
    setTodoLists([...todoLists, newList]);
    setActiveList(newList);
  };

  const updateListName = (e) => {
    if(e.key === 'Enter') {
      setActiveList(activeList.listName, activeList.listName = e.target.value);
    }
    //e.key === "Enter" ? 'Test':null;
    //setActiveList(activeList.listName, activeList.listName = e.target.value)
  }

  const findIndexOfList = (array) => {
    return todoLists.indexOf(array);
  }

  //Lifecycle
  useEffect((e) => {
    console.log('this happened');
    console.log(activeList);
    localStorage.setItem('TodoLists', JSON.stringify(todoLists));
  });
  
  

  return (
    <div className="card">
      <div className="card-header">
        { activeList ? (activeList.listName ? <h1>Todo List: {activeList.listName}</h1> :
        <h1>Todo List: <input type="text" placeholder="Enter list name: " onKeyDown={updateListName}/></h1>) : 
        <h1>Todo Lists</h1>} <button onClick={createNewList}>Test</button>
      </div>
      {todoLists ? (activeList ? null:<TodoList todoLists={todoLists} setActiveList={setActiveList}/>):null}
      {activeList ? <TodoCard list={activeList} findIndex={findIndexOfList} setActiveList={setActiveList}/>: null} 
    </div>
  )
}

export default Todo;
