import { Mofa_Entry_Candidate_Interface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3,  TableBody3, TableCell3, TableHead3,  TableHeadCell3,  TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { convertDateFormat } from '../../../../utils/function';




const Table = (props: {
    candidateList: Mofa_Entry_Candidate_Interface[],
    onClickAdd: (ele: Mofa_Entry_Candidate_Interface) => void,
    onClickEdit: (ele: Mofa_Entry_Candidate_Interface) => void,

}) => {
    const tableHeadings = [
        ["SR. NO." ],
        ["COMPANY"],
        ["PARTY CODE"],
        ["CANDIDATE"],
        ["PASSPORT NO"],
        // ["ACTUAL PROFESSION"],
        // ["DIVISION"],
        ["AGENT"],
        // ["RS"],
        // ["RM"],
        // ["RC"],
    
        // ["VISA PROFESSION"],
        // ["MOFA NUMBER"],
        // ["PP/COPY"],
        // ["PP ISSUED DATE"],
        // ["PP EXPIRY DATE"],
        // ["PLACE OF ISSUE"],
        // ["DATE OF BIRTH"],
        // ["PLACE OF BIRTH"],
        // ["ADDRESS"],
        // ["RELIGION"],
        // ["PAYMENT FROM"],
        ["Action"],
    
      
    ];
    const tableHeadingsComponent = tableHeadings.map((e)=>(
        <TableHeadCell3  > {e[0]}</TableHeadCell3>
    ));

    return (
        <div className='overflow-auto'>


            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                     {tableHeadingsComponent}

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.candidateList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.company_name}</TableCell3>
                            <TableCell3 > {ele.party_code}</TableCell3>
                            <TableCell3 > {ele.name}</TableCell3>
                            <TableCell3 > {ele.passport_no}</TableCell3>
                            {/* <TableCell3 > {ele.actual_profession}</TableCell3> */}
                            <TableCell3 > {ele.agent_name}</TableCell3>

                            {/* <TableCell3 > {ele.division}</TableCell3>
                            <TableCell3 > {ele.rs_name}</TableCell3>
                            <TableCell3 > {ele.rm_name}</TableCell3>
                            <TableCell3 > {ele.rc_name}</TableCell3>
                            <TableCell3 > {ele.visa_profession}</TableCell3>
                            <TableCell3 > {ele.mofa_number}</TableCell3>
                            <TableCell3 > {ele.pp_copy}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.pp_issued_date)}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.pp_expiry_date)}</TableCell3>
                            <TableCell3 > {ele.place_of_issue}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.date_of_birth)}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.place_of_birth)}</TableCell3>
                            <TableCell3 > {ele.address}</TableCell3>
                            <TableCell3 > {ele.religion}</TableCell3>
                            <TableCell3 > {ele.payment_from}</TableCell3> */}
                            <TableCell3 >

                                {/* <GreenButton text={"Add"}  onClick={() => {
                                    props.onClickAdd(ele)
                                }} /> */}

                                <BlueButton text={" Edit"} onClick={() => {
                                    props.onClickEdit(ele)
                                }} />



                            </TableCell3>
                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>

        </div>
    )
}

export default Table

