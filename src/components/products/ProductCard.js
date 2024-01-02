import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (
    <div className='card text-center'>
        <img src={props.product.image} class="card-img-top"  alt="error" width='180' height='120' />
        <div className='card-body'>
          <h5 className='card-title'>{props.product.id}</h5>
          <p className='card-text'>Title:{ props.product.title}</p>
          <p className='card-text'>price:{props.product.price}</p>
          {/* <p className='card-text'>description:{props.product.description}</p> */}
          <p className='card-text'>category:{props.product.category}</p>
          <p className='card-text'>rating:{props.product.rating.rate}</p>
          <p className='card-text'>count:{props.product.rating.count}</p>
          <button className='btn btn-dark'>
            <Link to={`/productdetails/${props.product.id}`}>View Details</Link>
          </button>
         
        </div>

    </div>
  )
}
