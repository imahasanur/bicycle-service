import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
// import servicesData from '../../../fakeData/servicesData';

const Services = () => {
  const [serviceData, setServiceData] = useState([])
  
  // to post all fakedata services to database
  // useEffect(()=>{
  //   fetch('https://immense-wildwood-36980.herokuapp.com/addServices',{
  //     method:'POST',
  //     headers:{ 'Content-Type':'application/json'},
  //     body:JSON.stringify(servicesData)
  //   })
  //   .then(res => res.json())
  //   .then(result => console.log("result", result))

  // },[])

  // to load services data from database
  useEffect(()=>{
    fetch('https://immense-wildwood-36980.herokuapp.com/getServices')
    .then(res => res.json())
    .then(data => setServiceData(data))
  },[])

  return (
    <div className="p-5">
       <h2 className="text-center m-2" style={{color:'purple'}}> Services We Provide</h2>
       <div className="row container-fluid">
        {
          serviceData.map( service => <ServiceDetail service={service}></ServiceDetail>)
        }
        {
          serviceData && console.log("service data", serviceData)
        }
       </div>
    </div>
  );
};

export default Services;