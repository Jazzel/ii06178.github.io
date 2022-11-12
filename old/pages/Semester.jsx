import React from "react";
import AttendenceForm from "../components/attendenceform";
import AttendenceTable from "../components/attendencetable";
import TableDemo from "../components/attendencetablemui";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment
} from "@mui/material";
import CustomTable from "../components/CustomTable";



function Semester(){
    let shouldMakeButton = {
        Add: true,
        Edit: true,
        Save: true,
        Search: true,
        Refresh: true
    };
    const semCollectionRef = collection(database, "semesters")
    const getData = async (rowData, setRowData) => {
        const rows = await getDocs(semCollectionRef);
        setRowData([])
        await rows.forEach(async (rol) => {

            
            setRowData([...rowData,
            {
                season: rol.data().Season,
                year: rol.data().Year
        

            }])

        });
        // setRowData(lstData);
    }

    

    const handleAdd = (rowData, setRowData) => {
        setRowData([
          ...rowData,
          {
            
            season: "",
            year: ""
          },
        ]);
      };

    const getFilteredRows = (rowData, searchQuery) => {
        return rowData.filter(row => row.season.toLowerCase().includes(searchQuery)||row.year.toLowerCase().includes(searchQuery))

    }
    let fields = [
       
        "Season",
        "Year"
       
    ]
    const getRowValues = (row) => {
        return [
            
            row.season,
            row.year
         
        ]
    }

    const makeEditRow = (row, i, handleCheckChange, handleInputChange, makedeleteButton) => {
        return (
            <>
            <TableRow>
            
            <TableCell padding="none">
                <input
                value={row.season}
                name="name"
                onChange={(e) => handleInputChange(e, i)}
                />
            </TableCell>
            <TableCell padding="none">
                <input
                value={row.year}
                name="name"
                onChange={(e) => handleInputChange(e, i)}
                />
            </TableCell>
            {makedeleteButton(i)}
            </TableRow>
            </>
        )
      }

    return (
        <div>
            <DashHeader />
            <DashNav />
            <main id="main" class="main">
                <section className="section">
                    <div className="container">
                        {/* <DataForm/>
               <DataTable/> */}
                        <CustomTable shouldMakeButton={shouldMakeButton}
                            getData={getData}
                            getFilteredRows={getFilteredRows}
                            containsCollapsable={false}
                            generateCollapsable={()=>{}}
                            fields={fields}
                            getRowValues={getRowValues}
                            onEdit={() => { }}
                            onSave={() => { }}
                            onDelete={() => { }}
                            onAdd={handleAdd}
                            geteditableRow={makeEditRow}
                        />
                        {/* <DataTableMUI/> */}
                    </div>
                </section>

            </main>
            <DashFooter />
        </div>



    )
}

export default Semester;