import React, { useState } from 'react';
import products from './Products.json';
import SearchBar from "react-js-search";


export default function ProductsSearch() {
  let [productArr,setFilteredProducts]=useState(products);
  let onSearchClick =()=>{

  }

  return<div className='container'>
    <div className='text-center'>
    <SearchBar
        onSearchTextChange={(term, filteredData) => {
          console.log(term, filteredData);
          setFilteredProducts([...filteredData]);
        }}
        onSearchButtonClick={onSearchClick}
        placeHolderText={"Search here..."}
        data={productArr}
      />
 
    </div>
    <div className='row'>
    {productArr.map((prod,ind)=>{
        return<div className='col-sm-3' key={ind}>
          <div class="card" >
  <img style={{height:'200px'}} src={prod.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class='card-title'>{prod.category}</h5>
    <p class="card-text">{prod.title}</p>
    <p class="card-text">Price:{prod.price}</p>
    <p class="card-text">Rating:{prod.rating.rate}</p>
    <a href='no' className='btn btn-primary'>Buy Now</a>
  </div>
</div>
        </div>
    })}
    </div>

  </div>
}
