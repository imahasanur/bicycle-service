import React, { useEffect, useState } from 'react';
import './Review.css';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
// import reviewsData from '../../../fakeData/reviews';



const Review = () => {
  const [reviewData, setReviewData] = useState([]);
  // to post all fakedata reviews to database
  // useEffect(()=>{
  //   fetch('https://immense-wildwood-36980.herokuapp.com/addReviews',{
  //     method:'POST',
  //     headers:{ 'Content-Type':'application/json'},
  //     body:JSON.stringify(reviewsData)
  //   })
  //   .then(res => res.json())
  //   .then(result => console.log("result", result))
  // },[])

   // to load reviews data from database
   useEffect(()=>{
    fetch('https://immense-wildwood-36980.herokuapp.com/getReviews')
    .then(res => res.json())
    .then(data => setReviewData(data))
  },[])


  return (
    <div className="p-3" style={{background:'wheat'}}>
      <h2 className="text-center m-3" style={{color:'purple'}}>Testimonials</h2>  
      <div className="row container-fluid" >
        {
          reviewData.map(review => <ReviewDetail review={review}></ReviewDetail>)
        }
      </div>  
    </div>
  );
};

export default Review;