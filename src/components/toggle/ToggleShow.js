import React, { useState } from 'react'

export default function ToggleShow() {
    const[show,toggleShow] =useState(true);
  return (
    <div className='text-center'>
        <button 
        onClick={()=> toggleShow (!show)}>
            {show ? "Hide" : "Show"}
        </button>
        {show && <h2>Hello world</h2>}
    </div>
  )
}
