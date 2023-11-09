import { Mofa_Entry_Candidate_Interface } from '../type'
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
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
    select_status: "",
    visa_issue_date: "",
    visa_issue_date_on_pp: "",

}

const CandidateTable = (props: {
    countryTypeID: number,
    candidateList: Mofa_Entry_Candidate_Interface[],
    onChange: (ele: Mofa_Entry_Candidate_Interface[]) => void,

}) => {

    const [onChange, setOnChange] = useState<string>("")
    const [countryTypeID, setCountryTypeID] = useState(0)


    useEffect(() => {
        setCountryTypeID(props.countryTypeID)
    }, [props.countryTypeID])

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

    // type 0 heading
    const tableHeadings_for_non_ksa = [
        ["SR. NO."],
        ["CANDIDATE NAME"],
        ["PASSPORT NO"],
        ["ACTUAL PROFESSION"],
        ["DIVISION"],
        ["AGENT"],
        ["RS"],
        ["RM"],
        ["RC"],
        ["SELECT"],
        ["visa issue date"],
        ["visa issue date on pp"],
        ["VISA PROFESSION"],
        ["PP/COPY"],
        ["PP ISSUED DATE"],
        ["PP EXPIRY DATE"],
        ["PLACE OF ISSUE"],
        ["DATE OF BIRTH"],
        ["PLACE OF BIRTH"],
        ["ADDRESS"],
        ["RELIGION"],
        ["PAYMENT FROM"],
    ];
    const tableHeadings_for_non_ksa_Component = tableHeadings_for_non_ksa.map((e) => (
        <TableHeadCell3  > {e[0]}</TableHeadCell3>
    ));

    // type 1 heading
    const tableHeadings_for_ksa = [
        ["SR. NO."],
        ["CANDIDATE NAME"],
        ["PASSPORT NO"],
        ["ACTUAL PROFESSION"],
        ["DIVISION"],
        ["AGENT"],
        ["RS"],
        ["RM"],
        ["RC"],
        ["SELECT"],
        ["MOFA NUMBER"],
        ["VISA PROFESSION"],
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
    const tableHeadings_for_ksa_Component_for_1 = tableHeadings_for_ksa.map((e) => (
        <TableHeadCell3  > {e[0]}</TableHeadCell3>
    ));
    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        {countryTypeID == 1 ? tableHeadings_for_ksa_Component_for_1 : tableHeadings_for_non_ksa_Component}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.candidateList.map((ele, index) => (
                        <TableData
                            countryTypeID={countryTypeID}
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onUpdate={onUpdateRow}
                        />

                    ))}


                    {/* <TableRow3>
                        <TableCell>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell>
                    </TableRow3> */}
                </TableBody3>
            </Table3>

        </div>
    )
}

export default CandidateTable

const TableData = (
    props: {
        countryTypeID: number;
        index: number;
        data: Mofa_Entry_Candidate_Interface;
        onUpdate: (index: number, rowData: Mofa_Entry_Candidate_Interface) => void;
        onChange: string
    }

) => {
    const [countryTypeID, setCountryTypeID] = useState(0)


    useEffect(() => {
        setCountryTypeID(props.countryTypeID)
    }, [props.countryTypeID])

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
        <TableRow3 key={props.index}>
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
            <TableCell3 >
                {localRowData.select_status == '' ?
                    <CustomSingleCheckBox
                        onChange={(value) => setLocalRowData({ ...localRowData, checked: value })}
                        value={localRowData.checked ? true : false}
                    /> : <b style={{ color: "#ff5757" }}>{localRowData.select_status}</b>}
            </TableCell3>
            {countryTypeID == 1 ? <>
                {/* IF KSA */}
                <TableCell3 >
                    <UnlabeledInput
                        value={localRowData.mofa_number}
                        onchange={(value) => setLocalRowData({ ...localRowData, mofa_number: value })}
                    />
                </TableCell3>
                <TableCell3 > {localRowData.visa_profession}</TableCell3>
            </> : <>
                {/* IF NON KSA */}
                <TableCell3 >
                    <DateInput
                        id='jbvh6dsd5r'
                        value={localRowData.visa_issue_date}
                        onChange={(value) => setLocalRowData({ ...localRowData, visa_issue_date: value })}
                    />
                </TableCell3>

                <TableCell3 >
                    <DateInput
                        id='jbvh6ad5r'
                        value={localRowData.visa_issue_date_on_pp}
                        onChange={(value) => setLocalRowData({ ...localRowData, visa_issue_date_on_pp: value })}
                    />
                </TableCell3>
                <TableCell3 >
                    <UnlabeledInput
                        value={localRowData.visa_profession}
                        onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
                    />
                </TableCell3>
            </>}
            
            <TableCell3 >
                <CustomSelectComponentUnlabeled
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




        </TableRow3>
    )
}

