import React from 'react';
import products from './Products.json';
import ReactPaginate from 'react-paginate';

export default function ProductsPagination() {
  return (
    <div className='container'>
        <div className='row'>
    {products.map((prod,ind)=>{
        return<div className='col-sm-3' key={ind}>
          <div class="card" >
  <img style={{height:'200px'}} src={prod.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class='card-title'>{prod.category}</h5>
    <p class="card-text">{prod.title}</p>
    <p class="card-text">Rating:{prod.rating.rate}</p>
    <p class="card-text">Price:{prod.price}</p>
    <p class="card-text">{prod.description}</p>
    
    <a href='no' className='btn btn-primary'>Buy Now</a>
  </div>
</div>
        </div>
    })}
    </div>

    </div>
  )
}
