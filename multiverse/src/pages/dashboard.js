import React,{Component, Suspense} from 'react';
import {BrouseRouter as Router,Switch,Redirect} from 'react-router-dom';
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';


function Dashboard(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 

        return(
            <div>
               <DashHeader/>
               <DashNav/>
               <DashFooter/>
            </div>
           
           

        )
    
}

export default Dashboard;