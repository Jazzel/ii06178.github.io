import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <Router>
    <div className="App">
     <Home/>
       {/* <Dashboard/> */}
      
    </div>
     </Router>
  );
}

export default App;
