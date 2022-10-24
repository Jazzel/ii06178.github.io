import React, { useEffect, useState } from "react";
import { TableCell } from "@mui/material";
import IconButton from '@mui/material/IconButton';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function ViewRow({columns }) {
    return (
        <>
        <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {}}
          >
          {true ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}

          </IconButton>
            
            {
                columns.map((value, index) => {
                    return (
                        <TableCell component="td" scope="row">
                            {value}
                        </TableCell>)
                        
                })
            }
        </>
    )
}

export default ViewRow;