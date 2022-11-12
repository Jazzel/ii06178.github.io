import React,{Component} from 'react';
import {BrouseRouter as Router,Route, Switch} from 'react-router-dom';
function Footer(){
   
        return(
            <div className="container-fluid bg-dark text-secondary footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Habib University</p>
                            {/* <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p> */}
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>connectionverse@gmail.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-tiktok"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Services</h5>
                            <a className="btn btn-link" href="">Business Security</a>
                            <a className="btn btn-link" href="">Fire Detection</a>
                            <a className="btn btn-link" href="">Alarm Systems</a>
                            <a className="btn btn-link" href="">CCTV & Video</a>
                            <a className="btn btn-link" href="">Smart Home</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Want quick updates on events? Join our contact list with your Habib email ID!</p>
                            <div className="position-relative w-100">
                                <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        )
    
}

export default Footer;