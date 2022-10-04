import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Router,Route,Routes,Navigate} from 'react-router-dom';

import Homemain from './pages/home';
import Dashboardmain from './pages/dashboard';

function App() {
  return (
    <>
    <Router>
   

     <Homemain/>
   
       <Routes>
         
          <Route exact path='/home' element={<Homemain/>} />
            
      
          <Route path='/dashboard' component={<Dashboardmain/>} />
            
          <Navigate to="/home" />
        </Routes>
      
 
     </Router>
     </>
  );
}

export default App;
