import React from 'react';
import './Todo.css';
import TodoCard from './components/TodoCard/TodoCard';

class Todo extends React.Component {
  constructor(){
    super()
    this.state = {
      todoLists: [
        {name:'Test1', todos:[
          {completed:false, content:'Testcontent1'},
          {completed:true, content:'Testcontent2'}
        ]},
        {name:'Test2', todos:[
          {completed:false, content:'TestContent3'}
        ]}
      ]
    }
  }
  render() {
    return (
      <TodoCard todos={this.state.todoLists} />
    )
  }
}

export default Todo;
