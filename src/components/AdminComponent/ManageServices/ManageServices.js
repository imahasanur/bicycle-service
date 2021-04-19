import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const ManageServices = () => {
    const [serviceData, setServiceData] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDeleted, setIsDeleted] = useState(false);
    
    useEffect(()=>{
        fetch('https://immense-wildwood-36980.herokuapp.com/getServices')
        .then(res => res.json())
        .then(data => setServiceData(data))
      },[isDeleted])

      const handleDelete = (id) =>{
          id = id._id;
          fetch(`https://immense-wildwood-36980.herokuapp.com/deleteService/${id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(result => {
            if(result){
                setIsDeleted(!isDeleted);
            }
          })

      }
    return (
        <div>
          <div className="d-flex justify-content-between p-2">
            <p>Manage service</p>
            <p>{loggedInUser?.name}</p>
          </div>
          <div>
            <table class="table">
        <thead>
            <tr>
              <th scope="col">Service Name</th>
              <th scope="col">Added By </th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">View</th>
              <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
    
        {
          serviceData.map(service => {
            const {name, email, price, description, img, _id} = service;
            return (
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{price}</td>
                <td>{description}</td>
                <td><img src={img} alt="" style={{height:'80px', width:'80px'}} /></td>
                <td onClick={()=>handleDelete({_id})}>Delete</td>
              </tr>
              )
              })
            }
  
          </tbody>
          </table>
        </div>
            
        </div>
    );
};

export default ManageServices;