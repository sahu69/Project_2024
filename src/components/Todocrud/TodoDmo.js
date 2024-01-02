import React, { useState } from 'react';
import Todolist from './Todolist';
import TodoAdd from './TodoAdd';


let todoArr=[
    {id :1,text:"todo-1", completed:false},
    {id :2,text:"todo-2", completed:true},
    {id :3,text:"todo-3", completed:false}

];

export default function TodoDmo() {
    const[todos,setTodos]= useState(todoArr);

const deleteToDo=(id)=>{
   let remainingToDos=todos.filter(todo=>todo.id!==id);
  setTodos([...remainingToDos]);
}

const toggleToDo=(id)=>{
    let modifiedArr=todos.map((todo)=>{
        if(todo.id==id){
            todo.completed=!todo.completed;
        }
        return todo;
    });
    setTodos([...modifiedArr]);

 }
 const addToDo=(todoObj)=>{
   setTodos([...todos,todoObj])
 }

  return<>
  
  <h1 className='text-center'>ToDO crud Example</h1>
  <div className='row'>
    <div className='col-sm-8'>
   <Todolist todos={todos} deleteToDo={deleteToDo} toggleToDo={toggleToDo}/>
    </div>
    <div className='col-sm-4'>
   <TodoAdd  addToDo={addToDo}/>
    </div>

  </div>
  </>
}
