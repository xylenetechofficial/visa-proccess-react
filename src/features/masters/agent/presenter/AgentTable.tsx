import { AgentInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { useState, useEffect } from "react";
import { SectorInterface } from '../../sector/type';
import { readSectorList } from '../../sector/repository';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';




const AgentTable = (props: { agentList: AgentInterface[], onClickEdit: any, onClickDelete: any }) => {
    const [sectorList, setSectorList] = useState<SectorInterface[]>()

    const fetchSectorList = async () => {
        setSectorList(await readSectorList())

    }

    useEffect(() => {
        fetchSectorList()
    }, [])

    console.log(sectorList);
    console.log(props.agentList)
    return (
        <div className='overflow-auto'>


            <Table >
                <TableHead >
                    <TableHeadRow>
                        <TableHeadCell > Sr No.</TableHeadCell>
                        <TableHeadCell> Name</TableHeadCell>
                        <TableHeadCell> Document Registration</TableHeadCell>
                        <TableHeadCell> Location</TableHeadCell>
                        <TableHeadCell> Number</TableHeadCell>
                        <TableHeadCell > Action </TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.agentList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.name}</TableCell>
                            <TableCell > {ele.isDocumentRegistration==1 ? "Yes" : "No"}</TableCell>
                            <TableCell > {sectorList?.map((e) => e.id == ele.location ? e.name : "")}</TableCell>
                            <TableCell > {ele.number}</TableCell>
                            <TableCell >

                                <BlueButton text={" EDIT"} onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                <RedButton text={"DELETE"} onClick={() => {
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

export default AgentTable

