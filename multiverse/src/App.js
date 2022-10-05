import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import Header from './components/header';
import Homemain from './pages/Home';
import Dashboardmain from './pages/Dashboard';
import DataForm from './components/dataform';
import MultiverseData from './pages/MultiverserData';

function App() {
  return (
    <div className="App">
    

     {/* <Homemain/> */}
       <Routes>
         
           <Route path='/' exact element={<Homemain/>} />
            
      
          <Route path='/dashboard'exact element={<Dashboardmain/>} />

          <Route path='/dataform'exact element={<MultiverseData/>} />  
           
        </Routes>
      
 
     
     </div>
  );
}

export default App;
