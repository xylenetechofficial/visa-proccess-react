import { PartyCodeInterface, SendToActualMofaEntryInterface } from '../type'
import { RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';

import { useState, useEffect } from "react";
import { DateInput, UnlabeledInput } from '../../../../componenets/Input';
import { CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';
import { VisaAuthorisationInterface } from '../../../masters/visaAuthorization/type';
import { readVisaAuthorisationList } from '../../../masters/visaAuthorization/repository';
import { AgentInterface } from '../../../masters/agent/type';
import { readAgentList } from '../../../masters/agent/repository';
import { readSectorList } from '../../../masters/sector/repository';
import { CopyPPList, NomineeRelationList, ReligionList } from '../../../db';


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

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > NAME</TableHeadCell3>
                        <TableHeadCell3 > PASSPORT NO</TableHeadCell3>
                        <TableHeadCell3 > ACTUAL PROFESSION</TableHeadCell3>
                        <TableHeadCell3 > AGENT</TableHeadCell3>

                        <TableHeadCell3 > Select</TableHeadCell3>
                        <TableHeadCell3 > *job Order - Actual Profession	</TableHeadCell3>
                        <TableHeadCell3 > *job Order - Sector </TableHeadCell3>
                        {/* <TableHeadCell3 > *job Order - visa Profession </TableHeadCell3> */}

                        <TableHeadCell3 >VISA PROFESSION</TableHeadCell3>
                        <TableHeadCell3 >MOFA NUMBER</TableHeadCell3>
                        <TableHeadCell3 >PP/COPY</TableHeadCell3>

                        <TableHeadCell3 > PP Issued Date</TableHeadCell3>
                        <TableHeadCell3 >PP EXPIRY DATE</TableHeadCell3>

                        <TableHeadCell3 > PLACE OF ISSUE</TableHeadCell3>

                        <TableHeadCell3 > DATE OF BIRTH</TableHeadCell3>
                        <TableHeadCell3 > PLACE OF BIRTH</TableHeadCell3>
                        <TableHeadCell3 > ADDRESS</TableHeadCell3>

                        <TableHeadCell3 > NOMINEE NAME</TableHeadCell3>
                        <TableHeadCell3 > NOMINEE RELATION</TableHeadCell3>
                        <TableHeadCell3 >RELIGION</TableHeadCell3>
                        <TableHeadCell3 >Payment From</TableHeadCell3>

                        <TableHeadCell3 > REMOVE</TableHeadCell3>
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
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


                    {/* <TableRow3>
                        <TableCell3>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell3>
                    </TableRow3> */}
                </TableBody3>
            </Table3>

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
        <TableRow3 key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>
            {/* name */}
            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.name}
                    onchange={(value) => setLocalRowData({ ...localRowData, name: value })}
                />
            </TableCell3>

            {/* passport  */}
            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.passport_no}
                    onchange={(value) => setLocalRowData({ ...localRowData, passport_no: value })}
                />
            </TableCell3>

            <TableCell3 >
                {/* actual profession */}
                {localRowData.actual_profession}
            </TableCell3>

            <TableCell3 >
                {localRowData.agent_name}
            </TableCell3>


            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value: boolean) => {
                        // console.log(ele);
                        props.handleCheckBox(props.index, value)
                    }}
                    value={localRowData.isChecked ?? false}
                />
            </TableCell3>


            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    value={localRowData.job_order_actual_profession}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, job_order_actual_profession: value })}
                    options={selectOptionConveter({
                        options: props.partyCodeData.job_order_actual_profession_list,
                        options_struct: { name: 'name', value: 'name' }
                    })} />
            </TableCell3>


            <TableCell3 >
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
            </TableCell3>

            {/* <TableCell3 >
                <UnlabeledInput
                    value={localRowData.visa_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
                />
            </TableCell3> */}

            <TableCell3 >
                {/* <UnlabeledInput
                    value={localRowData.visa_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
                /> */}
                <CustomSelectComponentUnlabeled
                    value={localRowData.visa_profession}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, visa_profession: value })}
                    options={selectOptionConveter({
                        options: props.partyCodeData.visa_profession_list,
                        options_struct: { name: 'name', value: 'name' }
                    })} />
            </TableCell3>

            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.mofa_number}
                    onchange={(value) => setLocalRowData({ ...localRowData, mofa_number: value })}
                />
            </TableCell3>

            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    value={localRowData.pp_copy}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, pp_copy: value })}
                    options={CopyPPList} />
            </TableCell3>

            {/* pp issued date */}
            <TableCell3 >
                <DateInput
                    id='jbvh6d5r'
                    value={localRowData.pp_issued_date}
                    onChange={(value) => setLocalRowData({ ...localRowData, pp_issued_date: value })}
                />
            </TableCell3>

            {/* ppp expiry date */}
            <TableCell3 >
                <DateInput
                    id='dkjbvh6d5r'
                    value={localRowData.pp_expiry_date}
                    onChange={(value) => setLocalRowData({ ...localRowData, pp_expiry_date: value })}
                />
            </TableCell3>

            {/* place of issue */}
            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.place_of_issue}
                    onchange={(value) => setLocalRowData({ ...localRowData, place_of_issue: value })}
                />
            </TableCell3>


            <TableCell3 >
                <DateInput
                    id='ajgdvf'
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

            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.nominee_name}
                    onchange={(value) => setLocalRowData({ ...localRowData, nominee_name: value })}
                />
            </TableCell3>

            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    value={localRowData.nominee_relation}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, nominee_relation: value })}
                    options={NomineeRelationList}
                />
            </TableCell3>


            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    value={localRowData.religion}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, religion: value })}
                    options={ReligionList} />
            </TableCell3>


            <TableCell3 >
                {localRowData.visa_authorisation_name ?? ""}
            </TableCell3>


            <TableCell3 >

                <RedButton text={" Remove"} onClick={() => {
                    props.onClickRemove(props.index)
                }} />

            </TableCell3>
        </TableRow3>
    )
}