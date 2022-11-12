import React from "react";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import ExternalForm from "../components/externalform";
import ExternalTable from "../components/externaltable";


function ExternalData(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
   
        return(
            <div>
                <DashHeader/>
               <DashNav/>
               <main id="main" class="main">
               <section className="section">
               {/* <ExternalForm/>
               <ExternalTable/> */}
               </section>
               </main>
               <DashFooter/>
            </div>
           
           

        )
}

export default ExternalData;