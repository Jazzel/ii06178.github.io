import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Carousel from '../components/carousel';

const About = () => {
  return (
    <div>
    <Header/>
    <div class="container-fluid p-0 pb-5">
    <Carousel/>
    </div>
    <Footer />
</div>
  );
};
  
export default About;