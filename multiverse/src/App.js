import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Route, Switch} from 'react-router-dom';
import home from './pages/home'
import Home from './pages/home';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <div className="App">
     <Home/>
       {/* <Dashboard/> */}
      
    </div>
  );
}

export default App;
