import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceData.css';
import { Transition } from 'react-transition-group';
import {useSpring, animated} from 'react-spring';

const defaultStyle = {
  transition: `transform 200ms, opacity 200ms ease`,
  opacity: 1
};

const transitionStyles = {
  entering: { transform: 'scale(0.5)', opacity: 0 }, 
  entered: { transform: 'scale(1.0)', opacity: 1},
  exiting: { opacity: 0},
  exited: { opacity: 1 }
};


const TransitionComponent = ({ in: inProp }) => (
  <Transition
    in={inProp}
    timeout={{
      appear: 100,   
      enter: 300,
      exit: 300
    }}
    appear
    unmountOnExit
  >
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        you have {state}
      </div>
    )}
  </Transition>
);




const ServiceDetail = ({service}) => {


  const [entered, setEntered] = useState(false);

  const props = useSpring({ number: 5, from: { number: 0 } })
  const {price, img, description, name, _id} = service;
  


  return (
    <div className="col-7 col-md-4 p-4">
      <div onClick={() => {setEntered(!entered)}} className="card service-card" >
        <div className="d-flex justify-content-center">
          <img src={img} className="card-img-top img-fluid" alt="..." style={{ height:'200px',borderRadius:'50%', width:'85%', border:'2px solid skyblue'}} />
        </div>
        <div className="card-body service-card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p>Price: $<small>{price}</small></p>
            <Link to={`/booking/${_id}`} className="btn btn-outline-success">Get Service</Link>
            <h6>Review :<animated.span>{props.number}</animated.span> </h6>
            <TransitionComponent in={entered} />

        </div>
      </div>  
    </div>
  );
};

export default ServiceDetail;