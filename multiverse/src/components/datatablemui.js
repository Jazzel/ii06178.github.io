import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box, Button, Snackbar, Table,
  TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase";


function DataTableMUI() {


  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [query, setQuery] = useState("");
  const [student, setStudent] = useState([]);
  const studentCollectionRef = collection(database, "students")
  const studentCollectionRef = collection(database, "semesters")
  useEffect(() => {
    getStudent()
  }, [])
  useEffect(() => {
    console.log(student)
  }, [student])
  const getStudent = async () => {

    const stdts = await getDocs(studentCollectionRef);

    stdts.forEach(async (stdt) => {
      console.log(stdt.data()); 
      setRows([
        ...rows,
        {
          
          id: stdt.data().HUID,
          name: stdt.data().FullName,
          batch:stdt.data().Batch,
          exec:stdt.data().ExecutivePosition,
          password: stdt.data().Password,
          phone: stdt.data().PhoneNumber,

        },
      ]);
    });
  }
  const [rows, setRows] = useState(
    [ ]
  );
  const [rows2, setRows2] = useState(
    [ ]
  );

  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id:"",
        name: "", batch: "", exec: "", password:"", phone:""
      },
    ]);
    setEdit(true);
  };

  // Function to handle edit
  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };

  const makeTableHeader = () => {
    return (
      <TableHead>
        <Button onClick={() => getStudent()}>Refresh</Button>
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Batch</TableCell>
          <TableCell>Executive Postion</TableCell>
          <TableCell>Password</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>

      </TableHead>
    )
  }

  const makeEditRow = (row, i) => {
    return (
      <>
        <TableCell padding="none">
          <input
            checked={row.id}
            name="id"
            onChange={(e) => handleInputChange(e, i)}
          />
        </TableCell>
        <TableCell padding="none">
          <input
            value={row.name}
            name="name"
            onChange={(e) => handleInputChange(e, i)}
          />
        </TableCell>
        <TableCell padding="none">
          <select
            style={{ width: "100px" }}
            name="batch"
            value={row.batch}
            onChange={(e) => handleInputChange(e, i)}
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>

          </select>
        </TableCell>
        <TableCell padding="none">
          <select
            style={{ width: "100px" }}
            name="exec"
            value={row.exec}
            onChange={(e) => handleInputChange(e, i)}
          >
            <option value="None"></option>
            <option value="President">President</option>
            <option value="Vice President">vice President</option>

          </select>
        </TableCell>
        <TableCell padding="none">
          <input
            value={row.password}
            name="password"
            onChange={(e) => handleInputChange(e, i)}
          />
        </TableCell>
        <TableCell padding="none">
          <input
            value={row.phone}
            name="phone"
            onChange={(e) => handleInputChange(e, i)}
          />
           </TableCell>
        
      </>
    )
  }
  const makeViewRow = (row) => {
    console.log(row)
    return (
      <>
      <TableCell component="td" scope="row">
          {row.id}
        </TableCell>
        <TableCell component="td" scope="row">
          {row.name}
        </TableCell>
        <TableCell component="td" scope="row" align="center">
          {row.batch}
        </TableCell>
        <TableCell component="td" scope="row" align="center">
          {row.exec}
        </TableCell>
        <TableCell component="td" scope="row">
          {row.password}
        </TableCell>
        <TableCell component="td" scope="row"> 
        {row.phone}</TableCell>
      </>
    )
  }
  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };



  return (
    <TableBody>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        className={{ bottom: "104px" }}
      >
        <Alert onClose={handleClose} severity="success">
          Record saved successfully!
        </Alert>
      </Snackbar>
      <Box margin={1}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {isEdit ? (
              <div>
                <Button onClick={handleAdd}>
                  <AddBoxIcon onClick={handleAdd} />
                  ADD
                </Button>
                {rows.length !== 0 && (
                  <div>
                    {disable ? (
                      <Button disabled align="right" onClick={handleSave}>
                        <DoneIcon />
                        SAVE
                      </Button>
                    ) : (
                      <Button align="right" onClick={handleSave}>
                        <DoneIcon />
                        SAVE
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Button onClick={handleAdd}>
                  <AddBoxIcon onClick={handleAdd} />
                  ADD
                </Button>
                <Button align="right" onClick={handleEdit}>
                  <CreateIcon />
                  EDIT
                </Button>
              </div>
            )}
          </div>
        </div>
        <TableRow align="center"></TableRow>

        <Table
          className="table table-striped table-hover table-responsive"
          size="small"
          aria-label="a dense table"
        >
          {makeTableHeader()}
          <TableBody>
            {rows.filter(row => row.id.toLowerCase().includes(query) || row.name.toLowerCase().includes(query)|| row.batch.toLowerCase().includes(query) || row.exec.toLowerCase().includes(query) || row.phone.toLowerCase().includes(query)).map((row, i) => {
             
              return (
                <TableRow>
                  {isEdit ? makeEditRow(row, i) : makeViewRow(row)}
                  <Button className="mr10" onClick={handleConfirm} >
                    {isEdit ? <ClearIcon /> : <DeleteOutlineIcon />}
                  </Button>
                  {showConfirm && (
                    <div>
                      <Dialog
                        open={showConfirm}
                        onClose={handleNo}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Confirm Delete"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Are you sure to delete
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={() => handleRemoveClick(i)}
                            color="primary"
                            autoFocus
                          >
                            Yes
                          </Button>
                          <Button
                            onClick={handleNo}
                            color="primary"
                            autoFocus
                          >
                            No
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  )}
                </TableRow>

              );
            })}
          </TableBody>
        </Table >
      </Box >
    </TableBody >
  );
}

export default DataTableMUI;
