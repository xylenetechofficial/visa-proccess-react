import { VendorInterface } from '../type'
import { Paper, } from '@mui/material';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';






export default function Main(props: { vendorList: VendorInterface[], onClickEdit: any, onClickDelete: any }) {
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
                        {props.vendorList.map((ele, index) => (

                            <TableRow key={index}>
                                <TableCell >{index + 1}</TableCell>
                                <TableCell > {ele.name}</TableCell>
                                <TableCell >

                                   <div className='flex justify-end items-end'>
                                   <BlueButton text={" EDIT"}  onClick={() => {
                                        props.onClickEdit(ele)
                                    }} />

                                    <RedButton text={"DELETE"}  onClick={() => {
                                        props.onClickDelete(ele)
                                    }} />
                                   </div>

                                </TableCell>
                            </TableRow>
                        ))}



                    </TableBody>
                </Table>
            
        </div>
    )
}


