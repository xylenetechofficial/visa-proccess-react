import { AgentSpecialNoteInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { AgentInterface } from '../../agent/type';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { convertDateFormat } from '../../../../utils/function';



const AgentSpecialNoteTable = (props: { agentSpecialNoteList: AgentSpecialNoteInterface[], onClickEdit: any, onClickDelete: any, agentList: AgentInterface[] }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        
                <Table>
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell  > Sr No.</TableHeadCell>
                            <TableHeadCell > Agent</TableHeadCell>
                            <TableHeadCell > Date</TableHeadCell>
                            <TableHeadCell > Note</TableHeadCell>
                            <TableHeadCell > Action</TableHeadCell>

                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {props.agentSpecialNoteList.map((ele, index) => (

                            <TableRow key={index}>
                                <TableCell >{index + 1}</TableCell>
                                <TableCell > {props.agentList.map((e) => ele.agent == e.id ? e.name : "")}</TableCell>
                                <TableCell > {convertDateFormat(ele.date)}</TableCell>
                                <TableCell > {ele.note}</TableCell>
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

export default AgentSpecialNoteTable

