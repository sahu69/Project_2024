import React from 'react'

export default function UserCard(props) {
  return (
    <div className='card text-center'>
        <img src='https://www.shutterstock.com/shutterstock/photos/424477513/display_1500/stock-vector-avatar-icon-424477513.jpg' alt='no'/>
        <div className='card-body'>
          <h5 className='card-title'>{props.users.username}</h5>
          <p className='card-text'>Name:{ props.users.name}</p>
          <p className='card-text'>Name:{props.users.email}</p>
          <p className='card-text'>Name:{props.users.phone}</p>
          <p className='card-text'>city:{props.users.address.city}</p>
         
        </div>
        </div>
  )
}
