import { SendToActualMofaEntryInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';




const SendToActualMofaEntryTable = (props: { sendToActualMofaEntryList: SendToActualMofaEntryInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell  > Sr No.</TableHeadCell>

                        <TableHeadCell > Candidate Name</TableHeadCell>
                        <TableHeadCell  >Passport No</TableHeadCell>
                        <TableHeadCell  >Actual Profession	</TableHeadCell>
                        <TableHeadCell  >Agent	 	</TableHeadCell>
                        <TableHeadCell  >Job Order - Actual Profession	</TableHeadCell>
                        <TableHeadCell  >Job Order - Sector	</TableHeadCell>
                        <TableHeadCell  >Visa Profession	</TableHeadCell>
                        <TableHeadCell  >Mofa Number	</TableHeadCell>
                        <TableHeadCell  >Pp/copy	</TableHeadCell>
                        <TableHeadCell  >Pp Issued Date	</TableHeadCell>
                        <TableHeadCell  >Pp Expiry Date	</TableHeadCell>
                        <TableHeadCell  >Place Of Issue	</TableHeadCell>
                        <TableHeadCell  >Date Of Birth	</TableHeadCell>
                        <TableHeadCell  >Place Of Birth	</TableHeadCell>
                        <TableHeadCell  >Address	</TableHeadCell>
                        <TableHeadCell  >Nominee Name	</TableHeadCell>
                        <TableHeadCell  >Nominee Relation	</TableHeadCell>
                        <TableHeadCell  >Religion	</TableHeadCell>
                        <TableHeadCell  >Payment From	</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>
                        
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.sendToActualMofaEntryList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.name}</TableCell>
                            <TableCell > {ele.passport_no}</TableCell>
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

export default SendToActualMofaEntryTable

