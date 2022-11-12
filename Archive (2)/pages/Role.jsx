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


function Role(){
    // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
    let shouldMakeButton = {
        Add: true,
        Edit: true,
        Save: true,
        Search: true,
        Refresh: true
    };

    let fields = [
        "Name",
    ]

    const roleCollectionRef = collection(database, "roles")
    const getData = async (rowData, setRowData) => {
        const rows = await getDocs(roleCollectionRef);
        // TODO: Remove
        setRowData((rowData) => []);
        await rows.forEach(async (attend) => {

            setRowData((rowData) => [...rowData,
            {   
                role: attend,
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
            name: "",
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
        const attends = await getDocs( roleCollectionRef);
        list.forEach(async (row, i) =>{
            const roleq = query(collection(database, "roles"), where("Name", "==", row.name));
            const rolequerySnapshot = await getDocs(roleq);

            if (rolequerySnapshot.empty){
                const docRef = await addDoc(roleCollectionRef ,{
                    Name: row.name,
                });
            }
        });
    }

    const deleteRowinDB = async (list, i) => {
        const attends = await getDocs(roleCollectionRef);
        const docs = attends.docs
        await deleteDoc(docs[i].ref)
    }

    const updateRowsinDB = async (list) => {
        const attends = await getDocs(roleCollectionRef);
        attends.docs.forEach(async (attend, i) => {
          // doc.data() is never undefined for query doc snapshots
            list.forEach(async (row,i)=> {
                
                if (attend.id === row.role.id){
                    
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

export default Role;