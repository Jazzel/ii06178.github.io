import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink, Navigate} from 'react-router-dom';
// import{Navigate} from  'react-router-dom';
function Header(){
    
 
        return(

            <nav className="navbar navbar-expand-lg bg-purple navbar-light sticky-top p-0 px-4 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex align-items-center">
            <h2 className="m-0 text-primary">The Multiverse</h2>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-4 py-lg-0">
                <Link to="/">
                    {/* "nav-item nav-link active" */}
                <a  className="nav-item nav-link">Home</a>
                </Link>
                <Link to="/about">
                <a className="nav-item nav-link">About</a>
                </Link>
                {/* <a  className="nav-item nav-link">Service</a> */}
                <Link to="/app">
                <a className="nav-item nav-link">App</a>
                </Link>
                {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                        <a href="feature.html" className="dropdown-item">Feature</a>
                        <a href="quote.html" className="dropdown-item">Free Quote</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div> */}
                <Link to="/contactus">
                <a className="nav-item nav-link">Contact Us</a>
                </Link>
            </div>
            <div className="h-100 d-lg-inline-flex align-items-center d-none">
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-tiktok"></i></a>
                <a className="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
               {/* <BrowserRouter> */}
               <Link to ="/login">
                <button type="button" className="btn btn-primary py-2 top-0 end-0 mt-2 me-2">SignIn/LogIn</button>
                </Link>
                {/* </BrowserRouter> */}
            </div>
        </div>
    </nav>
        )
   
}

export default Header;