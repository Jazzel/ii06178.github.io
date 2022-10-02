import React,{Component, Suspense} from 'react';
import {BrouseRouter as Router,Switch,Redirect} from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
class Home extends Component{
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
    render(){
        return(
            <div>
                <Header/>
                <div class="container-fluid p-0 pb-5">
                <Carousel/>
                </div>
                <Footer />
            </div>
           
           

        )
    }
}

export default Home;