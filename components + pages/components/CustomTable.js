import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import ViewRow from "./ViewRow";
import ViewRowNew from "./ViewRowNew";


function CustomTable({shouldMakeButton,getData,getFilteredRows,fields,containsCollapsable,getRowValues,onSave,onEdit,onDelete,generateCollapsable}) {
    const [currentlyEditing, setcurrentlyEditing] = useState(true);
    const [searchQuery, setSearchQuery] = useState("")

    const makeButton = (ButtonIcon, ButtonText, doOnClick, shouldMake) => {
        if (!shouldMake) {
            return <></>
        }
        return (
            <Button onClick={doOnClick}>
                {ButtonIcon}
                {ButtonText}
            </Button>
        );
    }
    let [rowData, setRowData] = useState([])
    useEffect(() => {
        getData(rowData,setRowData)
    }, []
    )
    
    




    const makeSaveOrEditButton = () => {
        if (currentlyEditing == true) {
            return makeButton(<DoneIcon />, "SAVE", () => { setcurrentlyEditing(false);onSave() }, shouldMakeButton.Save)
        }
        else {
            return makeButton(<CreateIcon />, "EDIT", () => { setcurrentlyEditing(true);onEdit() }, shouldMakeButton.Edit)
        }
    }
    const searchBar = (doOnChange, shouldMake = true) => {
        if (!shouldMake) {
            return <></>
        }
        return (
            <div>

                <input
                    className="search"
                    placeholder="Search..."
                    onChange={doOnChange}
                    value={searchQuery}
                />
            </div>)
    };


    const makeTableHeader = () => {
        return (
            <TableHead>
                <TableRow>
                {containsCollapsable && <TableCell></TableCell>}
                    {
                        fields.map((value,index)=> <TableCell>{value}</TableCell>)
                    }

                    {/* <TableCell align="center"></TableCell> */}
                </TableRow>
            </TableHead>
        )
    }
    


    return (
        <Box margin={1}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>

                    <div className="TableButtons">
                        {makeButton(<AddBoxIcon />, "ADD", () => { console.log("added") }, shouldMakeButton.Add)}
                        {makeSaveOrEditButton()}
                        {makeButton(<></>, "Refresh", () => { rowData=[]; getData(rowData,setRowData) }, shouldMakeButton.Refresh)}
                    </div>
                    {searchBar((e) => {
                        setSearchQuery(e.target.value.toLowerCase());
                    })}
                    <Table
                        className="table table-striped table-hover table-responsive"
                        size="small"
                        aria-label="a dense table"
                    >
                        {makeTableHeader()}
                        <TableBody>
                            {getFilteredRows(rowData,searchQuery).map((row, i) => {
                                return <ViewRowNew columns={getRowValues(row)} isCollapsable = {containsCollapsable} generateCollapsable= {generateCollapsable}/>
                            })}
                        </TableBody>
                    </Table>

                </div>
            </div>
        </Box>
    );
}

export default CustomTable;
