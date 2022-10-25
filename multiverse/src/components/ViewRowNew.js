import { useEffect, useState } from "react";
import * as React from 'react';
import { Collapse, TableCell, TableRow } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function ViewRowNew({ columns, isCollapsable, makeCollapsableTable ,generateCollapsable}) {
    let [collapsableOpen, setCollapsableOpen] = useState(false);
    return (
        <>
            <React.Fragment>
                {/* <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}> */}
                <TableRow>

                {isCollapsable &&
                    <>

                    <TableCell>
                        <IconButton

                            aria-label="expand row"
                            size="small"
                            onClick={() => { setCollapsableOpen(!collapsableOpen) }}
                        >
                            {collapsableOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    </>

                }
                {
                    columns.map((value, index) => {
                        return (
                            <TableCell>
                                {value}
                            </TableCell>)

                    })
                }
                </TableRow>
                {

                <Collapse in={collapsableOpen} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              {generateCollapsable(columns)}
            </Box>
          </Collapse>

                }
                
                {/* </TableCell> */}
                {/* </TableRow> */}
            </React.Fragment>
        </>
    )
}

export default ViewRowNew;