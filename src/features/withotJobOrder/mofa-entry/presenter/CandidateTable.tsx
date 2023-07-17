import { MofaEntryInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';


import { useState, useEffect } from "react";
import { DateInput, UnlabeledInput } from '../../../../componenets/Input';
import { CustomCheckBox, CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';
import { CustomRadioButton } from '../../../../componenets/RadioButton';
import { VisaAuthorisationInterface } from '../../../masters/visaAuthorization/type';
import { readVisaAuthorisationList } from '../../../masters/visaAuthorization/repository';
import { AgentInterface } from '../../../masters/agent/type';
import { readAgentList } from '../../../masters/agent/repository';
import { readSectorList } from '../../../masters/sector/repository';
import { NomineeRelationList, ReligionList, SelectionStatusList, VisaSubmissionList } from '../../../db';
// import { MofaEntryInterface } from '../../Extra/type';


const MofaEntryTable = (props: {
    mofaEntryList: MofaEntryInterface[],
    onChange: (ele: MofaEntryInterface[]) => void,
    company: number,
    handleCheckBox: (index: number, value: boolean) => void

}) => {

    const initValue: MofaEntryInterface = {
        actual_profession: "",
        address: "",
        age: 0,
        agent: "",
        basic_salary: 0,
        company_id: props.company,
        contact_no: "",
        createAt: "",
        date_of_birth: "",
        fa: 0,
        fa_provided: 0,
        ha: 0,
        ha_or_ta_provided: 0,
        job_order_id: 0,
        name: "",
        nominee_name: "",
        nominee_relation: "",
        other_allowance: 0,
        passport_no: "",
        place_of_birth: "",
        religion: "",
        sector: 0,
        selection_status: "",
        ta: 0,
        total_salary: 0,
        id: 0,
        place_of_issue: "",
        pp_expiry_date: "",
        pp_issued_date: "",

        visa_authorization: 0,
        visa_submission: '',
        division: '',

        mofa_number: "",
        pp_copy: "",
        visa_profession: ""
    }
    const [isMofaEntryChanged, setIsMofaEntryChanged] = useState<string>("")

    // add new row
    const onClickAddNewRow = () => {
        const arr = [...props.mofaEntryList, initValue]
        props.onChange(arr)
    }

    //  remove a row
    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return
        const arr = props.mofaEntryList.filter((e, i) => i !== index)
        props.onChange(arr)
        setIsMofaEntryChanged(Date.now().toString())
    }

    // update a row
    function onUpdateRow(index: number, rowData: MofaEntryInterface) {
        const nextData = props.mofaEntryList.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        props.onChange(nextData)
        // setMofaEntryList(nextData)
    }

    const [visaAuhorisationList, setvisaAuhorisationList] = useState<VisaAuthorisationInterface[]>([])
    const fetchvisaAuhorisationList = async () => {
        const data = await readVisaAuthorisationList();
        if (data) {
            setvisaAuhorisationList(data);
        }
    }

    const [sectorList, setSectorList] = useState<SectorInterface[]>([])
    const fetchSectorList = async () => {
        const data = await readSectorList();
        if (data) {
            setSectorList(data);
        }
    }

    const [agentList, setAgentList] = useState<AgentInterface[]>([])
    const fetchAgentList = async () => {
        const data = await readAgentList();
        if (data) {
            setAgentList(data);

        }
    }
    useEffect(() => {
        fetchAgentList()
        fetchSectorList()
        fetchvisaAuhorisationList()
    }, [])
    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > NAME</TableHeadCell>
                        <TableHeadCell > PASSPORT NO</TableHeadCell>
                        <TableHeadCell > ACTUAL PROFESSION</TableHeadCell>
                        <TableHeadCell > AGENT</TableHeadCell>
                        <TableHeadCell > RC</TableHeadCell>
                        <TableHeadCell >*Select</TableHeadCell>
                        <TableHeadCell >*VISA PROFESSION</TableHeadCell>
                        <TableHeadCell >*MOFA NUMBER</TableHeadCell>
                        <TableHeadCell >*PP/COPY</TableHeadCell>

                        <TableHeadCell > PP Issued Date</TableHeadCell>
                        <TableHeadCell >PP EXPIRY DATE</TableHeadCell>

                        <TableHeadCell > PLACE OF ISSUE</TableHeadCell>
                        <TableHeadCell >  TOTAL SALARY (SR)</TableHeadCell>
                        <TableHeadCell > BASIC SALARY (SR)	 			</TableHeadCell>

                        <TableHeadCell > HA/TA PROVIDED </TableHeadCell>
                        <TableHeadCell > HA (SR)</TableHeadCell>
                        <TableHeadCell > TA (SR)</TableHeadCell>
                        <TableHeadCell > FA PROVIDED</TableHeadCell>
                        <TableHeadCell > FA (SR)</TableHeadCell>
                        <TableHeadCell >OTHER ALLOWANCE</TableHeadCell>


                        <TableHeadCell > AGE</TableHeadCell>
                        <TableHeadCell >SECTOR</TableHeadCell>
                        <TableHeadCell > SELECTION STATUS</TableHeadCell>

                        <TableHeadCell > CONTACT NO</TableHeadCell>
                        <TableHeadCell > DATE OF BIRTH</TableHeadCell>
                        <TableHeadCell > PLACE OF BIRTH</TableHeadCell>
                        <TableHeadCell > ADDRESS</TableHeadCell>

                        <TableHeadCell > NOMINEE NAME</TableHeadCell>
                        <TableHeadCell > NOMINEE RELATION</TableHeadCell>
                        <TableHeadCell >RELIGION</TableHeadCell>
                        <TableHeadCell >VISA AUTHORIZATION</TableHeadCell>

                        <TableHeadCell >VISA SUBMISSION</TableHeadCell>
                        <TableHeadCell >DIVISION</TableHeadCell>

                        <TableHeadCell > REMOVE</TableHeadCell>


                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.mofaEntryList && props.mofaEntryList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={isMofaEntryChanged}
                            onClickRemove={onClickRemoveRow}
                            onUpdate={onUpdateRow}
                            agentList={agentList}
                            sectorList={sectorList}
                            visaAuhorisationList={visaAuhorisationList}
                            handleCheckBox={props.handleCheckBox}
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

export default MofaEntryTable

const TableData = (
    props: {
        index: number;
        data: MofaEntryInterface;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: MofaEntryInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string,
        agentList: AgentInterface[],
        sectorList: SectorInterface[],
        visaAuhorisationList: VisaAuthorisationInterface[]
        handleCheckBox: (index: number, value: boolean) => void
    }

) => {
    const initValue: MofaEntryInterface = {
        actual_profession: "",
        address: "",
        age: 0,
        agent: "",
        basic_salary: 0,
        company_id: 0,
        contact_no: "",
        createAt: "",
        date_of_birth: "",
        fa: 0,
        fa_provided: 0,
        ha: 0,
        ha_or_ta_provided: 0,
        job_order_id: 0,
        name: "",
        nominee_name: "",
        nominee_relation: "",
        other_allowance: 0,
        passport_no: "",
        place_of_birth: "",
        religion: "",
        sector: 0,
        selection_status: "",
        ta: 0,
        total_salary: 0,
        id: 0,
        place_of_issue: "",
        pp_expiry_date: "",
        pp_issued_date: "",
        visa_authorization: 0,
        visa_submission: '',
        division: '',
        mofa_number: "",
        pp_copy: "",
        visa_profession: ""
    }
    const [localRowData, setLocalRowData] = useState<MofaEntryInterface>(initValue)




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
            <TableCell >{props.index + 1}</TableCell>
            {/* name */}
            <TableCell >
                <UnlabeledInput
                    value={localRowData.name}
                    onchange={(value) => setLocalRowData({ ...localRowData, name: value })}
                />
            </TableCell>

            {/* passport  */}
            <TableCell >
                <UnlabeledInput
                    value={localRowData.passport_no}
                    onchange={(value) => setLocalRowData({ ...localRowData, passport_no: value })}
                />
            </TableCell>

            <TableCell >
                {/* actual profession */}
                {localRowData.actual_profession}
            </TableCell>

            <TableCell >
                {localRowData.agent_name}
            </TableCell>

            <TableCell >
                {localRowData.rc_name}

            </TableCell>


            <TableCell >
                <CustomSingleCheckBox
                    onChange={(value: boolean) => {
                        // console.log(ele);
                        props.handleCheckBox(props.index, value)
                    }}
                    value={localRowData.isChecked ?? false}
                />
            </TableCell>


            <TableCell >
                <UnlabeledInput
                    value={localRowData.visa_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
                />
            </TableCell>
            <TableCell >
                <UnlabeledInput
                    value={localRowData.mofa_number}
                    onchange={(value) => setLocalRowData({ ...localRowData, mofa_number: value })}
                />
            </TableCell>

            <TableCell >
                <CustomSelectComponentUnlabeled
                    value={localRowData.pp_copy}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, pp_copy: value })}
                    options={[
                        { name: "PP", value: "PP" },
                        { name: "COPY", value: "COPY" },
                        // { name: "RAISE INVOICE", value: "RAISE INVOICE" }
                    ]} />
            </TableCell>

            {/* pp issued date */}
            <TableCell >
                <DateInput
                    id='jbvh6d5r'
                    value={localRowData.pp_issued_date}
                    onChange={(value) => setLocalRowData({ ...localRowData, pp_issued_date: value })}
                />
            </TableCell>

            {/* ppp expiry date */}
            <TableCell >
                <DateInput
                    id='dkjbvh6d5r'
                    value={localRowData.pp_expiry_date}
                    onChange={(value) => setLocalRowData({ ...localRowData, pp_expiry_date: value })}
                />
            </TableCell>

            {/* place of issue */}
            <TableCell >
                <UnlabeledInput
                    value={localRowData.place_of_issue}
                    onchange={(value) => setLocalRowData({ ...localRowData, place_of_issue: value })}
                />
            </TableCell>


            <TableCell >
                {/* total salary*/}
                <UnlabeledInput
                    type='number'
                    value={localRowData.total_salary}
                    onchange={(value) => setLocalRowData({ ...localRowData, total_salary: parseInt(value) })}
                />
            </TableCell>
            <TableCell >
                {/* basic salary*/}
                <UnlabeledInput
                    type='number'
                    value={localRowData.basic_salary}
                    onchange={(value) => setLocalRowData({ ...localRowData, basic_salary: parseInt(value) })}
                />
            </TableCell>

            {/* ha /ta */}
            <TableCell >
                <CustomSingleCheckBox
                    value={localRowData.ha_or_ta_provided ? true : false}
                    onChange={(value) => setLocalRowData({ ...localRowData, ha_or_ta_provided: value ? 1 : 0 })}
                />

            </TableCell>

            <TableCell >
                <UnlabeledInput
                    type='number'
                    disabled={localRowData.ha_or_ta_provided ? true : false}
                    value={localRowData.ha}
                    onchange={(value) => setLocalRowData({ ...localRowData, ha: parseInt(value) })}
                />
            </TableCell>

            <TableCell >
                <UnlabeledInput
                    type='number'
                    disabled={localRowData.ha_or_ta_provided ? true : false}
                    value={localRowData.ta}
                    onchange={(value) => setLocalRowData({ ...localRowData, ta: parseInt(value) })}
                />
            </TableCell>

            <TableCell >
                <CustomSingleCheckBox
                    value={localRowData.fa_provided ? true : false}
                    onChange={(value) => setLocalRowData({ ...localRowData, fa_provided: value ? 1 : 0 })}
                />
            </TableCell>
            <TableCell >
                <UnlabeledInput
                    type='number'
                    disabled={localRowData.fa_provided ? true : false}
                    value={localRowData.fa}
                    onchange={(value) => setLocalRowData({ ...localRowData, fa: parseInt(value) })}
                />
            </TableCell>

            <TableCell >
                <UnlabeledInput
                    type='number'
                    value={localRowData.other_allowance}
                    onchange={(value) => setLocalRowData({ ...localRowData, other_allowance: parseInt(value) })}
                />
            </TableCell>


            <TableCell >
                <UnlabeledInput
                    type='number'
                    value={localRowData.age}
                    onchange={(value) => setLocalRowData({ ...localRowData, age: parseInt(value) })}
                />
            </TableCell>

            <TableCell >
                <CustomSelectComponentUnlabeled
                    value={localRowData.sector}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, sector: value })}
                    options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
                />
            </TableCell>

            <TableCell >
                <CustomSelectComponentUnlabeled
                    value={localRowData.selection_status}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, selection_status: value })}
                    options={SelectionStatusList}
                />

            </TableCell>

            <TableCell >
                <UnlabeledInput
                    type='tel'
                    value={localRowData.contact_no}
                    onchange={(value) => setLocalRowData({ ...localRowData, contact_no: value })}
                />
            </TableCell>

            <TableCell >
                <DateInput
                    id='ajgdvf'
                    value={localRowData.date_of_birth}
                    onChange={(value) => setLocalRowData({ ...localRowData, date_of_birth: value })}
                />
            </TableCell>

            <TableCell >
                <UnlabeledInput
                    value={localRowData.place_of_birth}
                    onchange={(value) => setLocalRowData({ ...localRowData, place_of_birth: value })}
                />
            </TableCell>


            <TableCell >
                <UnlabeledInput
                    value={localRowData.address}
                    onchange={(value) => setLocalRowData({ ...localRowData, address: value })}
                />
            </TableCell>
            <TableCell >
                <UnlabeledInput
                    value={localRowData.nominee_name}
                    onchange={(value) => setLocalRowData({ ...localRowData, nominee_name: value })}
                />
            </TableCell>

            <TableCell >
                <CustomSelectComponentUnlabeled
                    value={localRowData.nominee_relation}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, nominee_relation: value })}
                    options={NomineeRelationList}
                />
            </TableCell>

            <TableCell >
                <CustomSelectComponentUnlabeled
                    value={localRowData.religion}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, religion: value })}
                    options={ReligionList} />
            </TableCell>


            <TableCell >
                <CustomSelectComponentUnlabeled
                    value={localRowData.visa_authorization}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, visa_authorization: value })}
                    options={selectOptionConveter({ options: props.visaAuhorisationList, options_struct: { name: "name", value: "id" } })}
                />
            </TableCell>


            <TableCell >
                <CustomSelectComponentUnlabeled
                    value={localRowData.visa_submission}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, visa_submission: value })}
                    options={VisaSubmissionList} />
            </TableCell>


            <TableCell >
                <UnlabeledInput
                    value={localRowData.division}
                    onchange={(value) => setLocalRowData({ ...localRowData, division: value })}
                />
            </TableCell>


            <TableCell >

                <RedButton text={" Remove"} onClick={() => {
                    props.onClickRemove(props.index)
                }} />

            </TableCell>
        </TableRow>
    )
}