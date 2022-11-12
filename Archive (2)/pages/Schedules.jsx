import React from "react";
import AttendenceForm from "../components/attendenceform";
import AttendenceTable from "../components/attendencetable";
import CustomTable from "../components/CustomTable";
import DashFooter from '../components/dash-footer';
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import TableDemo from "../components/attendencetablemui";


import { addDoc, collection, getDoc, getDocs, updateDoc, query, where, deleteDoc, } from "firebase/firestore";
import { database } from "../firebase";
import { Timestamp } from 'firebase/firestore'

import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment
} from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function Schedules(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
    let shouldMakeButton = {
        Add: true,
        Edit: true,
        Save: true,
        Search: true,
        Refresh: true
    };

    let fields = [
        "StartTime",
        "EndTime",
        "Semester"
    ]

    const schCollectionRef = collection(database, "schedules")
    const getData = async (rowData, setRowData) => {
        const rows = await getDocs(schCollectionRef);
        // TODO: Remove
        setRowData((rowData) => []);
        await rows.forEach(async (attend) => {

            const semester_ = await getDoc(attend.data().Semester);
            setRowData((rowData) => [...rowData,
            {   
                schedule: attend,
                starttime: attend.data().StartTime.toDate(),
                endtime: attend.data().EndTime.toDate(),
                semester: semester_.data().Season + "-" + semester_.data().Year,
            }])
        });
        // setRowData(lstData);
    }

    const getFilteredRows = (rowData, searchQuery) => {
        return rowData.filter(row => row.semester.toLowerCase().includes(searchQuery) 
        || row.starttime.includes(searchQuery) || row.endtime.includes(searchQuery))
    }
    
    const getRowValues = (row) => {
        return [

            row.starttime.toLocaleString(),
            row.endtime.toLocaleString(),
            row.semester,
        
        ]
    }

    const detActionOnSave = (list, addOn, editOn) => {
        if (addOn){
            addRowsinDB(list);
        }
        else if (editOn){
            updateRowsinDB(list);
        }
    }

    const handleAdd = (rowData, setRowData) => {
        setRowData([
          ...rowData,
          {
            starttime: new Date(),
            endtime: new Date(),
            semester: "",

          },
        ]);

    };

    const makeEditRow = (row, i, handleCheckChange, handleInputChange, makedeleteButton) => {
        return (
            <>
            <TableRow>

            <TableCell padding="none">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker 
                        label="StartTime"
                        name="starttime"
                        value={row.starttime}
                        onChange={(e) => handleInputChange(new Date(e), i, "starttime")}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </TableCell>
            <TableCell padding="none">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker 
                    label="EndTime"
                    name="endtime"
                    value={row.endtime}
                    onChange={(e) => handleInputChange(new Date(e), i, "endtime")}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
            </TableCell>
            <TableCell padding="none">
                <input
                value={row.semester}
                name="semester"
                onChange={(e) => handleInputChange(e, i)}
                />
            </TableCell>
            
            {makedeleteButton(i)}
            </TableRow>
            </>
        )
    }

    const addRowsinDB = async (list) => {
        const attends = await getDocs( schCollectionRef);
        list.forEach(async (row, i) =>{
            const semq = query(collection(database, "semesters"), 
                            where("Season", "==", row.semester.split("-")[0]) ,
                            where("Year", "==", row.semester.split("-")[1]));
            const semquerySnapshot = await getDocs(semq);
            let sem = null;
            if (semquerySnapshot.empty){
                    sem = await addDoc(collection(database, "semesters") , {
                        Season: row.semester.split("-")[0],
                        Year: row.semester.split("-")[1]
                    })

                    const docRef = await addDoc(schCollectionRef , {
                        Semester: sem,
                        StartTime: Timestamp.fromDate(row.starttime),
                        EndTime: Timestamp.fromDate(row.endtime)
                    });
                }
            else{
                sem = semquerySnapshot.docs[0]
                const schq = query(collection(database, "schedules"), 
                            where("Semester", "==", sem.ref) , 
                            where("StartTime", "==", Timestamp.fromDate(row.starttime)),
                            where("EndTime", "==", Timestamp.fromDate(row.endtime)));

                const schquerySnapshot = await getDocs(schq);
                if (schquerySnapshot.empty){

                    const docRef = await addDoc(schCollectionRef , {
                        Semester: sem.ref,
                        StartTime: Timestamp.fromDate(row.starttime),
                        EndTime: Timestamp.fromDate(row.endtime)
                    });
                }
            }
            
            
        });
    }

    const deleteRowinDB = async (list, i) => {
        const attends = await getDocs(schCollectionRef);
        const docs = attends.docs
        await deleteDoc(docs[i].ref)
    }

    const updateRowsinDB = async (list) => {
        const attends = await getDocs(schCollectionRef);
        attends.docs.forEach(async (attend, i) => {
          // doc.data() is never undefined for query doc snapshots
            list.forEach(async (row,i)=> {
                
                
                if (attend.id === row.schedule.id){
                    const semq = query(collection(database, "semesters"), 
                            where("Season", "==", row.semester.split("-")[0]) ,
                            where("Year", "==", row.semester.split("-")[1]));
                    const semquerySnapshot = await getDocs(semq);
                    let sem = null;
                    if (semquerySnapshot.empty){
                        sem = await addDoc(collection(database, "semesters") , {
                            Season: row.semester.split("-")[0],
                            Year: row.semester.split("-")[1]
                        })
                    }
                    else{
                        sem = semquerySnapshot.docs[0].ref
                    }
                    await updateDoc(attend.ref, {
                        Semester: sem,
                        StartTime: Timestamp.fromDate(row.starttime),
                        EndTime: Timestamp.fromDate(row.endtime)
                        });             
                }
            });
        });
      };




        return(
            <div>
                <DashHeader/>
               <DashNav/>
               <main id="main" class="main">
               <section className="section">
               {/* <AttendenceForm/>
               <AttendenceTable/> */}
               {/* <TableDemo/> */}
               <div className="container">
               <CustomTable shouldMakeButton={shouldMakeButton}
                            getData={getData}
                            getFilteredRows={getFilteredRows}
                            containsCollapsable={false}
                            generateCollapsable={() => {}}
                            fields={fields}
                            getRowValues={getRowValues}
                            onEdit={() => { }}
                            onSave={detActionOnSave}
                            onDelete={deleteRowinDB}
                            onAdd={handleAdd}
                            geteditableRow={makeEditRow}
                />
               </div>
               </section>
               </main>
               <DashFooter/>
            </div>
           
           

        )
}

export default Schedules;