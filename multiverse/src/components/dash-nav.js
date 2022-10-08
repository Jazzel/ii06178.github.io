import React,{Component} from 'react';
import {Link,Router,Route, Switch} from 'react-router-dom';
function DashNav(){
    
        return(
            <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        {/* <a className="nav-link " href="index.html"> */}
        <Link to="/dataform">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </Link>
        {/* </a> */}
      </li>

      <li className="nav-item">
      <Link to="/dataform">
          <i className="bi bi-menu-button-wide"></i><span>Multiverser Data</span>
        </Link>
        
      </li>

      <li className="nav-item">
      <Link to="/externalform">
          <i className="bi bi-menu-button-wide"></i><span>Guest Data</span>
        </Link>
        
      </li>
      <li className="nav-item">
      <Link to="/eventform">
          <i className="bi bi-menu-button-wide"></i><span>Event Data</span>
        </Link>
        
      </li>
      <li className="nav-item">
      <Link to="/attendenceform">
          <i className="bi bi-menu-button-wide"></i><span>Attendence</span>
        </Link>
        
      </li>


      
    </ul>

  </aside>



        )
    
}

export default DashNav;