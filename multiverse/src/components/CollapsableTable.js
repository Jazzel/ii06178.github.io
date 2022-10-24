import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box, Button, Snackbar, Table,
  TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment, Collapse
} from "@mui/material";
import Typography from '@mui/material/Typography';
import TableEdit from "./tableedit";


function CollapsableTable({tableName, fields , open,id,rows,t, handleAdd, handleSave, toggleEdit, refresh,setQuery, isEdit,disable}) {
  console.log("id",id)
  const rowValues2 = (row,table) => {
     switch(table){
       case 1:
        return [row.name, row.season,row.year];
        break;
     }
  }
    return (
      
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                  {tableName}
              </Typography>
              <TableEdit handleAdd={handleAdd} handleSave={handleSave} toggleEdit={toggleEdit} refresh={refresh} setQuery={setQuery} isEdit={isEdit} rows={rows} disable={disable}/>
              <Table size="small" aria-label="purchases">
                <TableHead>
                <TableRow>
                {
                    fields.map((field, index) => {
                        return <TableCell>{field}</TableCell>
                    })
                }
            </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                  
                    <TableRow id={row.name}>
                      
                       {
                         
                        rowValues2(row,t).slice(1,rowValues2(row,t).length).map((field, index) => {
                          return <TableCell>{field}</TableCell>
                       })
                }
                    </TableRow>
                  ))} 
                </TableBody>
              </Table>
            </Box>
          </Collapse>
    )
}
export default CollapsableTable;