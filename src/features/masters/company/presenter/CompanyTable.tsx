import { CompanyInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { useState, useEffect } from "react";
import { CountryInterface } from '../../country/type';
import { readCountryList } from '../../country/repository';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';



const CompanyTable = (props: { companyList: CompanyInterface[], onClickEdit: any, onClickDelete: any, countryList: CountryInterface[] }) => {

    console.log(props.companyList)
    return (
        <div className='overflow-auto'>
            <Table >
                <TableHead >
                    <TableHeadRow>
                        <TableHeadCell > Sr No.</TableHeadCell>
                        <TableHeadCell > Name</TableHeadCell>
                        <TableHeadCell > Code</TableHeadCell>
                        <TableHeadCell > Country</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>





                        {/* <TableCell> Sr No.</TableCell> */}
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.companyList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.name}</TableCell>
                            <TableCell > {ele.code}</TableCell>
                            <TableCell > {
                                props.countryList?.map((e) => e.id == ele.country ? e.name : "")
                            }</TableCell>
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
        </div >
    )
}

export default CompanyTable

