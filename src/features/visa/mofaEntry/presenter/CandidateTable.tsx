import { Mofa_Entry_Candidate_Interface } from '../type'
import { Table, TableBody, TableCell, TableCell3, TableHead, TableHeadCell2, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
import { DateInput, UnlabeledInput } from '../../../../componenets/Input';
import { CustomSelectComponentUnlabeled } from '../../../../componenets/SelectBox';
import { ReligionList } from '../../../db';
import { CustomSingleCheckBox } from '../../../../componenets/Checkbox';

const initValue: Mofa_Entry_Candidate_Interface = {
    id: 0,
    name: "",
    passport_no: "",
    actual_profession: "",
    division: "",
    agent_name: "",
    rs_name: "",
    rm_name: "",
    rc_name: "",
    visa_profession: "",
    mofa_number: "",
    pp_copy: "",
    pp_issued_date: "",
    pp_expiry_date: "",
    place_of_issue: "",
    date_of_birth: "",
    place_of_birth: "",
    address: "",
    religion: "",
    payment_from: "",

}

const CandidateTable = (props: {
    candidateList: Mofa_Entry_Candidate_Interface[],
    onChange: (ele: Mofa_Entry_Candidate_Interface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")


    function onUpdateRow(index: number, rowData: Mofa_Entry_Candidate_Interface) {
        const nextData: Mofa_Entry_Candidate_Interface[] = props.candidateList.map((e, i) => {
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
    const tableHeadings = [
        ["SR. NO."],
        ["CANDIDATE NAME"],
        ["PASSPORT NO"],
        ["ACTUAL PROFESSION"],
        ["DIVISION"],
        ["AGENT"],
        ["RS"],
        ["RM"],
        ["RC"],
        ["VISA PROFESSION"],
        ["SELECT"],
        ["*MOFA NUMBER"],
        ["PP/COPY"],
        ["PP ISSUED DATE"],
        ["PP EXPIRY DATE"],
        ["PLACE OF ISSUE"],
        ["DATE OF BIRTH"],
        ["PLACE OF BIRTH"],
        ["ADDRESS"],
        ["RELIGION"],
        ["PAYMENT FROM"],
        // ["REJECT"],


    ];
    const tableHeadingsComponent = tableHeadings.map((e) => (
        <TableHeadCell2  > {e[0]}</TableHeadCell2>
    ));
    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        {tableHeadingsComponent}

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.candidateList && props.candidateList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onUpdate={onUpdateRow}
                        />

                    ))}


                    {/* <TableRow>
                        <TableCell>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>

        </div>
    )
}

export default CandidateTable

const TableData = (
    props: {
        index: number;
        data: Mofa_Entry_Candidate_Interface;
        onUpdate: (index: number, rowData: Mofa_Entry_Candidate_Interface) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<Mofa_Entry_Candidate_Interface>(initValue)
    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])

    useEffect(() => {
        console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    // console.log(localRowData)
    return (
        <TableRow key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>

            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.name}
                    onchange={(value) => setLocalRowData({ ...localRowData, name: value })}
                />
            </TableCell3>

            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.passport_no}
                    onchange={(value) => setLocalRowData({ ...localRowData, passport_no: value })}
                />
            </TableCell3>

            <TableCell3 > {localRowData.actual_profession}</TableCell3>

            <TableCell3 > {localRowData.division}</TableCell3>
            <TableCell3 > {localRowData.agent_name}</TableCell3>
            <TableCell3 > {localRowData.rs_name}</TableCell3>
            <TableCell3 > {localRowData.rm_name}</TableCell3>
            <TableCell3 > {localRowData.rc_name}</TableCell3>
            <TableCell3 > {localRowData.visa_profession}</TableCell3>
            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value) => setLocalRowData({ ...localRowData, checked: value })}
                    value={localRowData.checked ? true : false}
                />
            </TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.mofa_number}
                    onchange={(value) => setLocalRowData({ ...localRowData, mofa_number: value })}
                /></TableCell3>
            <TableCell3 >  <CustomSelectComponentUnlabeled
                value={localRowData.pp_copy}
                onChange={(value: any) => setLocalRowData({ ...localRowData, pp_copy: value })}
                options={[
                    { name: "PP", value: "PP" },
                    { name: "COPY", value: "COPY" },
                    // { name: "RAISE INVOICE", value: "RAISE INVOICE" }
                ]} /></TableCell3>

            <TableCell3 >
                <DateInput
                    id='jbvh6d5r'
                    value={localRowData.pp_issued_date}
                    onChange={(value) => setLocalRowData({ ...localRowData, pp_issued_date: value })}
                />
            </TableCell3>


            <TableCell3 >
                <DateInput
                    id='dkjbvh6d5r'
                    value={localRowData.pp_expiry_date}
                    onChange={(value) => setLocalRowData({ ...localRowData, pp_expiry_date: value })}
                />
            </TableCell3>


            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.place_of_issue}
                    onchange={(value) => setLocalRowData({ ...localRowData, place_of_issue: value })}
                />
            </TableCell3>

            <TableCell3 >
                <DateInput
                    id='dkjbvh6d5r'
                    value={localRowData.date_of_birth}
                    onChange={(value) => setLocalRowData({ ...localRowData, date_of_birth: value })}
                />
            </TableCell3>


            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.place_of_birth}
                    onchange={(value) => setLocalRowData({ ...localRowData, place_of_birth: value })}
                />
            </TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.address}
                    onchange={(value) => setLocalRowData({ ...localRowData, address: value })}
                />
            </TableCell3>

            <TableCell3 > <CustomSelectComponentUnlabeled
                value={localRowData.religion}
                onChange={(value: any) => setLocalRowData({ ...localRowData, religion: value })}
                options={ReligionList} />
            </TableCell3>
            <TableCell3>{localRowData.payment_from}</TableCell3>




        </TableRow>
    )
}

