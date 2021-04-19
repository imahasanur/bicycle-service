import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import StripeCard from '../StripeCard/StripeCard';
import UserActions from '../UserActions/UserActions';
const stripePromise = loadStripe("pk_test_51IhI5zBZhWQhSLfZfr3c5CWf7nUS49BK7hGQlZ56KfAqpQPTbw7lo2jgd1GZqcQZzTqtIgmRv9t48EMLbchIdVCQ00uWUD26I1");

const Booking = ({bookingService}) => {

  const [isPaid, setIsPaid] = useState(false);
  const {_id, name, description, price, img, status} = bookingService;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    const newBookings = data;
    newBookings.id = _id;
    newBookings.service = name;
    newBookings.price = price
    newBookings.status = status;
    newBookings.description = description;
    newBookings.img = img;
    
    fetch('https://immense-wildwood-36980.herokuapp.com/addABooking',{
      method:'POST',
      headers:{ 'Content-Type':'application/json'},
      body:JSON.stringify(newBookings)
    })
    .then(res => res.json())
    .then(result =>{
      if(result){
        setIsPaid(true);
      }

    })
    
  };


  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between p-2">
        <p >booking</p>
        <p >{loggedInUser?.name}</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row p-2">
        <div className="col-8 col-sm-5 col-md-7 ">
          <input type="text" defaultValue={loggedInUser.name} {...register("name")} placeholder="User Name" required />
        </div>
      </div>
      <div className="row p-2">
        <div className="col-8 col-sm-5 col-md-7">
          <input type="email" defaultValue={loggedInUser.email} {...register("email")} placeholder="user email" required />
        </div>
      </div>
      <div className="row p-2">
        <div className="col-8 col-sm-5 col-md-7">
          <input type="text" defaultValue={bookingService?.name} {...register("service")} placeholder="Picked Service" required/>
        </div>
      </div>

      <div className="p-2">
        <p><small>pay with</small></p>
        <input className="" type="radio" defaultValue="stripe" {...register("payWith")}  id="flexRadioDefault1" required />
        <label className="form-check-label" for="flexRadioDefault1">
          stripe
        </label>
      </div>
      <div className="row p-2">
        <div className="col-8 col-sm-5 col-md-7">
          <Elements stripe={stripePromise}>
          <StripeCard></StripeCard>
          </Elements>
        </div>
      </div>
      <div className="p-2">
        <input type="submit" value="Pay" className="btn btn-outline-success " />
      </div>
    </form>
    {isPaid && <p>Successfully Placed Booking with ${price}</p>}

    </div>
    
  );
};

export default Booking;