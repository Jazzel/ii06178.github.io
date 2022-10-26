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


function Role(){
        // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
        let shouldMakeButton = {
            Add: true,
            Edit: true,
            Save: true,
            Search: true,
            Refresh: true
        };
        const roleCollectionRef = collection(database, "roles")
        const getData = async (rowData, setRowData) => {
            const rows = await getDocs(roleCollectionRef);
            setRowData([])
            await rows.forEach(async (rol) => {
    
                
                setRowData([...rowData,
                {
                    name: rol.data().Name,
                    
            
    
                }])
    
            });
            // setRowData(lstData);
        }
    
        
    
        const handleAdd = (rowData, setRowData) => {
            setRowData([
              ...rowData,
              {
                
                name: ""
              },
            ]);
          };
    
        const getFilteredRows = (rowData, searchQuery) => {
            return rowData.filter(row => row.name.toLowerCase().includes(searchQuery))
    
        }
        let fields = [
           
            "Name",
           
           
        ]
        const getRowValues = (row) => {
            return [
                
                row.name,
             
            ]
        }
    
        const makeEditRow = (row, i, handleCheckChange, handleInputChange, makedeleteButton) => {
            return (
                <>
                <TableRow>
                
                <TableCell padding="none">
                    <input
                    value={row.name}
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

export default Role;