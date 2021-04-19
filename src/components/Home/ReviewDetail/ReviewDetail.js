import React from 'react';
import './ReviewDetail.css';

const ReviewDetail = ({review}) => {
  const {img, name, designation, comment} = review;
  return (
    <div className="col-7 col-sm-5  col-md-3  p-3 " >
      <div className="card bg-light">
        <img src={img} className="card-img-top " alt="..." style={{height:'200px'}} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle">{designation}</h6>
          <p className="card-text">{comment}</p>
        </div>
      </div>
            
    </div>
  );
};

export default ReviewDetail;