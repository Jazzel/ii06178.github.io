import React from "react";
import CustomTable from "../components/CustomTable";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import DataForm from "../components/dataform";
import DataTable from "../components/datatable";
import DataTableMUI from "../components/datatablemui";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment
} from "@mui/material";


function MultiverseData() {
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
    let shouldMakeButton = {
        Add: true,
        Edit: true,
        Save: true,
        Search: true,
        Refresh: true
    };
    const attendenceCollectionRef = collection(database, "students_in_events")
    const getData = async (rowData, setRowData) => {
        const rows = await getDocs(attendenceCollectionRef);
        // TODO: Remove
        setRowData([])
        await rows.forEach(async (attend) => {

            const student = await getDoc(attend.data().Student);
            const role = await getDoc(attend.data().Role);
            console.log(student.data())
            setRowData([...rowData,
            {
                name: student.data().FullName,
                role: role.data().Name,
                check: attend.data().Attendance,
                ticket: attend.data().TicketBought,

            }])

        });
        // setRowData(lstData);
    }

    const handleAdd = (rowData, setRowData) => {
        setRowData([
          ...rowData,
          {
            check: false,
            name: "", role: "", ticket: ""
          },
        ]);
      };

    const getFilteredRows = (rowData, searchQuery) => {
        return rowData.filter(row => row.name.toLowerCase().includes(searchQuery)
            || row.role.toLowerCase().includes(searchQuery))

    }
    let fields = [
        "Check",
        "Name",
        "Role",
        "Ticket"
    ]
    const getRowValues = (row) => {
        return [
            <input type="checkbox"
                checked={row.check}
            />,
            row.name,
            row.role,
            row.ticket
        ]
    }

    const makeEditRow = (row, i, handleCheckChange, handleInputChange, makedeleteButton) => {
        return (
            <>
            <TableRow>
            <TableCell padding="none">
              <input type="checkbox"
                checked={row.check}
                name="check"
                onClick={(e) => handleCheckChange(e, i)}
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
                <input
                value={row.role}
                name="role"
                onChange={(e) => handleInputChange(e, i)}
                />    
            </TableCell>
            <TableCell padding="none">
                <select
                    style={{ width: "100px" }}
                    name="ticket"
                    value={row.ticket}
                    onChange={(e) => handleInputChange(e, i)}
                >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>

                </select>
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

export default MultiverseData;