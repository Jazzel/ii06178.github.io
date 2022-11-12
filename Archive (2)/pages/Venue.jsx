import React from "react";
import AttendenceForm from "../components/attendenceform";
import AttendenceTable from "../components/attendencetable";
import CustomTable from "../components/CustomTable";
import DashHeader from '../components/dash-header';
import DashNav from '../components/dash-nav';
import DashFooter from '../components/dash-footer';
import TableDemo from "../components/attendencetablemui";

import { addDoc, collection, getDoc, getDocs, updateDoc, query, where, deleteDoc, } from "firebase/firestore";
import { database } from "../firebase";

import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment
} from "@mui/material";

function Venue(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
    let shouldMakeButton = {
        Add: true,
        Edit: true,
        Save: true,
        Search: true,
        Refresh: true
    };
    let fields = [
        "Name"
    ]

    const venueCollectionRef = collection(database, "venues")
    const getData = async (rowData, setRowData) => {
        const rows = await getDocs(venueCollectionRef);
        // TODO: Remove
        setRowData((rowData) => []);
        await rows.forEach(async (attend) => {

            setRowData((rowData) => [...rowData,
            {   
                venue: attend,
                name: attend.data().Name,
            }])

        });
        // setRowData(lstData);
    }

    const getFilteredRows = (rowData, searchQuery) => {
        return rowData.filter(row => row.name.toLowerCase().includes(searchQuery))
    }

    const getRowValues = (row) => {
        return [

            row.name,
        
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
            name: ""
          },
        ]);

    };

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


    const addRowsinDB = async (list) => {
        const attends = await getDocs( venueCollectionRef);
        list.forEach(async (row, i) =>{
            const nameq = query(collection(database, "venues"), where("Name", "==", row.name));
            const namequerySnapshot = await getDocs(nameq);

            if (namequerySnapshot.empty){
                const docRef = await addDoc(venueCollectionRef ,{
                    Name: row.name,
                });
            }
        });
    }

    const deleteRowinDB = async (list, i) => {
        const attends = await getDocs(venueCollectionRef);
        const docs = attends.docs
        await deleteDoc(docs[i].ref)
    }

    const updateRowsinDB = async (list) => {
        const attends = await getDocs(venueCollectionRef);
        attends.docs.forEach(async (attend, i) => {
          // doc.data() is never undefined for query doc snapshots
            list.forEach(async (row,i)=> {
                console.log();
                if (attend.id === row.venue.id){
                    
                    await updateDoc(attend.ref, {
                        Name: list[i]["name"],
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
               {/* <AttendenceForm/>
               <AttendenceTable/> */}
               {/* <TableDemo/> */}
               </section>
               </main>
               <DashFooter/>
            </div>
           
           

        )
}

export default Venue;