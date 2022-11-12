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

import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment
} from "@mui/material";


function Semester(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
   
    let shouldMakeButton = {
        Add: true,
        Edit: true,
        Save: true,
        Search: true,
        Refresh: true
    };

    let fields = [
        "Season",
        "Year"
    ]

    const semesterCollectionRef = collection(database, "semesters")
    const getData = async (rowData, setRowData) => {
        const rows = await getDocs(semesterCollectionRef);
        // TODO: Remove
        setRowData((rowData) => []);
        await rows.forEach(async (attend) => {

            setRowData((rowData) => [...rowData,
            {   
                semester: attend,
                season: attend.data().Season,
                year: attend.data().Year,
            }])

        });
        // setRowData(lstData);
    }

    const getFilteredRows = (rowData, searchQuery) => {
        return rowData.filter(row => row.season.toLowerCase().includes(searchQuery)
        ||  row.year.includes(searchQuery))
    }

    const getRowValues = (row) => {
        return [

            row.season,
            row.year
        
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
            season: "",
            year: ""
          },
        ]);

    };

    const makeEditRow = (row, i, handleCheckChange, handleInputChange, makedeleteButton) => {
        return (
            <>
            <TableRow>

            <TableCell padding="none">
                <input
                value={row.season}
                name="season"
                onChange={(e) => handleInputChange(e, i)}
                />
            </TableCell>
            <TableCell padding="none">
                <input
                value={row.year}
                name="year"
                onChange={(e) => handleInputChange(e, i)}
                />
            </TableCell>
            
            {makedeleteButton(i)}
            </TableRow>
            </>
        )
    }

    const addRowsinDB = async (list) => {
        const attends = await getDocs( semesterCollectionRef);
        list.forEach(async (row, i) =>{
            const semesterq = query(collection(database, "semesters"), where("Season", "==", row.season), where("Year", "==", row.year));
            const semquerySnapshot = await getDocs(semesterq);

            if (semquerySnapshot.empty){
                const docRef = await addDoc(semesterCollectionRef ,{
                    Season: row.season,
                    Year: row.year,
                });
            }
        });
    }


    const deleteRowinDB = async (list, i) => {
        const attends = await getDocs(semesterCollectionRef);
        const docs = attends.docs
        await deleteDoc(docs[i].ref)
    }

    const updateRowsinDB = async (list) => {
        const attends = await getDocs(semesterCollectionRef);
        attends.docs.forEach(async (attend, i) => {
          // doc.data() is never undefined for query doc snapshots
            list.forEach(async (row,i)=> {
                
                if (attend.id === row.semester.id){
                    
                    await updateDoc(attend.ref, {
                        Season: list[i]["season"],
                        Year: list[i]["year"],
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

export default Semester;