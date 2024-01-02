import React from 'react'

export default function Carousel1() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/transparent-vivid-autumn-leaves_23-2148239689.jpg?w=740&t=st=1700565407~exp=1700566007~hmac=08382362db8e977fde70013e01192c785d78f53493321560c105babe929715a3" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=740&t=st=1700565297~exp=1700565897~hmac=b28c2f8c6458750a93dba40197b367b6c5027fd1a99113e7413174e69214eb77" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
