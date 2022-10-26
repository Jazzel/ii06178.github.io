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


function CustomTable({ shouldMakeButton, getData, getFilteredRows, fields, containsCollapsable, getRowValues, onSave, onEdit, onAdd, onDelete, generateCollapsable, geteditableRow }) {
    const [currentlyEditing, setcurrentlyEditing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")
    const [showConfirm, setShowConfirm] = React.useState(false);

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
        getData(rowData, setRowData)
    }, []
    )

    const handleConfirm = () => {
        setShowConfirm(true);
    };

    const handleNo = () => {
        setShowConfirm(false);
      };

    const handleRemoveClick = (i) => {
    const list = [...rowData];
    list.splice(i, 1);
    setRowData(list);
    setShowConfirm(false);
    };

    const handleInputChange = (e, index) => {
        const name = e.target.name;
        const value = e.target.value;
        const list = [...rowData];
        list[index][name] = value;
        setRowData(list);
    };

    const handleCheckChange = (e, index) => {
        const name = e.target.name;
        const checked = e.target.checked;
        const list = [...rowData];
        list[index][name] = checked;
        setRowData(list);
    };


    const makeSaveOrEditButton = () => {
        if (currentlyEditing == true) {
            return makeButton(<DoneIcon />, "SAVE", () => { setcurrentlyEditing(false); onSave() }, shouldMakeButton.Save)
        }
        else {
            return makeButton(<CreateIcon />, "EDIT", () => { setcurrentlyEditing(true); onEdit() }, shouldMakeButton.Edit)
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
                        fields.map((value, index) => <TableCell>{value}</TableCell>)
                    }

                    {/* <TableCell align="center"></TableCell> */}
                </TableRow>
            </TableHead>
        )
    }

    const makedeleteButton = (i) => {
        return <>
           
        <Button className="mr10" onClick={handleConfirm} >
            {currentlyEditing ? <ClearIcon /> : <DeleteOutlineIcon />}
        </Button>
        {showConfirm && (
            <div>
                <Dialog
                    open={showConfirm}
                    onClose={handleNo}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Confirm Delete"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure to delete
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => handleRemoveClick(i)}
                            color="primary"
                            autoFocus
                        >
                            Yes
                        </Button>
                        <Button
                            onClick={handleNo}
                            color="primary"
                            autoFocus
                        >
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )}
         
        </>
    }

    return (
        <Box margin={1}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>

                    <div className="TableButtons">
                        {makeButton(<AddBoxIcon />, "ADD", () => { setcurrentlyEditing(true); onAdd(rowData, setRowData); }, shouldMakeButton.Add)}
                        {makeSaveOrEditButton()}
                        {makeButton(<></>, "Refresh", () => { rowData = []; getData(rowData, setRowData) }, shouldMakeButton.Refresh)}
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
                            {getFilteredRows(rowData, searchQuery).map((row, i) => {
                                return <React.Fragment>
                                    {currentlyEditing ? geteditableRow(row, i, handleCheckChange, handleInputChange, makedeleteButton) : <ViewRowNew columns={getRowValues(row)} isCollapsable={containsCollapsable} generateCollapsable={generateCollapsable } deleteButton={makedeleteButton} index={i} />}
                                    
                                </React.Fragment>
                            })}
                        </TableBody>
                    </Table>

                </div>
            </div>
        </Box>
    );
}

export default CustomTable;
