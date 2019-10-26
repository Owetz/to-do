import React from 'react';
import './Todo.css';
import TodoCard from './components/TodoCard/TodoCard';

class Todo extends React.Component {
  constructor(){
    super()
    this.state = {
      todoLists: [
        {listName: 'Test1',todos: [
          {completed:false, content: 'Testcontent1'},
          {completed:true,content: 'Testcontent2'}]},
        {listName:'Test2',todos: [
          {completed:true,content: 'Testcontent3'}]
        }
      ]
    }
  }
  
  render() {
    const {todoLists} = this.state;
    return (
      <TodoCard todos={todoLists} />
    )
  }
}

export default Todo;
