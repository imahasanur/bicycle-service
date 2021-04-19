import React from 'react';

const OrderList = ({orderList, handleClick}) => {

    return (
      <div >
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Email </th>
            <th scope="col">Service</th>
            <th scope="col">Price</th>
            <th scope="col">PayWith</th>
            <th scope="col">Status</th>
            <th scope="col"> Update Status</th>
            </tr>
        </thead>
        <tbody>
    
        {
            orderList.map(order => {
              const {name, email, service, payWith, price,status, _id} = order;
              return (
                <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{service}</td>
                <td>{price}</td>
                <td>{payWith}</td>
                <td>{status}</td>
                <td>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Update Status
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li onClick={()=>handleClick("pending", {_id})} class="dropdown-item">pending</li>
                            <li onClick={()=>handleClick("onGoing", {_id})} class="dropdown-item">OnGoing</li>
                            <li onClick={()=>handleClick("done",{_id})} class="dropdown-item">done</li>     
                        </ul>
                    </div>
                </td>
                </tr>
                  )
                })
              }
    
        </tbody>
        </table>
      </div>
    );
};

export default OrderList;