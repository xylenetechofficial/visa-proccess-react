import { AgencyInterface } from '../type'
import { Paper, } from '@mui/material';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';






const AgencyTable = (props: { agencyList: AgencyInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                <Table >
                    <TableHead >
                        <TableHeadRow>
                            <TableHeadCell > Sr No.</TableHeadCell>
                            <TableHeadCell> Name</TableHeadCell>
                            <TableHeadCell > Action</TableHeadCell>

                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {props.agencyList.map((ele, index) => (

                            <TableRow key={index}>
                                <TableCell >{index + 1}</TableCell>
                                <TableCell > {ele.name}</TableCell>
                                <TableCell >

                                    <BlueButton text={" EDIT"}  onClick={() => {
                                        props.onClickEdit(ele)
                                    }} />

                                    <RedButton text={"DELETE"}  onClick={() => {
                                        props.onClickDelete(ele)
                                    }} />

                                </TableCell>
                            </TableRow>
                        ))}



                    </TableBody>
                </Table>
            
        </div>
    )
}

export default AgencyTable

