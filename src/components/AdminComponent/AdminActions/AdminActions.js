import React, { useContext, useEffect, useState } from 'react';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import Orders from '../Orders/Orders';
import './AdminActions.css';
import logo from '../../../images/logo.png';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faTasks, faUserCircle } from '@fortawesome/free-solid-svg-icons';


const AdminActions = () => {
  const [selectedOption, setSelectedOption] = useState("orders");
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);

  // // to post fakedata admins to database
  // useEffect(()=>{
  //   fetch('https://immense-wildwood-36980.herokuapp.com/addAdmins',{
  //     method:'POST',
  //     headers:{ 'Content-Type':'application/json'},
  //     body:JSON.stringify(admins)
  //   })
  //   .then(res => res.json())
  //   .then(result => console.log("result", result))

  // },[])

  // to check if user is an admin
  useEffect(()=>{
    fetch(`https://immense-wildwood-36980.herokuapp.com/checkAdmin?email=${loggedInUser.email}`)
    .then(res => res.json())
    .then(data =>{
      if(data.length === 0){
        alert("You are not an admin")
        window.location.reload(false);
      }
    })

  },[])

  
  return (
    <div className="admin-container">

      <div className="sidebar" style={{color:'darkcyan'}}>
        <div>
          <img src={logo} alt="logo" style={{height:'50px', width:'70px', borderRadius:'50%'}} />
          <p>bicycle-service</p>
        </div>
        <ul>
            <li onClick={()=> setSelectedOption("orders")}><FontAwesomeIcon icon={faList} /> Orders list</li>
            <li onClick={()=> setSelectedOption("add-service")}> <FontAwesomeIcon icon={faPlus} /> Add Service</li>
            <li onClick={()=> setSelectedOption("make-admin")}> <FontAwesomeIcon icon={faUserCircle} /> Create Admin</li>
            <li onClick={()=> setSelectedOption("manage-services")}> <FontAwesomeIcon icon={faTasks} /> Manage Services</li>
        </ul>
      </div>
      <div className="admin-action-container" >
        {selectedOption === "orders" && <Orders ></Orders> }
        {selectedOption === "add-service" && <AddService></AddService> }
        {selectedOption === "make-admin" && <MakeAdmin></MakeAdmin> }
        {selectedOption === "manage-services" && <ManageServices></ManageServices> }

      </div> 
    </div>
  );
};

export default AdminActions;