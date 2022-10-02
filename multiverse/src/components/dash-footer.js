import React,{Component} from 'react';
import {BrouseRouter as Router,Route, Switch} from 'react-router-dom';
class DashFooter extends Component{
    render(){
        return(
            <footer id="footer" class="footer">
    <div class="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
     
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer>


        )
    }
}

export default DashFooter;