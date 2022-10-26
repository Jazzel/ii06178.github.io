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
import { addDoc, collection, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { database } from "../firebase";
import ViewRow from "./ViewRow";
import { checkActionCode } from "firebase/auth";


function TableDemo() {


  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [query, setQuery] = useState("");
  const [attendence, setAttendence] = useState([]);
  const attendenceCollectionRef = collection(database, "students_in_events")
  
  const [rows, setRows] = useState(
    []
  );

  useEffect(() => {
    getAttendence(rows, setRows)
  }, [])


  const getAttendence = async (rows, setRows) => {

    const attends = await getDocs(attendenceCollectionRef);
    setRows((rows) => [])

    await attends.forEach(async (attend) => {

      const student = await getDoc(attend.data().Student);
      const role = await getDoc(attend.data().Role);
      const event = await getDoc(attend.data().Event);

      setRows([
        ...rows,
        {
          name: student.data().FullName,
          role: role.data().Name,
          check: attend.data().Attendance,
          ticket: attend.data().TicketBought,
        },
      ]);
    });
  }
  

  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  // Function to handle edit
  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  const updateRowsinDB = async (list) => {
    const attends = await getDocs(attendenceCollectionRef);
    attends.docs.forEach(async (attend, i) => {
      // doc.data() is never undefined for query doc snapshots
      await updateDoc(attend.ref, {
        Attendance: list[i]["check"]
      });
    });
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    updateRowsinDB(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };

  const makeTableHeader = () => {
    return (
      <TableHead>
        <Button onClick={() => getAttendence(rows, setRows)}>Refresh</Button>
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <TableRow>
          <TableCell>Check</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Ticket</TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>

      </TableHead>
    )
  }

  const makeEditRow = (row, i) => {
    return (
      <>
        <TableCell padding="none">
          <input type="checkbox"
            checked={row.check}
            name="check"
            onClick={(e) => handleInputChange(e, i)}
          />
        </TableCell>
        <TableCell padding="none">
          {row.name}
        </TableCell>
        <TableCell padding="none">
          {row.role}
        </TableCell>
        <TableCell padding="none">
          {row.ticket}
        </TableCell>
      </>
    )
  }
  const rowValues = (row) => {
    return [
      <input type="checkbox"
        checked={row.check}
        disabled
      />,
      row.name,
      row.role,
      row.ticket
    ]
  }

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  
  const handleInputChange = (e, index) => {
    setDisable(false);
    const name = e.target.name;
    const checked = e.target.checked;
    const list = [...rows];
    list[index][name] = checked;
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
            {rows.filter(row => row.name.toLowerCase().includes(query) || row.role.toLowerCase().includes(query)).map((row, i) => {
              // {rows.map((row, i) => {
              return (
                <TableRow>
                  {isEdit ? makeEditRow(row, i) : <ViewRow columns={rowValues(row)} />}
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
        </Table>
      </Box>
    </TableBody>
  );
}

export default TableDemo;
