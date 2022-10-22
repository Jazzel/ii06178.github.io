import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box, Button, Snackbar, Table,
  TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";


function TableDemo() {

  // Defining a state named rows
  // which we can update by calling on setRows function
  const [rows, setRows] = useState([
    { id: 1, check: true, name: "Ifrah", role: "manager", ticket: "No" },
  ]);

  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1, check: false,
        name: "", role: "", ticket: ""
      },
    ]);
    setEdit(true);
  };

  // Function to handle edit
  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };
  const makeTableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell>Check</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Ticket</TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
      </TableHead>
    )
  }

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };

  return (
    <TableBody>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        className={{ bottom: "104px" }}
      >
        <Alert onClose={handleClose} severity="success">
          Record saved successfully!
        </Alert>
      </Snackbar>
      <Box margin={1}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {isEdit ? (
              <div>
                <Button onClick={handleAdd}>
                  <AddBoxIcon onClick={handleAdd} />
                  ADD
                </Button>
                {rows.length !== 0 && (
                  <div>
                    {disable ? (
                      <Button disabled align="right" onClick={handleSave}>
                        <DoneIcon />
                        SAVE
                      </Button>
                    ) : (
                      <Button align="right" onClick={handleSave}>
                        <DoneIcon />
                        SAVE
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Button onClick={handleAdd}>
                  <AddBoxIcon onClick={handleAdd} />
                  ADD
                </Button>
                <Button align="right" onClick={handleEdit}>
                  <CreateIcon />
                  EDIT
                </Button>
              </div>
            )}
          </div>
        </div>
        <TableRow align="center"></TableRow>

        <Table
          className="table table-striped table-hover table-responsive"
          size="small"
          aria-label="a dense table"
        >
         {makeTableHeader()}
          <TableBody>
            {rows.map((row, i) => {
              return (
                <div>
                  <TableRow>
                    {isEdit ? (
                      <div>
                        <TableCell padding="none">
                          <input type="checkbox"
                            checked={row.check}
                            name="check"
                            onChange={(e) => handleInputChange(e, i)}
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
                            <option value=""></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                          </select>
                        </TableCell>
                      </div>
                    ) : (
                      <div>
                        <TableCell component="th" scope="row">
                          {row.firstname}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.lastname}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {row.city}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                        ></TableCell>
                      </div>
                    )}
                    {isEdit ? (
                      <Button className="mr10" onClick={handleConfirm}>
                        <ClearIcon />
                      </Button>
                    ) : (
                      <Button className="mr10" onClick={handleConfirm}>
                        <DeleteOutlineIcon />
                      </Button>
                    )}
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
                  </TableRow>
                </div>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </TableBody>
  );
}

export default TableDemo;
