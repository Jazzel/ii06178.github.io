
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Navigate } from 'react-router-dom';
import {
  MDBTable, MDBTableHead, MDBTableBody, MDBCard, MDBCardBody, MDBCardTitle,
  MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBBtn, MDBAccordion, MDBAccordionItem
} from 'mdb-react-ui-kit';
import {MDBDataTable, MDBInput} from "mdbreact";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import{Navigate} from  'react-router-dom';
class AttendenceTable extends Component {
  query = "";
  setQuery = "";
  showFirstElement = false;
  setShowFirstElement = false;

     
  toggleFirstElement = () => this.setShowFirstElement = !this.showFirstElement;

  state = {
    checked: ['checkbox1', 'checkbox2', 'checkbox3']
  };

  toggleCheck = e => {
    let checkedArr = this.state.checked;
    checkedArr.filter(name => name === e.target.id)[0] 
      ? checkedArr = checkedArr.filter(name => name !== e.target.id)
      : checkedArr.push(e.target.id);
    this.setState({checked: checkedArr})
  };

  isChecked = id => this.state.checked.filter(name => name === id)[0] ? true : false


  render(){ 
    const data = {
    columns: [
      {
        label: 'Check',
        field: 'check',
        sort: 'disabled',
        width: 20
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150
      },
      {
        label: "Role",
        field: "role",
        sort: "asc",
        width: 270
      },
      
      {
        label: "Ticket",
        field: "ticket",
        sort: "asc",
        width: 100
      }
    ],
    rows: [
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox1' onClick={this.toggleCheck} checked={this.isChecked('checkbox1')}/>,
      //   name: "Cedric Kelly",
      //   position: "Senior Javascript Developer",
      //   office: "Edinburgh",
      //   age: "22",
      //   date: "2012/03/29",
      //   salary: "$433"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox2' onClick={this.toggleCheck} checked={this.isChecked('checkbox2')}/>,
      //   name: "Airi Satou",
      //   position: "Accountant",
      //   office: "Tokyo",
      //   age: "33",
      //   date: "2008/11/28",
      //   salary: "$162"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox3' onClick={this.toggleCheck} checked={this.isChecked('checkbox3')}/>,
      //   name: "Brielle Williamson",
      //   position: "Integration Specialist",
      //   office: "New York",
      //   age: "61",
      //   date: "2012/12/02",
      //   salary: "$372"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox4' onClick={this.toggleCheck} checked={this.isChecked('checkbox4')}/>,
      //   name: "Herrod Chandler",
      //   position: "Sales Assistant",
      //   office: "San Francisco",
      //   age: "59",
      //   date: "2012/08/06",
      //   salary: "$137"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox5' onClick={this.toggleCheck} checked={this.isChecked('checkbox5')}/>,
      //   name: "Rhona Davidson",
      //   position: "Integration Specialist",
      //   office: "Tokyo",
      //   age: "55",
      //   date: "2010/10/14",
      //   salary: "$327"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox6' onClick={this.toggleCheck} checked={this.isChecked('checkbox6')}/>,
      //   name: "Colleen Hurst",
      //   position: "Javascript Developer",
      //   office: "San Francisco",
      //   age: "39",
      //   date: "2009/09/15",
      //   salary: "$205"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox7' onClick={this.toggleCheck} checked={this.isChecked('checkbox7')}/>,
      //   name: "Sonya Frost",
      //   position: "Software Engineer",
      //   office: "Edinburgh",
      //   age: "23",
      //   date: "2008/12/13",
      //   salary: "$103"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox8' onClick={this.toggleCheck} checked={this.isChecked('checkbox8')}/>,
      //   name: "Jena Gaines",
      //   position: "Office Manager",
      //   office: "London",
      //   age: "30",
      //   date: "2008/12/19",
      //   salary: "$90"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox9' onClick={this.toggleCheck} checked={this.isChecked('checkbox9')}/>,
      //   name: "Quinn Flynn",
      //   position: "Support Lead",
      //   office: "Edinburgh",
      //   age: "22",
      //   date: "2013/03/03",
      //   salary: "$342"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox10' onClick={this.toggleCheck} checked={this.isChecked('checkbox10')}/>,
      //   name: "Charde Marshall",
      //   position: "Regional Director",
      //   office: "San Francisco",
      //   age: "36",
      //   date: "2008/10/16",
      //   salary: "$470"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox11' onClick={this.toggleCheck} checked={this.isChecked('checkbox11')}/>,
      //   name: "Haley Kennedy",
      //   position: "Senior Marketing Designer",
      //   office: "London",
      //   age: "43",
      //   date: "2012/12/18",
      //   salary: "$313"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox12' onClick={this.toggleCheck} checked={this.isChecked('checkbox12')}/>,
      //   name: "Tatyana Fitzpatrick",
      //   position: "Regional Director",
      //   office: "London",
      //   age: "19",
      //   date: "2010/03/17",
      //   salary: "$385"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox13' onClick={this.toggleCheck} checked={this.isChecked('checkbox13')}/>,
      //   name: "Michael Silva",
      //   position: "Marketing Designer",
      //   office: "London",
      //   age: "66",
      //   date: "2012/11/27",
      //   salary: "$198"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox14' onClick={this.toggleCheck} checked={this.isChecked('checkbox14')}/>,
      //   name: "Paul Byrd",
      //   position: "Chief Financial Officer (CFO)",
      //   office: "New York",
      //   age: "64",
      //   date: "2010/06/09",
      //   salary: "$725"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox15' onClick={this.toggleCheck} checked={this.isChecked('checkbox15')}/>,
      //   name: "Gloria Little",
      //   position: "Systems Administrator",
      //   office: "New York",
      //   age: "59",
      //   date: "2009/04/10",
      //   salary: "$237"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox16' onClick={this.toggleCheck} checked={this.isChecked('checkbox16')}/>,
      //   name: "Bradley Greer",
      //   position: "Software Engineer",
      //   office: "London",
      //   age: "41",
      //   date: "2012/10/13",
      //   salary: "$132"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox17' onClick={this.toggleCheck} checked={this.isChecked('checkbox17')}/>,
      //   name: "Dai Rios",
      //   position: "Personnel Lead",
      //   office: "Edinburgh",
      //   age: "35",
      //   date: "2012/09/26",
      //   salary: "$217"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox18' onClick={this.toggleCheck} checked={this.isChecked('checkbox18')}/>,
      //   name: "Jenette Caldwell",
      //   position: "Development Lead",
      //   office: "New York",
      //   age: "30",
      //   date: "2011/09/03",
      //   salary: "$345"
      // },
      // {
      //   check: <MDBInput label=' ' type='checkbox' id='checkbox19' onClick={this.toggleCheck} checked={this.isChecked('checkbox19')}/>,
      //   name: "Yuri Berry",
      //   position: "Chief Marketing Officer (CMO)",
      //   office: "New York",
      //   age: "40",
      //   date: "2009/06/25",
      //   salary: "$675"
      // },
      
    ]
  };


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Student Attendence Data</MDBCardTitle>

              <MDBDataTable bordered hover searching paging={false} data={data} />

              {/* <MDBTable responsive>
                <MDBTableHead>
                  <tr>
                    <th scope='col'>HUID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Event Name</th>
                    <th scope='col'>Role</th>
                    <th scope='col'>Attendence</th>
                    <th scope='col'>TicketBought</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Sit</td>
                    <td>Amet</td>
                    <td>Amet</td>
                    <td>Amet</td>
                    <td>
                    <MDBBtn color="link" size='sm' onClick={this.toggleFirstElement}> <i className='fas fa-times'></i></MDBBtn>
                    </td>
                  </tr>
                  
                  <tr>
                    <td colSpan={6}>
                    <MDBCollapse show={this.showFirstElement} className='mt-6'>
                    <table className='table mb-0'>
                        <MDBTableHead>
                          <tr>
                            <th scope='col'>Header</th>
                            <th scope='col'>Header</th>
                            <th scope='col'>Header</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          <tr>
                            <th scope='row'>A</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope='row'>B</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope='row'>C</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                        </MDBTableBody>
                      </table>
                     </MDBCollapse>
                    </td>
                    
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
                </MDBTableBody>
              </MDBTable> */}

            </MDBCardBody>

          </MDBCard>
        </MDBCol>
        {/* <MDBCol md='6'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Guest Attendence Data</MDBCardTitle>
              <MDBTable responsive>
                <MDBTableHead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Attendence</th>
                    <th scope="col">TicketBought</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
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
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>

          </MDBCard>
        </MDBCol> */}

      </MDBRow>
    </MDBContainer>





  )

}
};
export default AttendenceTable;
