import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AboutUs() {
   const navigate= useNavigate();
    const doSomethingAndGoToHome=()=>{
  console.log('Do something........')
  navigate('/home');
    }
  return (<>

  <h1>this is aboutus component</h1>
  
  <a href='home' className='m-4'>Go to homepage</a>{/* --not recommended  */}

  <Link to="/home">go to Product</Link>
  <button onClick={doSomethingAndGoToHome}>DoSomething&GoToHome</button>
  <hr></hr>
  <button onClick={()=>navigate(-2)} className='m-2'>previous</button>
  <button onClick={()=>navigate(1)}>next</button>
  </>
    
    
  )
}
