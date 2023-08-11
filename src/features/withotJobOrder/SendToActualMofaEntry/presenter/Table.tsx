import { SendToActualMofaEntryInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';




const SendToActualMofaEntryTable = (props: { sendToActualMofaEntryList: SendToActualMofaEntryInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        {["Sr No.",
                            "Candidate Name",
                            "Passport No",
                            "Actual Profession	",
                            "Agent	 	",
                            "Job Order - Actual Profession	",
                            "Job Order - Sector	",
                            "Visa Profession	",
                            "Mofa Number	",
                            "Pp/copy	",
                            "Pp Issued Date	",
                            "Pp Expiry Date	",
                            "Place Of Issue	",
                            "Date Of Birth	",
                            "Place Of Birth	",
                            "Address	",
                            "Nominee Name	",
                            "Nominee Relation	",
                            "Religion	",
                            "Payment From	",
                            "Action",
                        ].map(value => <TableHeadCell3>{value}</TableHeadCell3>)}

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.sendToActualMofaEntryList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.name}</TableCell3>
                            <TableCell3 > {ele.passport_no}</TableCell3>
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

        </div>
    )
}

export default SendToActualMofaEntryTable

