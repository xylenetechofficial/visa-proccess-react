import { SubmissionDashboardInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table2, Table3, TableBody, TableBody2, TableBody3, TableCell3, TableHead, TableHead2, TableHead3, TableHeadCell, TableHeadCell3, TableHeadRow, TableHeadRow2, TableHeadRow3, TableRow2, TableRow3 } from '../../../../componenets/Table';
import { useEffect, useState } from 'react';
import { DateInput, TextAreaInput, UnlabeledInput } from '../../../../componenets/Input';

import DocumentChargesModal from "./DocumentChagesModal"
import ConsultantChargeModal from "./ConsultantChagesModal"
import RejectModal from "./RejectModal";
import { updateSubmissionDashboardDataOne } from '../repository';
import { convertDateFormat } from '../../../../utils/function';
import { CustomSingleCheckBox } from '../../../../componenets/Checkbox';
const initValue: SubmissionDashboardInterface = {
    id: 0,
    party_code: "",
    company_name: "",
    name: "",
    passport_no: "",


    mofa_number: "",
    visa_profession: "",
    visa_authorization: "",
    visa_submission: "",
    visa_no: "",


    submission_date: "",
    visa_issue_date: "",
    visa_received_date: "",
    arabic_sponsor_name: "",
    arabic_visa_category: "",
    visa_arabic_date: "",


    pp_issued_date: "",
    pp_expiry_date: "",
    place_of_issue: "",


    date_of_birth: "",
    place_of_birth: "",
    address: "",

    actual_profession: "",

    agent_name: "",
    division: "",
    rm_name: "",
    rs_name: "",
    rc_name: "",

    cancelled_candidates: "",
    document_charges: 0,
    consulate_charges: 0,

    remarks: "",
    reject: 0,

    is_without: 0
    ,
}

const Table = (props: {
    submissionDashboardDataList: SubmissionDashboardInterface[],
    onChange: (ele: SubmissionDashboardInterface[]) => void,
    fetchSubmisionDashboardDataList: () => void
    change_string: string
}) => {
    const tableHeadings1 = [
        ["Sr No.",],
        ["PARTY CODE"],
        ["COMPANY NAME"],
        ["CANDIDATE NAME"],
        ["PASSPORT NO."],
        ["MUFA NUMBER"],
        ["VISA PROFESSION"],
        ["VISA AUTHORIZATION"],
        ["VISA SUBMISSION"],
        ["VISA NO."],
        // [""]
    ];
    const tableHeadings2 = [
        ["*SUBMISSION DATE"],
        ["*VISA ISSUED DATE"],
        ["*VISA RECEIVED DATE"],
        ["ARABIC SPONSOR NAME"],
        ["ARABIC VISA CATEGORY"],
        ["VISA ARABIC DATE"],
        ["PP ISSUED DATE"],
        ["PP EXPIRY DATE"],
        ["PLACE OF ISSUE"],
        ["DATE OF BIRTH"],
        ["ADDRESS"],
        ["PLACE OF BIRTH"],
        ["ACTUAL PROFESSION"],
        ["AGENT"],
        ["DIVISION"],
        ["RM NAME"],
        ["RC NAME"],
        ["CANCELLED CANDIDATES"],
        ["DOCUMENT CHARGES"],
        ["CONSULATE SETTING CHARGES"],
        ["REJECT"],
        // ["REMARKS"],
        // ["SELECT"]
    ];
    const tableHeadingsComponent1 = tableHeadings1.map((e) => (
        <TableHeadCell3 width={100} > {e[0]}</TableHeadCell3>
    ));
    const tableHeadingsComponent2 = tableHeadings2.map((e) => (
        <TableHeadCell3 width={100} > {e[0]}</TableHeadCell3>
    ));


    const [currentData, setCurrentData] = useState<SubmissionDashboardInterface>(initValue)

    const [showModal, setShowMadal] = useState("")

    useEffect(() => {
        console.log(props.change_string);   // Only Dev
    }, [props.change_string]);
    const onClickDocCharges = (value: SubmissionDashboardInterface) => {
        setCurrentData(value);
        setShowMadal("DocCharge")
    }

    const onClickConsultantCharges = (value: SubmissionDashboardInterface) => {
        setCurrentData(value);
        setShowMadal("ConsultantCharge")
    }

    const onClickReject = (value: SubmissionDashboardInterface) => {
        setCurrentData(value);
        setShowMadal("reject")
    }

    const OnClickSubmit = async (ele: SubmissionDashboardInterface) => {
        // update api call
        const data = await updateSubmissionDashboardDataOne(ele)
        window.location.reload()
        // props.fetchSubmisionDashboardDataList()
    }

    const [onChange, setonChange] = useState<string>("")


    function onUpdateRow(index: number, rowData: SubmissionDashboardInterface) {
        const nextData: SubmissionDashboardInterface[] = props.submissionDashboardDataList.map((e, i) => {
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

    return (
        <div className='overflow-auto'>


            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        {tableHeadingsComponent1}
                        <TableHeadCell3  > Select </TableHeadCell3>
                        {tableHeadingsComponent2}


                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.submissionDashboardDataList && props.submissionDashboardDataList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onUpdate={onUpdateRow}
                            onClickDocCharges={onClickDocCharges}
                            onClickConsultantCharges={onClickConsultantCharges}
                            onClickReject={onClickReject}
                        />

                    ))}



                </TableBody3>
            </Table3>

            {showModal == "DocCharge" ?
                <DocumentChargesModal
                    onClose={() => {
                        window.location.reload()
                        setShowMadal("")
                    }}
                    currentElement={currentData}
                    onClickSubmit={OnClickSubmit}
                />
                : " "}
            {showModal == "ConsultantCharge" ?
                <ConsultantChargeModal
                    onClose={() => {
                        window.location.reload()
                        setShowMadal("")
                    }}
                    currentElement={currentData}
                    onClickSubmit={OnClickSubmit}
                />
                : " "}

            {showModal == "reject" ?
                <RejectModal
                    onClose={() => setShowMadal("")}
                    currentElement={currentData}
                    onClickSubmit={OnClickSubmit}
                />
                : " "}
        </div>
    )
}

export default Table

const TableData = (
    props: {
        index: number;
        data: SubmissionDashboardInterface;
        onUpdate: (index: number, rowData: SubmissionDashboardInterface) => void;
        onChange: string
        onClickDocCharges: (ele: SubmissionDashboardInterface) => void
        onClickConsultantCharges: (ele: SubmissionDashboardInterface) => void
        onClickReject: (ele: SubmissionDashboardInterface) => void
    }

) => {

    const [localRowData, setLocalRowData] = useState<SubmissionDashboardInterface>(initValue)
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
            <TableCell3 > {localRowData.party_code}</TableCell3>
            <TableCell3 > {localRowData.company_name}</TableCell3>
            <TableCell3 > {localRowData.name}</TableCell3>

            <TableCell3 > {localRowData.passport_no}</TableCell3>
            <TableCell3 > {localRowData.mofa_number}</TableCell3>
            <TableCell3 > {localRowData.visa_profession}</TableCell3>
            <TableCell3 > {localRowData.visa_authorization}</TableCell3>
            <TableCell3 > {localRowData.visa_submission}</TableCell3>
            <TableCell3 > {localRowData.visa_no}</TableCell3>
            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value) => setLocalRowData({ ...localRowData, checked: value })}
                    value={localRowData.checked ? true : false}
                />
            </TableCell3>
            <TableCell3 >
                <DateInput
                    id='f;saljf;ld'
                    value={localRowData.submission_date}
                    onChange={(value) => setLocalRowData({ ...localRowData, submission_date: value })}
                />
            </TableCell3>
            <TableCell3 >  <DateInput
                id='f;4ljf;ld'
                value={localRowData.visa_issue_date}
                onChange={(value) => setLocalRowData({ ...localRowData, visa_issue_date: value })}
            />
            </TableCell3>
            <TableCell3 >  <DateInput
                id='f;4ljf;ld'
                value={localRowData.visa_received_date}
                onChange={(value) => setLocalRowData({ ...localRowData, visa_received_date: value })}
            />
            </TableCell3>

            <TableCell3 > {localRowData.arabic_sponsor_name}</TableCell3>
            <TableCell3 > {localRowData.arabic_visa_category}</TableCell3>
            <TableCell3 > {localRowData.visa_arabic_date}</TableCell3>
            <TableCell3 > {convertDateFormat(localRowData.pp_issued_date)}</TableCell3>
            <TableCell3 > {convertDateFormat(localRowData.pp_expiry_date)}</TableCell3>
            <TableCell3 > {localRowData.place_of_issue}</TableCell3>
            <TableCell3 > {convertDateFormat(localRowData.date_of_birth)}</TableCell3>
            <TableCell3 > {localRowData.address}</TableCell3>
            <TableCell3 > {localRowData.place_of_birth}</TableCell3>
            <TableCell3 > {localRowData.actual_profession}</TableCell3>
            <TableCell3 > {localRowData.agent_name}</TableCell3>
            <TableCell3 > {localRowData.division}</TableCell3>
            <TableCell3 > {localRowData.rm_name}</TableCell3>
            <TableCell3 > {localRowData.rc_name}</TableCell3>
            <TableCell3 > {localRowData.cancelled_candidates}</TableCell3>
            <TableCell3 >
                <div style={{ display: "flex", flexDirection: "column" }}>

                    <UnlabeledInput
                        value={localRowData.document_charges}
                        type='number'
                        onchange={(value) => setLocalRowData({ ...localRowData, document_charges: parseInt(value) })}
                    />
                    <div>
                        <RedButton text='Doc Charges' onClick={() => {
                            props.onClickDocCharges(localRowData)
                        }} />
                    </div>
                </div>


            </TableCell3>

            <TableCell3 >
                <div style={{ display: "flex", flexDirection: "column" }}>

                    <UnlabeledInput
                        value={localRowData.consulate_charges}
                        type='number'
                        onchange={(value) => setLocalRowData({ ...localRowData, consulate_charges: parseInt(value) })}
                    />
                    <div>
                        <RedButton text='Consulate Charges' onClick={() => {
                            props.onClickConsultantCharges(localRowData)
                        }} />
                    </div>
                </div>


            </TableCell3>
            <TableCell3>
                <RedButton text='Reject' onClick={() => props.onClickReject(localRowData)} />
            </TableCell3>
            {/* <TableCell3>
                <TextAreaInput
                    id='sad;fsld'
                    onChange={(value) => setLocalRowData({ ...localRowData, remarks: value })}
                    value={localRowData.remarks}
                />
            </TableCell3> */}




        </TableRow3>
    )
}