import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{

      fetch('https://immense-wildwood-36980.herokuapp.com/addAnAdmin', {
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          // window.location.reload(false);
        }
      })
  
    }
  
    return (
        <div>
          <div className="d-flex justify-content-between p-2">
            <p>Add Admin</p>
            <p>{loggedInUser?.name}</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row p-2">
              <div className="col-8 col-sm-5 col-md-7 ">
                <input type="email"  {...register("email")} placeholder="email.." required/>
              </div>
            </div>
            <div className="row p-2">
              <div className="col-8 col-sm-5 col-md-7 ">
                <input type="text"  {...register("name")} placeholder="name.." required/>
              </div>
            </div>
            <div className="p-2">
              <input type="submit" value="Add Admin" className="btn btn-outline-success " />
            </div>
            </form>
          </div>  
        </div>
      );
  };

export default MakeAdmin;