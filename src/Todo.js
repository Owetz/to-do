import React, {useState} from 'react';
import './Todo.css';
import TodoCard from './components/TodoCard/TodoCard';

const Todo = (props) => {
  const [todoLists, setTodoLists] = useState(
    [
      {
        listName: 'Test1', todos: [
          { completed: false, content: 'Testcontent1' },
          { completed: true, content: 'Testcontent2' }]
      },
      {
        listName: 'Test2', todos: [
          { completed: true, content: 'Testcontent3' }]
      }
    ]
  );

  
  return (
    <TodoCard todos={todoLists} />
  )
}

export default Todo;
