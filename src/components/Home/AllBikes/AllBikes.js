import React from 'react';
import bike1 from "../../../images/bike1.jpg";
import bike2 from "../../../images/bike2.jpg";
import bike3 from "../../../images/bike4.jpg";
import bike4 from "../../../images/bike5.jpg";

const AllBikes = () => {
  return (
    <div  className="m-2 " style={{background:'tomato', color:'white'}}>
      <h2 className="text-center p-5">Our Bike Collections</h2>
      <div className="d-flex justify-content-center">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={bike2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={bike1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={bike3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={bike4} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
      </div>
        
    </div>
  );
};

export default AllBikes;