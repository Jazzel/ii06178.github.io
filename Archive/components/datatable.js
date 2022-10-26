import React,{Component, useState} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink, Navigate} from 'react-router-dom';
import {Table} from "antd";
import "antd/dist/antd.css";
// import{Navigate} from  'react-router-dom';
function DataTable(){
    const [query,setQuery]=useState("");
 
        return(
          <div class="row">
    <div class="col-lg-6">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Student Data</h5>
          <input type="text" placeholder='Search' className='search' onChange={e=>setQuery(e.target.value)}/>
    
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Batch</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Exec Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Brandon Jacob</td>
          <td>2022</td>
          <td>03121234567</td>
          <td>None</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bridie Kessler</td>
          <td>2022</td>
          <td>03121234567</td>
          <td>None</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Ashleigh Langosh</td>
          <td>2022</td>
          <td>03121234567</td>
          <td>None</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Angus Grady</td>
          <td>2022</td>
          <td>03121234567</td>
          <td>None</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Raheem Lehner</td>
          <td>2022</td>
          <td>03121234567</td>
          <td>None</td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
</div>

<div class="col-lg-6">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Membership Data</h5>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Semester</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Brandon Jacob</td>
          <td>Fall 2022</td>
          
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bridie Kessler</td>
          <td>Fall 2022</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Ashleigh Langosh</td>
          <td>Fall 2022</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Angus Grady</td>
          <td>Fall 2022</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Raheem Lehner</td>
          <td>Fall 2022</td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
</div>
</div>
)
   
}

export default DataTable;
