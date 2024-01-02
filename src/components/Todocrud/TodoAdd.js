import React from 'react'

export default function TodoAdd({addToDo}) {
  return <>
  <form>
  <p>Id: <input type='text'/></p>
  <p>text: <input type='text'/></p>
     <button type='button' onClick={()=>{addToDo({id:4,text:'todo-4'})}}>Add</button>
 
  </form>
  </>
}