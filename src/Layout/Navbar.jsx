import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';




const Navbar = ({ value }) => {  

  return <React.Fragment>
    <nav className="navbar navbar-expand-lg bg-secondary-subtle text-emphasis-secondary">
    <div className="container">
      <NavLink to="productslist" className="navbar-brand"><h3>React Store</h3></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink to="productslist" className="nav-link active mx-3" aria-current="page" >Products</NavLink>
            <NavLink to="cart" className="nav-link active mx-3" >Cart</NavLink>
            <NavLink to="userdet" className="nav-link active mx-3" >User Details</NavLink>
            <NavLink to="about" className="nav-link active mx-3" >About Us</NavLink>
            <NavLink to="contact" className="nav-link active mx-3" >Contact Us</NavLink>
            <NavLink to="logout" className="nav-link active mx-3" >Log out</NavLink>
            </div>
      </div>
    </div>
  </nav> 
  </React.Fragment>
}

export default Navbar;