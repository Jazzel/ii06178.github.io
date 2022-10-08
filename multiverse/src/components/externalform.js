import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink, Navigate} from 'react-router-dom';
// import{Navigate} from  'react-router-dom';
function ExternalForm(){
    
 
        return(
            
            <div className="row">
              <div className="col-lg-6">
      
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Guest Form</h5>
      
                   
                    <form>
                      <div className="row mb-3">
                        <label htmlFor="inputText" className="col-sm-2 col-form-label">HUID</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control"/>
                        
                        </div>
                      </div> 
                      <div className="row mb-3">
                        <label htmlFor="inputText" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control"/>
                        
                        </div>
                      </div> 
                      <div className="row mb-3">
                        <label htmlFor="inputText" className="col-sm-2 col-form-label">Batch</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control"/>
                        
                        </div>
                      </div> 
                      <div className="row mb-3">
                        <label htmlFor="inputText" className="col-sm-2 col-form-label">Phone Number</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control"/>
                        
                        </div>
                      </div> 
                      <div className="row mb-3">
                        <label htmlFor="inputText" className="col-sm-2 col-form-label">Exec_Role</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control"/>
                        
                        </div>
                      </div> 
                    {/*  <div className="row mb-3">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control"/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                          <input type="password" className="form-control"/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Number</label>
                        <div className="col-sm-10">
                          <input type="number" className="form-control"/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="inputNumber" className="col-sm-2 col-form-label">File Upload</label>
                        <div className="col-sm-10">
                          <input className="form-control" type="file" id="formFile"/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label>
                        <div className="col-sm-10">
                          <input type="date" className="form-control"/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time</label>
                        <div className="col-sm-10">
                          <input type="time" className="form-control"/>
                        </div>
                      </div>
      
                      <div className="row mb-3">
                        <label htmlFor="inputColor" className="col-sm-2 col-form-label">Color Picker</label>
                        <div className="col-sm-10">
                          <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#4154f1" title="Choose your color"/>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Textarea</label>
                        <div className="col-sm-10">
                          <textarea className="form-control" style="height: 100px"></textarea>
                        </div>
                      </div>
                      <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                        <div className="col-sm-10">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                            <label className="form-check-label" htmlFor="gridRadios1">
                              First radio
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                            <label className="form-check-label" htmlFor="gridRadios2">
                              Second radio
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="option" disabled/>
                            <label className="form-check-label" htmlFor="gridRadios3">
                              Third disabled radio
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <div className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                        <div className="col-sm-10">
      
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label className="form-check-label" htmlFor="gridCheck1">
                              Example checkbox
                            </label>
                          </div>
      
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck2" checked/>
                            <label className="form-check-label" htmlFor="gridCheck2">
                              Example checkbox 2
                            </label>
                          </div>
      
                        </div>
                      </div>
      
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Disabled</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" value="Read only / Disabled" disabled/>
                        </div>
                      </div>
      
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Select</label>
                        <div className="col-sm-10">
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
      
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Multi Select</label>
                        <div className="col-sm-10">
                          <select className="form-select" multiple aria-label="multiple select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
      
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Submit Button</label>
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary">Submit Form</button>*/}
                        {/* </div>
                      </div>
       */}
                    </form> 
      
                  </div>
                </div>
      
              </div>
              </div>
           
          
          
        )
   
}

export default ExternalForm;