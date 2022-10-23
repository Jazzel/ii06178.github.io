import React from "react";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import DataForm from "../components/dataform";
import DataTable from "../components/datatable";
import DataTableMUI from "../components/datatablemui";


function MultiverseData(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
   
        return(
            <div>
                <DashHeader/>
               <DashNav/>
               <main id="main" class="main">
               <section className="section">
                   <div className="container">
               <DataForm/>
               <DataTable/>
               <DataTableMUI/>
               </div>
               </section>

               </main>
               <DashFooter/>
            </div>
           
           

        )
}

export default MultiverseData;