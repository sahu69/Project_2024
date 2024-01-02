import React from 'react';
import productArr from "./Products.json";
import ProductCard from './ProductCard';


export default function product() {
  return (
    <div className='container'>
  <div className='row'> 
  {
    productArr.map((productObj,prd)=>{
      return <>
      <div className='col-sm-3' key={prd}>
        <ProductCard product={productObj}/>
      </div>
      </>
     
    })
  }

  </div>
    </div>
  )
}
