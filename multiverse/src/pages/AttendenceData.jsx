import React from "react";
import AttendenceForm from "../components/attendenceform";
import AttendenceTable from "../components/attendencetable";
import TableDemo from "../components/attendencetablemui";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';



function AttendenceData(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
   
        return(
            <div>
                <DashHeader/>
               <DashNav/>
               <main id="main" class="main">
               <section className="section">
               <AttendenceForm/>
               <AttendenceTable/>
               <TableDemo/>
               </section>
               </main>
               <DashFooter/>
            </div>
           
           

        )
}

export default AttendenceData;