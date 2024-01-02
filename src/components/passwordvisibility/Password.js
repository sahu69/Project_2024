import React, { useState } from 'react';
import {Button,Form, InputGroup,} from 'react-bootstrap';
import {FaEye,FaEyeSlash} from "react-icons/fa";

export default function Password() {
    const[showPassword,setsshowPassword] =useState(false)
  return (
    
   <div className='m-5'>
    <p>enter your password</p> 
   <input type={showPassword ? "text": "Password"}/>
         
            <Button 
            onClick={()=> setsshowPassword(!showPassword)}>
                {showPassword ? <FaEye></FaEye>:<FaEyeSlash/> }

            </Button>

          
       
   </div>
   
  )
}
