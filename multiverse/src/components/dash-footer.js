import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
function DashFooter(){
    
        return(
            <footer id="footer" className="footer">
    <div className="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
     
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer>


        )
    
}

export default DashFooter;