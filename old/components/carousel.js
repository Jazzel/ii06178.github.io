import React,{Component} from 'react';
import {BrouseRouter as Router,Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
class Carousel extends Component{
    render(){
        return(
            // <div className="container-fluid p-0 pb-5">
            <div className="owl-carousel header-carousel position-relative">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="../img/carousel-1.jpg" alt=""/>
                    <div className="carousel-inner">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-8 text-center">
                                    <h1 className="display-3 text-white animated slideInDown mb-4">Best CCTV & Security Solution For You</h1>
                                    <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                    <a href="" className="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="../img/carousel-2.jpg" alt=""/>
                    <div className="carousel-inner">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-8 text-center">
                                    <h1 className="display-3 text-white animated slideInDown mb-4">Smart Security Solution For All Business</h1>
                                    <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                    <a href="" className="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="../img/carousel-3.jpg" alt=""/>
                    <div className="carousel-inner">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-8 text-center">
                                    <h1 className="display-3 text-white animated slideInDown mb-4">Innovative Solution For Security System</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                    <a href="" className="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>

        )
    }
}

export default Carousel;