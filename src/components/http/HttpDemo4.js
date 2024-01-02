import React, { useEffect } from 'react';
import client from '../../utils/Client';
import axios from 'axios';

export default function HttpDemo4() {
/* useEffect(()=>{
    async function fetchData() {
    const promise1=client.get('users');
    const promise2=client.get('todos');
    const promise3 =new Promise ((resolve,reject)=>{
  setTimeout(()=> resolve("response-3"),5000);
    })
   try{
    let [res1,res2,res3]= await axios.all([promise1,promise2,promise3]);
    console.log(res1,res2,res3);
   } catch(err){
    console.log(err);
   }

    }
    fetchData();
  
}) */
useEffect(() => {
    async function fetchData() {
      const promise1 = client.get("users");
      const promise2 = client.get("todos");
      try {
        let [res1, res2] = await axios.all([promise1, promise2]);
        console.log(res1, res2);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  });

 
    return<div>HttpDemo4</div>
  
}
