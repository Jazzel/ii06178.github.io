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


function Schedule(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
    let shouldMakeButton = {
        Add: true,
        Edit: true,
        Save: true,
        Search: true,
        Refresh: true
    };
    const schedCollectionRef = collection(database, "schedules")
    const getData = async (rowData, setRowData) => {
        const rows = await getDocs(schedCollectionRef);
        // TODO: Remove
        setRowData([])
        await rows.forEach(async (attend) => {

            const sem = await getDoc(attend.data().Semester);
            
            setRowData([...rowData,
            {
                // endtime: attend.data().EndTime,
                season: sem.data().Season,
                year: sem.data().Year,
                // starttime: attend.data().StartTime,
              

            }])

        });
        // setRowData(lstData);
    }

    

    const handleAdd = (rowData, setRowData) => {
        setRowData([
          ...rowData,
          {
            endtime:"",
            season: "", year: "", starttime: ""
          },
        ]);
      };

    const getFilteredRows = (rowData, searchQuery) => {
        return rowData.filter(row => row.season.toLowerCase().includes(searchQuery)
            || row.year.toLowerCase().includes(searchQuery))

    }
    let fields = [
        "EndTime",
        "Season",
        "Year",
        "StartTime"
    ]
    const getRowValues = (row) => {
        return [
            // row.endtime,
            row.season,
            row.year,
            // row.starttime
        ]
    }

    const makeEditRow = (row, i, handleCheckChange, handleInputChange, makedeleteButton) => {
        return (
            <>
            <TableRow>
            <TableCell padding="none">
                {/* <input
                value={row.endtime}
                name="name"
                onChange={(e) => handleInputChange(e, i)}
                /> */}
            </TableCell>
            <TableCell padding="none">
                <input
                value={row.season}
                name="role"
                onChange={(e) => handleInputChange(e, i)}
                />    
            </TableCell>
            <TableCell padding="none">
                <input
                value={row.year}
                name="role"
                onChange={(e) => handleInputChange(e, i)}
                />    
            </TableCell>
            <TableCell padding="none">
                {/* <input
                value={row.starttime}
                name="role"
                onChange={(e) => handleInputChange(e, i)}
                />     */}
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
                            containsCollapsable={true}
                            generateCollapsable={(rowinfo) => {
                                return <CustomTable 
                                    shouldMakeButton={shouldMakeButton}
                                    getData={getData}
                                    getFilteredRows={getFilteredRows}
                                    containsCollapsable={false}
                                    generateCollapsable={()=>{} }
                                    fields={fields}
                                    getRowValues={getRowValues}
                                    onEdit={() => { }}
                                    onSave={() => { }}
                                    onDelete={() => { }}
                                    onAdd={handleAdd}
                                    geteditableRow={makeEditRow}
                                />
                            }}
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

export default Schedule;