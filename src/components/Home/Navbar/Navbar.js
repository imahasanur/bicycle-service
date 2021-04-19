import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <div className="d-flex mx-5">
        <img src = {logo} alt= "logo" style={{height:'45px',width:'45px'}}/>
        <Link className="navbar-brand" to="/home">bicycle service</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto  ">
        <li className="nav-item active mx-2">
          <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/home">About us</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/home">Services</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/admin">Admin</Link>
        </li>
        </ul>
        <div className=" my-2 my-lg-0">
          <Link  to="/login" className="btn btn-outline-success my-2 my-sm-0" >LogIn</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;