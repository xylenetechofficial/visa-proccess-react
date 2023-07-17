import { SectorInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { useState, useEffect } from "react";
import { CountryInterface } from '../../country/type';
import { readCountryList } from '../../country/repository';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';


const SectorTable = (props: { sectorList: SectorInterface[], onClickEdit: any, onClickDelete: any }) => {
    const [countryList, setCountryList] = useState<CountryInterface[]>()

    const fetchCountryList = async () => {
        setCountryList(await readCountryList())

    }

    useEffect(() => {
        fetchCountryList()
    }, [])

    // console.log(countryList);
    // console.log(props.sectorList)
    return (
        <div className='overflow-auto'>
            <Table>
                <TableHead >
                    <TableHeadRow >
                        <TableHeadCell> Sr No.</TableHeadCell>
                        <TableHeadCell> Name</TableHeadCell>
                        <TableHeadCell> Location</TableHeadCell>
                        <TableHeadCell> Action</TableHeadCell>





                        {/* <TableCell> Sr No.</TableCell> */}
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.sectorList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.name}</TableCell>
                            <TableCell > {
                                countryList?.map((e) => e.id == ele.country ? e.name : "")
                            }</TableCell>
                            <TableCell>
                                
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

export default SectorTable

