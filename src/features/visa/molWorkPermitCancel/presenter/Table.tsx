import { MolForwardedTovisaDepartmentDataInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody, TableBody3, TableCell, TableCell3, TableHead, TableHead3, TableHeadCell, TableHeadCell3,  TableHeadRow, TableHeadRow3, TableRow, TableRow3 } from '../../../../componenets/Table';
import { CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { convertDateFormat } from '../../../../utils/function';




const Table = (props: {
    MolWorkPermitList: any,
    onChange: (value: MolForwardedTovisaDepartmentDataInterface[]) => void,
    setModalName:(value:string)=>void
    setCurrentData:(value:any)=>void
}) => {
    const tableHeadings = [
        ["SR. NO."],
        ["NAME"],
        ["PASSPORT NO"],
        ["PP ISSUED DATE"],
        ["PP EXPIRY DATE"],
        ["PLACE OF ISSUE"],
        ["DATE OF BIRTH"],
        ["PLACE OF BIRTH"],
        ["ADDRESS"],
        ["RELIGION"],
        ["ACTUAL PROFESSION"],
        ["VISA PROFESSIONN"],
        ["AGENT"],
        ["DIVISION"],
        ["RM"],
        ["RS"],
        ["RC"],
        ["PP/COPY"],
        ["MOL PP RECEIVED DATE"],
        ["MOL FORWARDED DATE"],
        ["MOL RECEIVED DATE"],
        ["SUBMITTED TO COMPANY DATE"],
        ["CANCEL"],



    ];
    const data=[1,2]

    function onUpdateRow(index: number, rowData: MolForwardedTovisaDepartmentDataInterface) {
        const nextData: MolForwardedTovisaDepartmentDataInterface[] = props.MolWorkPermitList.map((e:any, i:any) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        props.onChange(nextData)
    }

    const tableHeadingsComponent = tableHeadings.map((e) => (
        <TableHeadCell3  > {e[0]}</TableHeadCell3>
    ));

    // console.log(props.jobOrderList)
    return (
        <div className='overflow-auto'>


            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        {tableHeadingsComponent}

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {data.map((ele:any, index:any) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.name}</TableCell3>
                            <TableCell3 > {ele.passportNo}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.ppIssueDate)}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.ppExpiryDate)}</TableCell3>
                            <TableCell3 > {ele.placeOfIssue}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.dateOfBirth)}</TableCell3>
                            <TableCell3 > {ele.placeOfBirth}</TableCell3>
                            <TableCell3 > {ele.address}</TableCell3>
                            <TableCell3 > {ele.religion}</TableCell3>
                            <TableCell3 > {ele.actualProfession}</TableCell3>
                            <TableCell3 > {ele.visaProfession}</TableCell3>
                            <TableCell3 > {ele.agent}</TableCell3>
                            <TableCell3 > {ele.division}</TableCell3>
                            <TableCell3 > {ele.RM}</TableCell3>
                            <TableCell3 > {ele.rs}</TableCell3>
                            <TableCell3 > {ele.rc}</TableCell3>
                            <TableCell3 > {ele.ppCopy}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.molPPReceivedDate)}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.molForwardedDate)}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.molReceivedDate)}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.submittedToCompanyDate)}</TableCell3>
                            <TableCell3 > <RedButton text='Cancel' onClick={()=>{props.setModalName('cancel'), props.setCurrentData(ele)}}/></TableCell3>

                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>

        </div>
    )
}

export default Table

