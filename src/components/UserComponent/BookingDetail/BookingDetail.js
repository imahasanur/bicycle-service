import React from 'react';

const BookingDetail = ({bookingList}) => {
  return (
    <div>
      <table class="table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Service </th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">PayWith</th>
            <th scope="col">Status</th>
            <th scope="col">Service View</th>
            </tr>
        </thead>
        <tbody> 
        {
          bookingList.map(booking => {
            return (
            <tr>
                <td>{booking.name}</td>
                <td>{booking.service}</td>
                <td>{booking.description}</td>
                <td>{booking.price}</td>
                <td>{booking.payWith}</td>
                <td>{booking.status}</td>
                <td>{<img src={booking.img} alt=".." style={{height:"100px", width:"100px"}} />}</td>
            </tr>
            )
          })
        }
    
        </tbody>
      </table>
            
    </div>
  );
};

export default BookingDetail;