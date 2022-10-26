import React from "react";
import CustomTable from "../components/CustomTable";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import DataForm from "../components/dataform";
import DataTable from "../components/datatable";
import DataTableMUI from "../components/datatablemui";
import { addDoc, collection, getDoc, getDocs, updateDoc, query, where, } from "firebase/firestore";
import { database } from "../firebase";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment
} from "@mui/material";
import AttendenceForm from "../components/attendenceform";


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
                student: student,
                role_: role,
                name: student.data().FullName,
                role: role.data().Name,
                check: attend.data().Attendance,
                ticket: attend.data().TicketBought,

            }])

        });
        // setRowData(lstData);
    }

    const detActionOnSave = (list, addOn, editOn) => {
        if (addOn){
            addRowsinDB(list);
        }
        else if (editOn){
            updateRowsinDB(list);
        }
    }

    const addRowsinDB = async (list) => {
        const attends = await getDocs(attendenceCollectionRef);
        list.forEach(async (row, i) =>{
            const nameq = query(collection(database, "students"), where("FullName", "==", row.name));
            const namequerySnapshot = await getDocs(nameq);
            if (!(row.hasOwnProperty("student")) && namequerySnapshot.empty){
                const docRef = await addDoc(collection(database, "students"), {
                    FullName: row.name,
                    HUID: "None",
                    ExecutivePosition: "None",
                    IBAN: "None",
                    Password: "",
                    Batch: "None",
                    BankName: "None",
                    PhoneNumber: "None"
                });
                
            }
            else if (!(namequerySnapshot.empty)){
                const students = namequerySnapshot.docs()
                const student = students[0]
                console.log(student)
            }
        });
    }

    const updateRowsinDB = async (list) => {
        const attends = await getDocs(attendenceCollectionRef);
        attends.docs.forEach(async (attend, i) => {
          // doc.data() is never undefined for query doc snapshots
            list.forEach(async (row,i)=> {
                
                if ((row.hasOwnProperty("student"))&& attend.data().Student.id === row.student.id){
                    var {changeName, changeRole} = false;
                    const dbstudent = await getDoc(attend.data().Student)
                    const dbrole = await getDoc(attend.data().Role)
                    if (dbstudent.data().FullName !== row.name){
                        changeName = true;
                    }
                    if (dbrole.data().Name !== row.role){
                        changeRole = true;
                    }
                    await updateDoc(attend.ref, {
                        Attendance: list[i]["check"],
                        TicketBought: list[i]["ticket"]
                        });
                    if (changeName){
                        await updateDoc(attend.data().Student, {
                            FullName: row.name,
                        });
                    }
                    if (changeRole){
                        await updateDoc(attend.data().Role, {
                            Name: row.role,
                        });
                    }
                }

            });
        //   console.log(attend.data())
        });
      };

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
                                    onSave={detActionOnSave}
                                    onDelete={() => { }}
                                    onAdd={handleAdd}
                                    geteditableRow={makeEditRow}
                                />
                            }}
                            fields={fields}
                            getRowValues={getRowValues}
                            onEdit={() => { }}
                            onSave={updateRowsinDB}
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