import { VisaReceivedInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody, TableBody3, TableCell, TableCell3, TableHead, TableHead3, TableHeadCell, TableHeadCell3, TableHeadRow, TableHeadRow3, TableRow, TableRow3 } from '../../../../componenets/Table';
import { UnlabeledInput } from '../../../../componenets/Input';
import { convertDateFormat } from '../../../../utils/function';
import { CustomSingleCheckBox } from '../../../../componenets/Checkbox';




const Table = (props: {
    jobOrderList: VisaReceivedInterface[],
    onChange: (value: VisaReceivedInterface[]) => void
}) => {
    const tableHeadings = [
        ["SR. NO."],
        ["CANDIDATE NO."],
        ["PARTY CODE"],
        ["COMPANY NAME"],
        ["CANDIDATE NAME"],
        ["PASSPORT NO."],
        ["ACTUAL PROFESSION"],
        ["VISA PROFESSION"],
        ["AGENT"],
        ["RC NAME"],
        ["MUFA NUMBER"],
        ["VISA AUTHORIZATION"],
        ["DIVISION"],
        ["VISA FEE"],
        ["PP/COPY"],
        ["VISA NO."],
        ["SUBMISSION DATE"],
        ["VISA RECEIVED DATE"],
        ["DOCUMENT CHARGES"],
        ["STATUS"],
        ["SELECT"],
        ["FOLDER LOCATION"]


    ];


    function onUpdateRow(index: number, rowData: VisaReceivedInterface) {
        const nextData: VisaReceivedInterface[] = props.jobOrderList.map((e, i) => {
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
    console.log(props.jobOrderList)
    return (
        <div className='overflow-auto'>


            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        {tableHeadingsComponent}

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.jobOrderList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.candidateNo}</TableCell3>
                            <TableCell3 > {ele.partyCode}</TableCell3>
                            <TableCell3 > {ele.companyName}</TableCell3>
                            <TableCell3 > {ele.candiddateName}</TableCell3>

                            <TableCell3 > {ele.passportNo}</TableCell3>
                            <TableCell3 > {ele.actualProfession}</TableCell3>
                            <TableCell3 > {ele.visaProfession}</TableCell3>
                            <TableCell3 > {ele.agent}</TableCell3>
                            <TableCell3 > {ele.rc}</TableCell3>
                            <TableCell3 > {ele.mofaNumber}</TableCell3>
                            <TableCell3 > {ele.visaAuthorization}</TableCell3>
                            <TableCell3 > {ele.division}</TableCell3>
                            <TableCell3 > {ele.visaFee}</TableCell3>
                            <TableCell3 > {ele.ppCopy}</TableCell3>
                            <TableCell3 > {ele.visaNo}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.submissionDate)}</TableCell3>
                            <TableCell3 > {convertDateFormat(ele.visaReceivedDate)}</TableCell3>
                            <TableCell3 > {ele.documentCharges}</TableCell3>
                            <TableCell3 > {ele.status}</TableCell3>

                            <TableCell3 >
                                <CustomSingleCheckBox
                                    onChange={(value) => {
                                        // setLocalRowData({ ...localRowData, checked: value })}
                                        onUpdateRow(index, { ...ele, checked: value })
                                    }
                                    }
                                    value={ele.checked ? true : false}
                                />

                            </TableCell3>
                            <TableCell3 >
                                <UnlabeledInput
                                    onchange={(value) => {
                                        onUpdateRow(index, { ...ele, folderLocation: value })
                                    }}
                                    value={ele.folderLocation}

                                />
                            </TableCell3>

                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>

        </div>
    )
}

export default Table

