import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes,useNavigate} from 'react-router-dom';
import Header from './components/header';
import Homemain from './pages/Home';
import Dashboardmain from './pages/Dashboard';
import DataForm from './components/dataform';
import MultiverseData from './pages/MultiverserData';
import ExternalData from './pages/ExternalData';
import EventData from './pages/EventData';
import AttendenceData from './pages/AttendenceData';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ForgotPassword from './pages/ForgotPassword';
import Search from './pages/Search';
import ProtectedRoute from './components/ProtectedRoute';
import Role from './pages/Role';
import Schedule from './pages/Schedules';
import Semester from './pages/Semester';
import Venue from './pages/Venue';

function App() {
  
  return (
    <div className="App">
    

     {/* <Homemain/> */}
       <Routes>
       <Route element={<ProtectedRoute />}>
           <Route path='/' exact element={<Homemain/>} />
           </Route> 

          <Route path='/dashboard'exact element={<Dashboardmain/>} />

          <Route path='/dataform'exact element={<MultiverseData/>} />  

          <Route path='/externalform'exact element={<ExternalData/>} />  

          <Route path='/eventform'exact element={<EventData/>} />  

          <Route path='/attendenceform'exact element={<AttendenceData/>} />  

          <Route path='/login'exact element={<Login/>} />

          <Route path='/register'exact element={<Register/>} />  

          <Route path='/about'exact element={<About/>} />  

          <Route path='/app'exact element={<App/>} />  

          <Route path='/contactus'exact element={<ContactUs/>} />  

          <Route path='/forgot'exact element={<ForgotPassword/>} />  
           
          <Route path='/role'exact element={<Role/>} />  

          <Route path='/schedule'exact element={<Schedule/>} />  

          <Route path='/semester'exact element={<Semester/>} />  

          <Route path='/venue'exact element={<Venue/>} />  

        </Routes>
      
 
     
     </div>
  );
}

export default App;
