import React from "react";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import Log from "../components/log";
import { AuthProvider } from "../context/AuthContext";


function Login(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
   
        return(
            <div>
                <body class="bg-gradient-primary">
                    <AuthProvider>
                <Log/>
                </AuthProvider>
               </body>
            </div>
           
           

        )
}

export default Login;