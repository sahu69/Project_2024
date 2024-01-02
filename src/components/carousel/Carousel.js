import React from 'react'
import "./carousel.css";
import img from "./pics/sunset.jpg"

export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIyR0dDjPJC_wu73ZCkyZdurr_EYBGOVEUNbj_ajj4ngHFdiVPg-OkViv-Tu4tMWtR8I&usqp=CAU" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item"> 
      <img src={img} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
