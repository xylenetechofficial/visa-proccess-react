// import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

function CustomTable(props: { headingChildren: any, bodyChildren: any }) {
    return (
        <div className='overflow-auto'>
            <Table sx={{
                border: "1px solid #e7e7e7",
                "& .MuiTableRow-root:hover": {
                    backgroundColor: "#E0E0E0",
                    cursor: "pointer"
                },

                "& .MuiTableCell-head": {
                    backgroundColor: "#024453"
                }
            }} >
                <TableHead >
                   

                        {props.headingChildren}




                    
                </TableHead>
                <TableBody>
                    {props.bodyChildren}



                </TableBody>
            </Table>
        </div>
    )
}

export default CustomTable