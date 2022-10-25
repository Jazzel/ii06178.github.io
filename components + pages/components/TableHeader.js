import React, { Component, useEffect, useState } from "react";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styles, FormControl, InputLabel, OutlinedInput, InputAdornment
} from "@mui/material";

function TableHeader({ fields}) {
    console.log("Fields are", fields)
    return (
        <TableHead>

            <TableRow>
                {
                    fields.map((field, index) => {
                        return <TableCell>{field}</TableCell>
                    })
                }
            </TableRow>

        </TableHead>
    )
}

export default TableHeader;