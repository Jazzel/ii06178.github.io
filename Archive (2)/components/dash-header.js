
import React,{Component, useState} from 'react';
import {BrowserRouterm,Link,Router,Route, Switch, useNavigate,} from 'react-router-dom';
import { UseAuth } from '../context/AuthContext';
function DashHeader(){
  const [error,setError]=useState()
  const navigate = useNavigate()
  const currentUser = UseAuth()
  const signout = UseAuth()
  console.log(currentUser)
async function handleSignOut()
{
  setError("")

  try {
      await signout()
      console.log("going")
      navigate("/login")
  } catch (e) {
      console.error(e)
      setError("Failed to log out")
  }
}    
        return(
            <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
              <a className="logo d-flex align-items-center">
                <Link to="/dashboard">
                <img className='logo' src="assets/img/transparent- chirya.png" alt=""/>
                </Link>
                <Link to="/dashboard">
                <span className="d-none d-lg-block">Execuverse Dashboard</span>
                </Link>
              </a>
            </div>
        
        
            <nav className="header-nav ms-auto">
              <ul className="d-flex align-items-center">
        
                <li className="nav-item dropdown pe-3">
        
                  <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
                    <span className="d-none d-md-block dropdown-toggle ps-2"> {currentUser && currentUser.email} </span>
                  </a>
        
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                      <h6>Kevin Anderson</h6>
                      <span>Web Designer</span>
                    </li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
        
        
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="#" onClick={handleSignOut}>
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                      </a>
                    </li>
        
                  </ul>
                </li>
        
              </ul>
            </nav>
        
          </header>


        )
    
}

export default DashHeader;