import React from 'react';
import userArr from './user';
import UserCard from './UserCard';
export default function UserList() {
  return (
    <>
    <div className='container'>
        <div className='row'>
      {
       userArr.map((userObj,ind)=>{
        return <div className='col-sm-3' key={ind}>
      <UserCard users={userObj}/>
        </div>
       }) 
      }
        </div>

    </div>
    </>
  )
}
