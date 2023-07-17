import { PartyCodeInterface, SendToActualMofaEntryInterface } from '../type'
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
import { CopyPPList, NomineeRelationList, ReligionList, SelectionStatusList } from '../../../db';
// import { SendToActualMofaEntryInterface } from '../../Extra/type';


const SendToActualMofaTable = (props: {
    sendToActualMofaEntryList: SendToActualMofaEntryInterface[],
    onChange: (ele: SendToActualMofaEntryInterface[]) => void,
    company: number,
    handleCheckBox: (index: number, value: boolean) => void
    partyCodeData: PartyCodeInterface
}) => {

    const initValue: SendToActualMofaEntryInterface = {
        job_order_actual_profession: '',
        job_order_sector: '',
        party_code: 0,
        job_order_id: 0,

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
    const [isSendToActualMofaChanged, setIsSendToActualMofaChanged] = useState<string>("")

    // add new row
    const onClickAddNewRow = () => {
        const arr = [...props.sendToActualMofaEntryList, initValue]
        props.onChange(arr)
    }

    //  remove a row
    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return
        const arr = props.sendToActualMofaEntryList.filter((e, i) => i !== index)
        props.onChange(arr)
        setIsSendToActualMofaChanged(Date.now().toString())
    }

    // update a row
    function onUpdateRow(index: number, rowData: SendToActualMofaEntryInterface) {
        const nextData = props.sendToActualMofaEntryList.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        props.onChange(nextData)
        // setSendToActualMofaEntry(nextData)
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
        console.log("ELEMENT");   // Only Dev
        console.log(props.sendToActualMofaEntryList);   // Only Dev
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

                        <TableHeadCell > Select</TableHeadCell>
                        <TableHeadCell > *job Order - Actual Profession	</TableHeadCell>
                        <TableHeadCell > *job Order - Sector </TableHeadCell>
                        {/* <TableHeadCell > *job Order - visa Profession </TableHeadCell> */}

                        <TableHeadCell >VISA PROFESSION</TableHeadCell>
                        <TableHeadCell >MOFA NUMBER</TableHeadCell>
                        <TableHeadCell >PP/COPY</TableHeadCell>

                        <TableHeadCell > PP Issued Date</TableHeadCell>
                        <TableHeadCell >PP EXPIRY DATE</TableHeadCell>

                        <TableHeadCell > PLACE OF ISSUE</TableHeadCell>

                        <TableHeadCell > DATE OF BIRTH</TableHeadCell>
                        <TableHeadCell > PLACE OF BIRTH</TableHeadCell>
                        <TableHeadCell > ADDRESS</TableHeadCell>

                        <TableHeadCell > NOMINEE NAME</TableHeadCell>
                        <TableHeadCell > NOMINEE RELATION</TableHeadCell>
                        <TableHeadCell >RELIGION</TableHeadCell>
                        <TableHeadCell >Payment From</TableHeadCell>

                        <TableHeadCell > REMOVE</TableHeadCell>
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.sendToActualMofaEntryList && props.sendToActualMofaEntryList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={isSendToActualMofaChanged}
                            onClickRemove={onClickRemoveRow}
                            onUpdate={onUpdateRow}
                            agentList={agentList}
                            sectorList={sectorList}
                            visaAuhorisationList={visaAuhorisationList}
                            handleCheckBox={props.handleCheckBox}
                            partyCodeData={props.partyCodeData}
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

export default SendToActualMofaTable

const TableData = (
    props: {
        index: number;
        data: SendToActualMofaEntryInterface;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: SendToActualMofaEntryInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string,
        agentList: AgentInterface[],
        sectorList: SectorInterface[],
        visaAuhorisationList: VisaAuthorisationInterface[]
        handleCheckBox: (index: number, value: boolean) => void
        partyCodeData: PartyCodeInterface
    }

) => {
    const initValue: SendToActualMofaEntryInterface = {
        job_order_actual_profession: '',
        job_order_sector: '',
        party_code: 0,
        job_order_id: 0,

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
    const [localRowData, setLocalRowData] = useState<SendToActualMofaEntryInterface>(initValue)




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
                <CustomSingleCheckBox
                    onChange={(value: boolean) => {
                        // console.log(ele);
                        props.handleCheckBox(props.index, value)
                    }}
                    value={localRowData.isChecked ?? false}
                />
            </TableCell>


            <TableCell >
                <CustomSelectComponentUnlabeled
                    value={localRowData.job_order_actual_profession}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, job_order_actual_profession: value })}
                    options={selectOptionConveter({
                        options: props.partyCodeData.job_order_actual_profession_list,
                        options_struct: { name: 'name', value: 'name' }
                    })} />
            </TableCell>


            <TableCell >
                {/* <UnlabeledInput
                    value={localRowData.job_order_sector}
                    onchange={(value) => setLocalRowData({ ...localRowData, job_order_sector: value })}
                /> */}
                <CustomSelectComponentUnlabeled
                    value={localRowData.job_order_sector}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, job_order_sector: value })}
                    options={selectOptionConveter({
                        options: props.partyCodeData.job_order_sector_list,
                        options_struct: { name: 'name', value: 'id' }
                    })} />
            </TableCell>

            {/* <TableCell >
                <UnlabeledInput
                    value={localRowData.visa_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
                />
            </TableCell> */}
            
            <TableCell >
                {/* <UnlabeledInput
                    value={localRowData.visa_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
                /> */}
                <CustomSelectComponentUnlabeled
                    value={localRowData.visa_profession}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, visa_profession: value })}
                    options={selectOptionConveter({
                        options: props.partyCodeData.visa_profession_list,
                        options_struct: { name: 'name', value: 'id' }
                    })} />
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
                    options={CopyPPList} />
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
                {localRowData.visa_authorisation_name??""}
            </TableCell>


            <TableCell >

                <RedButton text={" Remove"} onClick={() => {
                    props.onClickRemove(props.index)
                }} />

            </TableCell>
        </TableRow>
    )
}