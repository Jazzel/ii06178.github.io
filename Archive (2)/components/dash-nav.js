import React,{Component} from 'react';
import {Link,Router,Route, Switch} from 'react-router-dom';
function DashNav(){
    
        return(
            <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">
  
      <li className="nav-item">
    
        
        <Link to="/dashboard" className="nav-link">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
          </Link>
        
       
      </li>
      
      <li className="nav-item">
      
      <Link to="/dataform" className="nav-link collapsed">
          <i className="bi bi-menu-button-wide"></i><span>Multiverser Data</span>
        </Link>
      
      </li>

      <li className="nav-item">
      
      <Link to="/externalform"  className="nav-link collapsed">
          <i className="bi bi-menu-button-wide"></i><span>Guest Data</span>
        </Link>
      
      </li>
      <li className="nav-item">
      
      <Link to="/eventform"  className="nav-link collapsed">
          <i className="bi bi-menu-button-wide"></i><span>Event Data</span>
        </Link>
      
      </li>
      <li className="nav-item">
      
      <Link to="/attendenceform"  className="nav-link collapsed">
          <i className="bi bi-menu-button-wide"></i><span>Attendence</span>
        </Link>
      
      </li>
      <li className="nav-item">
      
      <Link to="/role"  className="nav-link collapsed">
          <i className="bi bi-menu-button-wide"></i><span>Role</span>
        </Link>
      
      </li>
      <li className="nav-item">
      
      <Link to="/schedules"  className="nav-link collapsed">
          <i className="bi bi-menu-button-wide"></i><span>Schedule</span>
        </Link>
      
      </li>
      <li className="nav-item">
      
      <Link to="/semester"  className="nav-link collapsed">
          <i className="bi bi-menu-button-wide"></i><span>Semester</span>
        </Link>
      
      </li>
      <li className="nav-item">
      
      <Link to="/venue"  className="nav-link collapsed">
          <i className="bi bi-menu-button-wide"></i><span>Venue</span>
        </Link>
      
      </li>
      {/* <li className="nav-item">
      
      <Link to="/search">
          <i className="bi bi-menu-button-wide"></i><span>Search</span>
        </Link>
      
      </li> */}

      
    </ul>

  </aside>



        )
    
}

export default DashNav;