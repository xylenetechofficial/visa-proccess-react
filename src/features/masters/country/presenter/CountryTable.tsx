import { CountryInterface } from '../type'
import { } from '@mui/material';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';





const CountryTable = (props: { countryList: CountryInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto'>
       
                <Table >
                    <TableHead >
                        <TableHeadRow >
                            <TableHeadCell> Sr No.</TableHeadCell>
                            <TableHeadCell > Name</TableHeadCell>
                            <TableHeadCell  > Action</TableHeadCell>

                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {props.countryList.map((ele, index) => (

                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell > {ele.name}</TableCell>
                                <TableCell >

                                    <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                        props.onClickEdit(ele)
                                    }} />

                                    <RedButton text={"Delete"} preIcon='delete' onClick={() => {
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

export default CountryTable

