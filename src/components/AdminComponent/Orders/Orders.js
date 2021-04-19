import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderList, setOrderList ] = useState([]);
    const [updateOrder, setUpdateOrder] = useState(false);
    useEffect(()=>{
      fetch(`https://immense-wildwood-36980.herokuapp.com/showAllOrders`)
      .then(res => res.json())
      .then(data => setOrderList(data))
    },[updateOrder])

    const handleClick = (status, id) =>{
        id = id._id;
        const newBooking = {id,status};
        console.log("new booking",newBooking)
        fetch(`https://immense-wildwood-36980.herokuapp.com/updateOrder/${id}`, {
            method: "PATCH",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newBooking)
        })
        .then( res => res.json())
        .then(data =>{
            setUpdateOrder(!updateOrder);
        })
    }

    return (
        <div className="container-fluid">
          <div className="d-flex justify-content-between p-2">
            <p >Order List</p>
            <p >{loggedInUser?.name}</p>
          </div>
          <div>
              {
                <OrderList orderList={orderList} handleClick={handleClick}></OrderList>
              }
          </div>
            
        </div>
    );
};

export default Orders;