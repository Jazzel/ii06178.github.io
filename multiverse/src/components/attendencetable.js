import React,{Component, useState} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink, Navigate} from 'react-router-dom';
// import{Navigate} from  'react-router-dom';
function AttendenceTable(){
  const [query,setQuery]=useState("");   
 
        return(
          <div className="row">  
    <div class="col-lg-6">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Student Attendence Data</h5>
    <input type="text" placeholder='Search' className='search' onChange={e=>setQuery(e.target.value)}/>
    <table class="table table-striped table-hover table-responsive">
      <thead>
        <tr>
        <th scope="col">HUID</th>
          <th scope="col">Name</th>
          <th scope="col">Event Name</th>
          <th scope="col">Role</th>
          <th scope="col">Attendence</th>
          <th scope="col">TicketBought</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Brandon Jacob</td>
          <td>HUCON</td>
          <td>Volunteer</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bridie Kessler</td>
          <td>HUCON</td>
          <td>Organizer</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Ashleigh Langosh</td>
          <td>HUCON</td>
          <td>Organizer</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Angus Grady</td>
          <td>HUCON</td>
          <td>Participant</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Raheem Lehner</td>
          <td>HUCON</td>
          <td>Prticipant</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
</div>
<div class="col-lg-6">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Guest Attendence Data</h5>

    <table class="table table-striped table-hover" >
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Event Name</th>
          <th scope="col">Role</th>
          <th scope="col">Attendence</th>
          <th scope="col">TicketBought</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Brandon Jacob</td>
          <td>HUCON</td>
          <td>Volunteer</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bridie Kessler</td>
          <td>HUCON</td>
          <td>Organizer</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Ashleigh Langosh</td>
          <td>HUCON</td>
          <td>Organizer</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Angus Grady</td>
          <td>HUCON</td>
          <td>Participant</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Raheem Lehner</td>
          <td>HUCON</td>
          <td>Prticipant</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
</div>
</div>
)
   
}

export default AttendenceTable;
