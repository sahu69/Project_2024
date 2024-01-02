import React, { useEffect } from 'react'

export default function HttpDemo1() {

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
      response.json().then((data)=>{
        console.log(data);
      })
    })
})
//same thing is async and await


const fetchComments= async()=>{
   let response= await fetch("https://jsonplaceholder.typicode.com/comments");
   let data= await response.json();
   console.log(data);
}
useEffect(()=>{
    fetchComments();
})
  return  <div>HttpDemo1</div>
   
}
