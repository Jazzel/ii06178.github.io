import React,{Component, useState} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink, Navigate} from 'react-router-dom';
// import{Navigate} from  'react-router-dom';
function EventTable(){
  const [query,setQuery]=useState(""); 
 
        return(
          <div className="row">  
    <div class="col-lg-6">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Event Data</h5>
    <input type="text" placeholder='Search' className='search' onChange={e=>setQuery(e.target.value)}/>
    <table class="table table-striped table-hover table-responsive">
      <thead>
        <tr>
        <th scope="col">ID</th>
          <th scope="col">Event Name</th>
          <th scope="col">Budget</th>
          <th scope="col">Semester</th>
          <th scope="col">Date</th> 
          <th scope="col">StartTime</th>
          <th scope="col">EndTime</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>HUCON</td>
          <td>200,000</td>
          <td>Spring 2023</td>
          <td>11/02/2023</td>
          <td>12:00:00</td>
          <td>20:00:00</td>
        </tr>
        <tr>
        <th scope="row">2</th>
          <td>HUCON</td>
          <td>200,000</td>
          <td>Spring 2023</td>
          <td>11/02/2023</td>
          <td>12:00:00</td>
          <td>20:00:00</td>
        </tr>
        <tr>
        <th scope="row">3</th>
          <td>HUCON</td>
          <td>200,000</td>
          <td>Spring 2023</td>
          <td>11/02/2023</td>
          <td>12:00:00</td>
          <td>20:00:00</td>
        </tr>
        <tr>
        <th scope="row">4</th>
          <td>HUCON</td>
          <td>200,000</td>
          <td>Spring 2023</td>
          <td>11/02/2023</td>
          <td>12:00:00</td>
          <td>20:00:00</td>
        </tr>
        <tr>
        <th scope="row">5</th>
          <td>HUCON</td>
          <td>200,000</td>
          <td>Spring 2023</td>
          <td>11/02/2023</td>
          <td>12:00:00</td>
          <td>20:00:00</td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
</div>
<div class="col-lg-6">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Venue Data</h5>

    <table class="table table-striped table-hover" >
      <thead>
        <tr>
          <th scope="col">EventID</th>
          <th scope="col">Event Name</th>
          <th scope="col">Venue Name</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>HUCON</td>
          <td>Student Lounge</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>HUCON</td>
          <td>Student Lounge</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>HUCON</td>
          <td>Student Lounge</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>HUCON</td>
          <td>Student Lounge</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>HUCON</td>
          <td>Student Lounge</td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
</div>
</div>
)
   
}

export default EventTable;
