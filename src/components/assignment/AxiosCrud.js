import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from './Form';

export default function AxiosCrud() {
    const[columns,setColumns]=useState([]);
    const[records,setRecords]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/data')
        .then(res=>{
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    },[])
  return (<>
  <h1 className='text-center' style={{marginBottom:"30px"}}>ToDO CRUD Example</h1>


  <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
          <table className='table  table-bordered table-striped table-hover'>
       <thead>
        <tr>
         {columns.map((c,i)=>(
          <th key={i}>{c}</th>
         ))}
         <th className='text-center'>Action</th>
         </tr>
       </thead>
       <tbody>
        {
            records.map((d,i)=>(
          <tr key={i}>
        <td> {d.Id} </td>
        <td> {d.Name} </td>
        <td> {d.email} </td>
        <td className='text-center'><button className='btn btn-primary m-1'>View</button>
        <button className='btn btn-success m-1'>Edit</button>
        <button className='btn btn-danger '>Delete</button></td>
          </tr>
            ))
        }
       </tbody>

        </table>
          </div>
          <div className='col-sm-4 '> 
           <Form/>
          </div>

        </div>
        </div>

   
    
    </>
  )
}
