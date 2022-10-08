import React from "react";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';


function Dashboardmain(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
   
        return(
            <div>
                <DashHeader/>
               <DashNav/>
            <div>   
               <DashFooter/>
               </div>   
            </div>
           
           

        )
}

export default Dashboardmain;