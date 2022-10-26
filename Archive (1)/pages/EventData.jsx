import React from "react";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import EventForm from "../components/eventform";
import EventTable from "../components/eventtable";


function EventData(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
   
        return(
            <div>
                <DashHeader/>
               <DashNav/>
               <main id="main" class="main">
               <section className="section">
               <EventForm/>
               <EventTable/>
               </section>
               </main>
               <DashFooter/>
            </div>
           
           

        )
}

export default EventData;