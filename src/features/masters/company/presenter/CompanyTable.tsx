import { CompanyInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { useState, useEffect } from "react";
import { CountryInterface } from '../../country/type';
import { readCountryList } from '../../country/repository';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';



const CompanyTable = (props: { companyList: CompanyInterface[], onClickEdit: any, onClickDelete: any, countryList: CountryInterface[] , snoBase:number}) => {

    console.log(props.companyList)
    return (
        <div className='overflow-auto'>
            <Table3>
                <TableHead3 >
                    <TableHeadRow3>
                        <TableHeadCell3 > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Name</TableHeadCell3>
                        <TableHeadCell3 > Code</TableHeadCell3>
                        <TableHeadCell3 > Country</TableHeadCell3>
                        <TableHeadCell3 > Action</TableHeadCell3>





                        {/* <TableCell3> Sr No.</TableCell3> */}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.companyList.map((ele, index) => (

                        <TableRow3 key={index}>
                             <TableCell3 >{index + props.snoBase+1}</TableCell3>
                            <TableCell3 > {ele.name}</TableCell3>
                            <TableCell3 > {ele.code}</TableCell3>
                            <TableCell3 > {
                                props.countryList?.map((e) => e.id == ele.country ? e.name : "")
                            }</TableCell3>
                            <TableCell3 >

                                <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} />
                                <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} />

                            </TableCell3>
                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>
        </div >
    )
}

export default CompanyTable

