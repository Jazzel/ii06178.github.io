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
  const [isEdit1, setEdit1] = React.useState(false);
  const [isEdit2, setEdit2] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [query, setQuery] = useState("");
  const [student, setStudent] = useState([]);
  const studentCollectionRef = collection(database, "students")
  const studentsemesterCollectionRef = collection(database, "students_in_semesters")
  const [collapsableTableOpen, setCollapsableTableOpen] = useState(false);
  const fieldsOfTable = ["","ID", "Name", "Batch", "Executive Position", "Password", "Phone Number", "Bank Name","IBAN"];
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
          bank: stdt.data().BankName,
          iban:stdt.data().IBAN,
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
  const handleAdd2 = () => {
    
      setRows2([
        ...rows2,
        {
          season: "",
          year: ""
        },
      ]);
    
    setEdit2(true);
  };

  const handleAdd1 = () => {
    
      setRows([
        ...rows,
        {
          id: "",
          name: "", batch: "", exec: "", password: "", phone: "", bank:"", iban:""
        },
      ]);
    
    
    
    setEdit1(true);
  };

  // Function to handle edit
  const toggleEdit1 = (i) => setEdit1(!isEdit1);

  const toggleEdit2 = (i) => setEdit2(!isEdit2);

  // Function to handle save
  const handleSave1 = () => {
    setEdit1(!isEdit1);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };
  const handleSave2 = () => {
    setEdit2(!isEdit2);
    setRows2(rows2);
    console.log("saved : ", rows2);
    setDisable(true);
    setOpen(true);
  };

  const makeEditRow1 = (row, i) => {
    return (
      <>
        <TableCell padding="none">
          <input
            value={row.id}
            name="id"
            onChange={(e) => handleInputChange1(e, i)}
          />
        </TableCell>
        <TableCell padding="none">
          <input
            value={row.name}
            name="name"
            onChange={(e) => handleInputChange1(e, i)}
          />
        </TableCell>
        <TableCell padding="none">
          <select
            style={{ width: "100px" }}
            name="batch"
            value={row.batch}
            onChange={(e) => handleInputChange1(e, i)}
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
            onChange={(e) => handleInputChange1(e, i)}
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
            onChange={(e) => handleInputChange1(e, i)}
          />
        </TableCell>
        <TableCell padding="none">
          <input
            value={row.phone}
            name="phone"
            onChange={(e) => handleInputChange1(e, i)}
          />
        </TableCell>
        <TableCell padding="none">
          <input
            value={row.bank}
            name="bank"
            onChange={(e) => handleInputChange1(e, i)}
          />
        </TableCell>
        <TableCell padding="none">
          <input
            value={row.iban}
            name="iban"
            onChange={(e) => handleInputChange1(e, i)}
          />
        </TableCell>

      </>
    )
  }
  const makeEditRow2 = (row, i) => {
    return (
      <>
       <TableCell padding="none">
          <select
            style={{ width: "100px" }}
            name="season"
            value={row.exec}
            onChange={(e) => handleInputChange2(e, i)}
          >
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>

          </select>
        </TableCell>
        <TableCell padding="none">
          <select
            style={{ width: "100px" }}
            name="year"
            value={row.year}
            onChange={(e) => handleInputChange2(e, i)}
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>

          </select>
        </TableCell>
        

      </>
    )
  }
  const rowValues = (row) => {
    return [row.id, row.name, row.batch, row.exec, row.password, row.phone,row.bank,row.iban]
  }
  

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange1 = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  const handleInputChange2 = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows2];
    list[index][name] = value;
    setRows2(list);
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

  const getFilteredRows1 = () => {
    return rows.filter(row => row.id.toLowerCase().includes(query) || row.name.toLowerCase().includes(query) || row.batch.toLowerCase().includes(query) || row.exec.toLowerCase().includes(query) || row.phone.toLowerCase().includes(query));
  }
  const getFilteredRows2 = () => {
    return rows2.filter(row => row.season.toLowerCase().includes(query) || row.year.toLowerCase().includes(query) );
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

<TableEdit handleAdd={handleAdd1}  handleSave={handleSave1} toggleEdit={toggleEdit1} refresh={getStudent} setQuery={setQuery} isEdit={isEdit1} rows={rows} disable={disable}/>

        <Table
          className="table table-striped table-hover table-responsive"
          size="small"
          aria-label="a dense table"
        >

          <TableHeader fields={fieldsOfTable} />

          <TableBody>
            {getFilteredRows1().map((row, i) => {
              if (isEdit1) {
                return (
                  <>                
                  <TableRow>
                  {makeEditRow1(row, i)}
                  </TableRow>
                  </>
                )
              }
              return (
                <>
                <TableRow>
                  {isEdit1 ? makeEditRow1(row, i) : <ViewRow columns={rowValues(row)} open={collapsableTableOpen} setOpen={setCollapsableTableOpen}  />}
                  <Button className="mr10" onClick={handleConfirm} >
                    {isEdit1 ? <ClearIcon /> : <DeleteOutlineIcon />}
                  </Button>
                  {showConfirm && <TableDialog DialogFunctions={DialogActions} i={i}/>}
                </TableRow>
                
                {!isEdit1 && <CollapsableTable tableName={tablename}  fields={fieldsOfTable2} 
                open={collapsableTableOpen} id={row.name} rows={rows2} t={table}
                handleAdd={handleAdd2}  handleSave={handleSave2} toggleEdit={toggleEdit2} refresh={getStudent} 
                setQuery={setQuery} isEdit={isEdit2} disable={disable} getFilteredRows={getFilteredRows2}/>}
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
