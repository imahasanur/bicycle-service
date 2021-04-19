import React from 'react';
import './News.css';
import latestOne from '../../../images/newsLatest1.jpg';
import latestTwo from '../../../images/newsLatest2.jpg';


const News = () => {
  return (
    <div className="mt-3 news-container" style={{background:'whitesmoke', color:'tomato'}}>

      <h2 className="text-center m-5" style={{color:'Orange'}}>Our Latest News</h2>   
      <div className="row container-fluid">
          <div className="col-md-6 col-sm-6 col-10">
            <img src={latestOne} alt="" style={{height:'300px', width:'100%'}}/>
          </div>
          <div className="col-md-6 col-sm-6 col-10">
            <h5>Cycling Through Hill</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis eaque illum aliquid adipisci a dicta atque qui quaerat necessitatibus in molestias omnis illo distinctio deserunt officiis, quam ullam perspiciatis.</p>
            <button className="beautiful-btn btn">Read More</button>
          </div>
      </div>
      <div className="row container-fluid mt-2">
          <div className="col-md-6 col-sm-6 col-10">
            <h5>Cycling at night using latest Head Light</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dicta quos sed voluptatum cumque ex animi maxime sapiente eos praesentium. Nihil veritatis ipsa iste voluptatum, odio praesentium velit animi numquam quae nisi architecto debitis beatae.</p>
            <button className="beautiful-btn btn">Read More</button>
          </div>
          <div className="col-md-6 col-sm-6 col-10 ">
            <img src={latestTwo} alt="" style={{height:'300px', width:'100%'}}/>
          </div>
      </div>   
    </div>
  );
};

export default News;