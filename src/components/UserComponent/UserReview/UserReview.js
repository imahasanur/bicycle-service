import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import axios from 'axios';

const UserReview = () => {

  const[loggedInUser, setLoggedInUser]= useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState([null]);
  const [isReviewed, setIsReviewed] = useState(false);
  const onSubmit = data =>{
    data.img = imageUrl;
    fetch('https://immense-wildwood-36980.herokuapp.com/addReview', {
      method:'POST',
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        setIsReviewed(true);
        // window.location.reload(false);
      }
    })

  }

  const handleImageUpload = (e)=>{
    const imageData = new FormData();
    imageData.set('key', '2cdca9c5794e6c006907401073db37d6')
    imageData.append('image', e.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',imageData)
    .then(res=>setImageUrl(res.data.data.display_url))
    .catch(err=>console.log(err));
    
  }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between p-2">
        <p>user review</p>
        <p>{loggedInUser?.name}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row p-2">
          <div className="col-8 col-sm-5 col-md-7 ">
            <input type="text"  defaultValue={loggedInUser.name} {...register("name")} placeholder="your name" required/>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-8 col-sm-5 col-md-7">
            <input type="text"  {...register("designation")} placeholder="designation" required/>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-8 col-sm-5 col-md-7">
            <input type="text"  {...register("comment")} placeholder="your comment .." required />
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8 col-sm-5 col-md-7">
            <input onChange={handleImageUpload} type="file" required />
          </div>
        </div>

        <div className="p-2">
          <input type="submit" value="Post Review" className="btn btn-outline-success " />
        </div>
      </form>
      {isReviewed && <p>Review Posted</p>}
      </div>
    </div>
  );
};

export default UserReview;