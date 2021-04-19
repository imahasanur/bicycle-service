import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingDetail from '../BookingDetail/BookingDetail';

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookingList, setBookingList] = useState([])
  useEffect(()=>{
    fetch(`https://immense-wildwood-36980.herokuapp.com/showBookings?email=${loggedInUser.email}`)
    .then(res => res.json())
    .then(data => setBookingList(data))
  },[])
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between p-2">
        <p>booking list</p>
        <p>{loggedInUser?.name}</p>
      </div>
      <div>
        {<BookingDetail bookingList={bookingList}> </BookingDetail> }
      </div>
    </div>
  );
};

export default BookingList;