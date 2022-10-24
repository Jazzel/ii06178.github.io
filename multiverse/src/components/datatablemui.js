import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box, Button, Snackbar, Table,
  TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment, Collapse
} from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import TableHeader from "./TableHeader";
import ViewRow from "./ViewRow";
import TableDialog from "./TableDialog";
import CollapsableTable from "./CollapsableTable";
import TableEdit from "./tableedit";



function DataTableMUI() {


  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [query, setQuery] = useState("");
  const [student, setStudent] = useState([]);
  const studentCollectionRef = collection(database, "students")
  const studentsemesterCollectionRef = collection(database, "students_in_semesters")
  const [collapsableTableOpen, setCollapsableTableOpen] = useState(false);
  const fieldsOfTable = ["","ID", "Name", "Batch", "Executive Position", "Password", "Phone Number"];
  const fieldsOfTable2 = ["Season", "Year"];
  const table=1;
  const tablename="Membership";
  useEffect(() => {
    getStudent()
  }, [])
  useEffect(() => {
    console.log(student)
  }, [student])
  const getStudent = async () => {

    const stdts = await getDocs(studentCollectionRef);
    const semstdts=await getDocs(studentsemesterCollectionRef)
    stdts.forEach(async (stdt) => {
      console.log(stdt.data());
      setRows([
        ...rows,
        {

          id: stdt.data().HUID,
          name: stdt.data().FullName,
          batch: stdt.data().Batch,
          exec: stdt.data().ExecutivePosition,
          password: stdt.data().Password,
          phone: stdt.data().PhoneNumber,

        },
      ]);
     
    });
    semstdts.forEach(async (ss) => {
     
      const stud = await getDoc(ss.data().Student);
      const sem = await getDoc(ss.data().Semester);
      setRows2([
        ...rows2,
        {
          name:stud.data().FullName,
          season:sem.data().Season,
          year: sem.data().Year

        },
      ]);
     
    });
  }
  const [rows, setRows] = useState(
    []
  );
  const [rows2, setRows2] = useState(
    []
  );
   
  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  const handleAdd = (r) => {
    if(r==1){
      setRows([
        ...rows,
        {
          id: "",
          name: "", batch: "", exec: "", password: "", phone: ""
        },
      ]);
    
    }
    else if(r==2){
      setRows2([
        ...rows2,
        {
          season: "",
          year: ""
        },
      ]);
    }
    setEdit(true);
  };

  // Function to handle edit
  const toggleEdit = (i) => setEdit(!isEdit);

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };

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
  const rowValues = (row) => {
    return [row.id, row.name, row.batch, row.exec, row.password, row.phone]
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
  const handleConfirm = () => setShowConfirm(true);

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i) => {
    console.log('removing row',i)
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => setShowConfirm(false);

  const DialogActions = {showConfirm, handleNo, handleRemoveClick};

  const getFilteredRows = () => {
    return rows.filter(row => row.id.toLowerCase().includes(query) || row.name.toLowerCase().includes(query) || row.batch.toLowerCase().includes(query) || row.exec.toLowerCase().includes(query) || row.phone.toLowerCase().includes(query));
  }
  return (
    <>
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

<TableEdit handleAdd={handleAdd} add={1} handleSave={handleSave} toggleEdit={toggleEdit} refresh={getStudent} setQuery={setQuery} isEdit={isEdit} rows={rows} disable={disable}/>

        <Table
          className="table table-striped table-hover table-responsive"
          size="small"
          aria-label="a dense table"
        >

          <TableHeader fields={fieldsOfTable} />

          <TableBody>
            {getFilteredRows().map((row, i) => {
              if (isEdit) {
                return (
                  <>                
                  <TableRow>
                  {makeEditRow(row, i)}
                  </TableRow>
                  </>
                )
              }
              return (
                <>
                <TableRow>
                  {isEdit ? makeEditRow(row, i) : <ViewRow columns={rowValues(row)} open={collapsableTableOpen} setOpen={setCollapsableTableOpen}  />}
                  <Button className="mr10" onClick={handleConfirm} >
                    {isEdit ? <ClearIcon /> : <DeleteOutlineIcon />}
                  </Button>
                  {showConfirm && <TableDialog DialogFunctions={DialogActions} i={i}/>}
                </TableRow>
                
                {!isEdit && <CollapsableTable tableName={tablename}  fields={fieldsOfTable2} 
                open={collapsableTableOpen} id={row.name} rows={rows2} t={table}
                handleAdd={handleAdd} add={2} handleSave={handleSave} toggleEdit={toggleEdit} refresh={getStudent} 
                setQuery={setQuery} isEdit={isEdit} disable={disable}/>}
                </>
              );
            })}

          </TableBody>
        </Table > 
      </Box >

    </>
  );
}

export default DataTableMUI;
