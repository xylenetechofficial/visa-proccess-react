import { CountryInterface } from '../type'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { StyledTableCell, StyledTableRow, TableStyle } from '../../../../componenets/TableStyle';





const CountryTable = (props: { countryList: CountryInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <TableContainer component={Paper}>
                <Table sx={TableStyle} >
                    <TableHead >
                        <TableRow style={{}} >
                            <StyledTableCell align='left' width={100} > Sr No.</StyledTableCell>
                            <StyledTableCell align='center' width={100}> Name</StyledTableCell>
                            <StyledTableCell align='center' width={100}> Action</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.countryList.map((ele, index) => (

                            <StyledTableRow key={index}>
                                <StyledTableCell align='left' width={100}>{index + 1}</StyledTableCell>
                                <StyledTableCell align='center' width={100}> {ele.name}</StyledTableCell>
                                <StyledTableCell align='right' width={100}>

                                    <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                        props.onClickEdit(ele)
                                    }} />

                                    <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                        props.onClickDelete(ele)
                                    }} />

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}



                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CountryTable

