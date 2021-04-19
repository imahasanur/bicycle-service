import React, { useEffect } from 'react';
import './UserActions.css';
import logo from "../../../images/logo.png";
import { useState } from 'react';
import Booking from '../Booking/Booking';
import BookingList from '../BookingList/BookingList';
import UserReview from '../UserReview/UserReview';
import { useParams } from 'react-router';


const UserActions = () => {
  const [selectedOption, setSelectedOption] = useState("booking")
  const [bookingService, setBookingService] = useState({});
  let {bookingId} = useParams();

  useEffect(()=>{
    fetch(`https://immense-wildwood-36980.herokuapp.com/getAService/${bookingId}`)
    .then(res => res.json())
    .then(data => setBookingService(data))
  },[bookingId])


  return (
    <div className="user-container">

      <div className="sidebar text-white">
        <div>
          <img src={logo} alt="logo" style={{height:'50px', width:'70px', borderRadius:'50%'}} />
          <p>bicycle-service</p>
        </div>
        <ul>
            <li onClick={()=> setSelectedOption("booking")}>Booking</li>
            <li onClick={()=> setSelectedOption("booking-list")}>Booking List</li>
            <li onClick={()=> setSelectedOption("review")}>Review</li>
        </ul>
      </div>
      <div className="user-action-container">
        {selectedOption === "booking" && <Booking bookingService={bookingService}></Booking> }
        {selectedOption === "booking-list" && <BookingList></BookingList> }
        {selectedOption === "review" && <UserReview></UserReview> }

      </div> 
    </div>
  );
};

export default UserActions;