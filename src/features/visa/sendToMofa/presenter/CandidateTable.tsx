import { SendToMofa_JobOrderInterface } from '../type'
import { Table3, TableBody3, TableCell, TableCell3, TableHead3, TableHeadCell, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
// import { UnlabeledInput } from '../../../../componenets/Input';
// import { CustomCheckBox, CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';
import { convertDateFormat } from '../../../../utils/function';
import { CustomSingleCheckBox } from '../../../../componenets/Checkbox';
// import { CustomRadioButton } from '../../../../componenets/RadioButton';
// import { rcList } from '../../../job-dpt/db/user';

const initValue: SendToMofa_JobOrderInterface = {
    id: 0,
    jobOrderId: 0,
    jobOrderNo: "",
    company: "",
    candidateName: "",
    passportNo: "",
    passortIssuwDate: "",
    passortExpiryDate: "",
    acctualProfession: "",
    agent: "",
    rs: "",
    rm: "",
    rc: "",
    approvalDate: "",
    medicalStatus: "",
    selectionStatus: "",
    currentStatus: "",
    partyCode: "",
    visaProfession: "",
    PartyCode_VisaProfession: "",



}

const CandidateTable = (props: {
    candidateList: SendToMofa_JobOrderInterface[],
    onChange: (ele: SendToMofa_JobOrderInterface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")


    function onUpdateRow(index: number, rowData: SendToMofa_JobOrderInterface) {
        const nextData: SendToMofa_JobOrderInterface[] = props.candidateList.map((e, i) => {
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
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3 > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > JOB ORDER NO.</TableHeadCell3>
                        <TableHeadCell3 >COMPANY</TableHeadCell3>
                        <TableHeadCell3 > CANDIDATE NAME</TableHeadCell3>
                        <TableHeadCell3 >PASSPORT NO</TableHeadCell3>
                        <TableHeadCell3 > PASSPORT ISSUED DATE</TableHeadCell3>
                        <TableHeadCell3 > PASSPORT EXPIRY DATE</TableHeadCell3>
                        <TableHeadCell3 > ACTUAL PROFESSION</TableHeadCell3>
                        <TableHeadCell3 >AGENT</TableHeadCell3>
                        <TableHeadCell3 >RS</TableHeadCell3>
                        <TableHeadCell3 >RM</TableHeadCell3>
                        <TableHeadCell3 >RC</TableHeadCell3>
                        <TableHeadCell3 >APPROVAL DATE</TableHeadCell3>
                        <TableHeadCell3 >MEDICAL STATUS</TableHeadCell3>
                        <TableHeadCell3 >SELECTION STATUS</TableHeadCell3>
                        <TableHeadCell3 >CURRENT STATUS</TableHeadCell3>
                        <TableHeadCell3 >VISA PROFESSION-PARTY CODE</TableHeadCell3>
                        <TableHeadCell3>Select</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.candidateList && props.candidateList.map((ele, index) => (
                        <TableData
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
        index: number;
        data: SendToMofa_JobOrderInterface;
        onUpdate: (index: number, rowData: SendToMofa_JobOrderInterface) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<SendToMofa_JobOrderInterface>(initValue)
    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])

    useEffect(() => {
        console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    console.log(localRowData)
    return (
        <TableRow3 key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>
            <TableCell3 > {localRowData.jobOrderNo}</TableCell3>
            <TableCell3 > {localRowData.company}</TableCell3>
            <TableCell3 > {localRowData.candidateName}</TableCell3>

            <TableCell3 > {localRowData.passportNo}</TableCell3>
            <TableCell3 > {convertDateFormat(localRowData.passortIssuwDate)}</TableCell3>
            <TableCell3 > {convertDateFormat(localRowData.passortExpiryDate)}</TableCell3>
            <TableCell3 > {localRowData.agent}</TableCell3>
            <TableCell3 > {localRowData.rs}</TableCell3>
            <TableCell3 > {localRowData.rs}</TableCell3>
            <TableCell3 > {localRowData.rm}</TableCell3>
            <TableCell3 > {localRowData.rc}</TableCell3>
            <TableCell3 > {convertDateFormat(localRowData.approvalDate)}</TableCell3>
            <TableCell3 > {localRowData.medicalStatus}</TableCell3>
            <TableCell3 > {localRowData.selectionStatus}</TableCell3>
            <TableCell3 > {localRowData.currentStatus}</TableCell3>
            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    onChange={(value) => {
                        if (localRowData.party_code_list) {
                            for (let i = 0; i < localRowData.party_code_list?.length; i++) {
                                if (localRowData.party_code_list[i].name == value) {
                                    setLocalRowData(
                                        {
                                            ...localRowData,
                                            PartyCode_VisaProfession: localRowData.party_code_list[i].name,
                                            visaProfession: localRowData.party_code_list[i].visa_profession,
                                            partyCode: localRowData.party_code_list[i].party_code
                                        })

                                }
                            }
                        }

                    }}
                    options={selectOptionConveter({ options: localRowData.party_code_list ?? [], options_struct: { name: "name", value: "id" } })}
                value={localRowData.PartyCode_VisaProfession}
                />
            </TableCell3>
            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value) => setLocalRowData({ ...localRowData, checked: value })}
                    value={localRowData.checked ? true : false}
                />

            </TableCell3>


        </TableRow3>
    )
}