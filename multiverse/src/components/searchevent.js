import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Navigate } from 'react-router-dom';
// import{Navigate} from  'react-router-dom';
function SearchEvent() {


  return (
    <div className='containder'>
      <div className="row">
        <div className="col-lg-6">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Search Event</h5>


              <form>
                <div className="row mb-3">
                  <label htmlFor="inputText" className="col-sm-2 col-form-label">Event Name</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" />

                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputText" className="col-sm-2 col-form-label">Budget</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" />

                  </div>

                </div>
                <div className="row mb-3">
                  <label htmlFor="inputText" className="col-sm-2 col-form-label">Venue</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" />

                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputText" className="col-sm-2 col-form-label">Semester</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" />

                  </div>
                </div>
                <div className="row mb-3">
                        <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label>
                        <div className="col-sm-10">
                          <input type="date" className="form-control"/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time Start</label>
                        <div className="col-sm-10">
                          <input type="time" className="form-control"/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time End</label>
                        <div className="col-sm-10">
                          <input type="time" className="form-control"/>
                        </div>
                      </div>
               
                <div className="row mb-3">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Search</button>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>
        <div class="col-lg-6">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Event Data</h5>

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

      </div>
    </div>


  )

}

export default SearchEvent;