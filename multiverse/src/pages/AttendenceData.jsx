import React from "react";
import AttendenceForm from "../components/attendenceform";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import DataForm from "../components/dataform";
import DataTable from "../components/datatable";


function AttendenceData(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
   
        return(
            <div>
                <DashHeader/>
               <DashNav/>
               <main id="main" class="main">
               <section className="section">
               <AttendenceForm/>
               <DataTable/>
               </section>
               </main>
               <DashFooter/>
            </div>
           
           

        )
}

export default AttendenceData;