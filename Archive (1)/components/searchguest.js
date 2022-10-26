import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Navigate } from 'react-router-dom';
// import{Navigate} from  'react-router-dom';
function SearchGuest() {


    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Search Guest</h5>


                            <form>
                                
                                <div className="row mb-3">
                                    <label htmlFor="inputText" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" />

                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="number" className="col-sm-2 col-form-label">CNIC</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" />

                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputText" className="col-sm-2 col-form-label">Phone Number</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" />

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
    <h5 class="card-title">Guest Data</h5>

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

</div>
 </div>
      

    )

}

export default SearchGuest;