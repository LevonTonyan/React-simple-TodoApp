
import './App.css';
import {useState} from "react";
import React from 'react';
import TaskList from './taskItem';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';





function App() {

  let [todos, setState] = useState([
    {id:1, title:"Clean", completed: false},
    {id:2, title:"Learn JS", completed: false},
    {id:3, title:"Learn Node", completed: false},
    {id:4, title:"Learn Node", completed: true},
  ]);
  
 
  let checkMark = () => {
    let notCompleted = todos.filter(todo => !todo.completed);
    setState(notCompleted);
  };

  const onAdd = (text) => {
    let newTask = {id: Math.random(), title:text, completed:false};
    setState([
      ...todos,
      newTask
    ]);
  };
  let onChange = (newTodo) => {
   setState(todos.map((todo) => {
      if(todo.id === newTodo.id){
        return newTodo;
      }
      return todo
   }))
  };

  let onDelete = (todo) => {
    setState(todos.filter(el => el.id !== todo.id));
  
  };


    return (
    <div className='App'>
      <div className='input_block'>
        <TodoForm onAdd={onAdd}/>
      </div>
      <div className='list_block'> 
       
       <TaskList todos={todos}
                  onChange = {onChange}
                  onDelete = {onDelete}
       />
       
       
      </div>
        <div className='task_count_bar'>

          <TodoFooter todos={todos} checkMark={checkMark}/>
        </div>
    </div>
  );
  
}

export default App;
