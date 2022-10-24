import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import StudentStats from "../components/studentstats";


function Dashboardmain(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/register')
        }
    }, [])
        return(
            <div>
                <DashHeader/>
               <DashNav/>
               <main id="main" class="main">
               <section className="section dashboard">
               <StudentStats/>
               </section>
               </main>
            <div>   
               <DashFooter/>
               </div>   
            </div>
           
           

        )
}

export default Dashboardmain;