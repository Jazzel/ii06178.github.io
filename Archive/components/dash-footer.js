import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
function DashFooter(){
    
        return(
            <div className="container-fluid bg-dark text-secondary footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <footer id="footer" className="footer">
    <div className="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
     
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer>
</div>

        )
    
}

export default DashFooter;