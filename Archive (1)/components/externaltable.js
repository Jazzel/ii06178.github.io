import React,{Component, useState} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink, Navigate} from 'react-router-dom';
// import{Navigate} from  'react-router-dom';
function ExternalTable(){
  const [query,setQuery]=useState("");   
 
        return(
    <div class="col-lg-6">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Guest Data</h5>
    <input type="text" placeholder='Search' className='search' onChange={e=>setQuery(e.target.value)}/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">CNIC</th>
          <th scope="col">Phpne Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Brandon Jacob</td>
          <td>42101-2423424-5</td>
          <td>0312-1234567</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bridie Kessler</td>
          <td>42101-2423424-5</td>
          <td>0312-1234567</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Ashleigh Langosh</td>
          <td>42101-2423424-5</td>
          <td>0312-1234567</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Angus Grady</td>
          <td>42101-2423424-5</td>
          <td>0312-1234567</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Raheem Lehner</td>
          <td>42101-2423424-5</td>
          <td>0312-1234567</td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
</div>
)
   
}

export default ExternalTable;
