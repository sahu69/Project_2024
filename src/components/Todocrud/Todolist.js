import React from 'react'

export default function Todolist({todos,deleteToDo,toggleToDo}) {
  return <>
  {/* <table className='table table-bordered'>
  <thead>
    <tr>
        <th>Id</th>
        <th>Text</th>
        <th></th>
    </tr>
  </thead>
  </table> */}


  <ul>
    {todos.map((todo)=>{
  return(
  <li key={todo.id}>
    <span style={todo.completed ? 
    {'text-decoration':'line-through'}
    :{'text-decoration':'none'}}>
        {todo.text}</span>
  <button className='btn btn-primary m-1'onClick={()=>{
    toggleToDo(todo.id);
  }}>Toggle</button>
  <button className='btn btn-danger m-1' onClick={()=>{
    deleteToDo(todo.id)
  }}> Delete</button>
  </li>
  )
    })}
  </ul>
  </>
}
