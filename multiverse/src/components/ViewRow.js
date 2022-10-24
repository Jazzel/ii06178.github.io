// import React, { useEffect, useState } from "react";
import * as React from 'react';
import { TableCell, TableRow } from "@mui/material";
import IconButton from '@mui/material/IconButton';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function ViewRow({columns,open,setOpen }) {
    return (
        <>
        <React.Fragment>
      {/* <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}> */}
        <TableCell>
        <IconButton
        
            aria-label="expand row"
            size="small"
            onClick={() =>  setOpen(!open)}
          >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}

          </IconButton>
            
            </TableCell>
            {
                columns.map((value, index) => {
                    return (
                        <TableCell>
                            {value}
                        </TableCell>)
                        
                })
            }
            {/* </TableCell> */}
      {/* </TableRow> */}
    </React.Fragment>
        </>
    )
}

export default ViewRow;