import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ProductDetail() {
    const[searchParams]=useSearchParams();
   useEffect(()=>{
    const currentParams=Object.fromEntries([...searchParams]);
    console.log(currentParams);
   },[searchParams])
  return (
    <div>ProductDetail</div>
  )
}
