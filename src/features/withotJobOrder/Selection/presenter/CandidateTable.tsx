import { SelectionInterface } from '../type'
import { GreenButton, RedButton } from '../../../../componenets/CustomButton';
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
import { NomineeRelationList, ReligionList, SelectionStatusList, VisaSubmissionList } from '../../../db';


const SelectionTable = (props: {
    selectionList: SelectionInterface[],
    onChange: (ele: SelectionInterface[]) => void,
    company: number

}) => {

    const initValue: SelectionInterface = {
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
        division: ''
    }
    const [isSelectionChanged, setIsSelectionChanged] = useState<string>("")

    // add new row
    const onClickAddNewRow = () => {
        const arr = [...props.selectionList, initValue]
        props.onChange(arr)
    }

    //  remove a row
    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return
        const arr = props.selectionList.filter((e, i) => i !== index)
        props.onChange(arr)
        setIsSelectionChanged(Date.now().toString())
    }

    // update a row
    function onUpdateRow(index: number, rowData: SelectionInterface) {
        const nextData = props.selectionList.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        props.onChange(nextData)
        // setSelectionList(nextData)
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

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > NAME</TableHeadCell3>
                        <TableHeadCell3 > PASSPORT NO</TableHeadCell3>
                        <TableHeadCell3 > PP Issued Date</TableHeadCell3>
                        <TableHeadCell3 >PP EXPIRY DATE</TableHeadCell3>

                        <TableHeadCell3 > PLACE OF ISSUE</TableHeadCell3>
                        <TableHeadCell3 > ACTUAL PROFESSION</TableHeadCell3>
                        <TableHeadCell3 >  TOTAL SALARY (SR)</TableHeadCell3>
                        <TableHeadCell3 > BASIC SALARY (SR)	 			</TableHeadCell3>

                        <TableHeadCell3 > HA/TA PROVIDED </TableHeadCell3>
                        <TableHeadCell3 > HA (SR)</TableHeadCell3>
                        <TableHeadCell3 > TA (SR)</TableHeadCell3>
                        <TableHeadCell3 > FA PROVIDED</TableHeadCell3>
                        <TableHeadCell3 > FA (SR)</TableHeadCell3>
                        <TableHeadCell3 >OTHER ALLOWANCE</TableHeadCell3>

                        <TableHeadCell3 > AGENT</TableHeadCell3>
                        <TableHeadCell3 > AGE</TableHeadCell3>
                        <TableHeadCell3 >SECTOR</TableHeadCell3>
                        <TableHeadCell3 > SELECTION STATUS</TableHeadCell3>

                        <TableHeadCell3 > CONTACT NO</TableHeadCell3>
                        <TableHeadCell3 > DATE OF BIRTH</TableHeadCell3>
                        <TableHeadCell3 > PLACE OF BIRTH</TableHeadCell3>
                        <TableHeadCell3 > ADDRESS</TableHeadCell3>

                        <TableHeadCell3 > NOMINEE NAME</TableHeadCell3>
                        <TableHeadCell3 > NOMINEE RELATION</TableHeadCell3>
                        <TableHeadCell3 >RELIGION</TableHeadCell3>
                        <TableHeadCell3 >VISA AUTHORIZATION</TableHeadCell3>

                        <TableHeadCell3 >VISA SUBMISSION</TableHeadCell3>
                        <TableHeadCell3 >DIVISION</TableHeadCell3>
                        <TableHeadCell3 > REMOVE</TableHeadCell3>


                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.selectionList && props.selectionList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={isSelectionChanged}
                            onClickRemove={onClickRemoveRow}
                            onUpdate={onUpdateRow}
                            agentList={agentList}
                            sectorList={sectorList}
                            visaAuhorisationList={visaAuhorisationList}
                        />

                    ))}


                    <TableRow3>
                        <TableCell3>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell3>
                    </TableRow3>
                </TableBody3>
            </Table3>

        </div>
    )
}

export default SelectionTable

const TableData = (
    props: {
        index: number;
        data: SelectionInterface;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: SelectionInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string,
        agentList: AgentInterface[],
        sectorList: SectorInterface[],
        visaAuhorisationList: VisaAuthorisationInterface[]
    }

) => {
    const initValue: SelectionInterface = {
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
    }
    const [localRowData, setLocalRowData] = useState<SelectionInterface>(initValue)




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
                {/* actual profession */}
                <UnlabeledInput
                    value={localRowData.actual_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, actual_profession: value })}
                />
            </TableCell3>
            <TableCell3 >
                {/* total salary*/}
                <UnlabeledInput
                    type='number'
                    value={localRowData.total_salary}
                    onchange={(value) => setLocalRowData({ ...localRowData, total_salary: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* basic salary*/}
                <UnlabeledInput
                    type='number'
                    value={localRowData.basic_salary}
                    onchange={(value) => setLocalRowData({ ...localRowData, basic_salary: parseInt(value) })}
                />
            </TableCell3>

            {/* ha /ta */}
            <TableCell3 >
                <CustomSingleCheckBox
                    value={localRowData.ha_or_ta_provided ? true : false}
                    onChange={(value) => setLocalRowData({ ...localRowData, ha_or_ta_provided: value ? 1 : 0 })}
                />

            </TableCell3>

            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    disabled={localRowData.ha_or_ta_provided ? true : false}
                    value={localRowData.ha}
                    onchange={(value) => setLocalRowData({ ...localRowData, ha: parseInt(value) })}
                />
            </TableCell3>

            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    disabled={localRowData.ha_or_ta_provided ? true : false}
                    value={localRowData.ta}
                    onchange={(value) => setLocalRowData({ ...localRowData, ta: parseInt(value) })}
                />
            </TableCell3>

            <TableCell3 >
                <CustomSingleCheckBox
                    value={localRowData.fa_provided ? true : false}
                    onChange={(value) => setLocalRowData({ ...localRowData, fa_provided: value ? 1 : 0 })}
                />
            </TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    disabled={localRowData.fa_provided ? true : false}
                    value={localRowData.fa}
                    onchange={(value) => setLocalRowData({ ...localRowData, fa: parseInt(value) })}
                />
            </TableCell3>

            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    value={localRowData.other_allowance}
                    onchange={(value) => setLocalRowData({ ...localRowData, other_allowance: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    value={localRowData.agent}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, agent: value })}
                    options={selectOptionConveter({ options: props.agentList, options_struct: { name: "name", value: "id" } })}
                />
            </TableCell3>

            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    value={localRowData.age}
                    onchange={(value) => setLocalRowData({ ...localRowData, age: parseInt(value) })}
                />
            </TableCell3>

            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    value={localRowData.sector}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, sector: value })}
                    options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
                />
            </TableCell3>

            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    value={localRowData.selection_status}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, selection_status: value })}
                    options={SelectionStatusList}
                />

            </TableCell3>

            <TableCell3 >
                <UnlabeledInput
                    type='tel'
                    value={localRowData.contact_no}
                    onchange={(value) => setLocalRowData({ ...localRowData, contact_no: value })}
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
                <CustomSelectComponentUnlabeled
                    value={localRowData.visa_authorization}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, visa_authorization: value })}
                    options={selectOptionConveter({ options: props.visaAuhorisationList, options_struct: { name: "name", value: "id" } })}
                />
            </TableCell3>


            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    value={localRowData.visa_submission}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, visa_submission: value })}
                    options={VisaSubmissionList} />
            </TableCell3>


            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.division}
                    onchange={(value) => setLocalRowData({ ...localRowData, division: value })}
                />
            </TableCell3>


            <TableCell3 >

                <RedButton text={" Remove"} onClick={() => {
                    props.onClickRemove(props.index)
                }} />

            </TableCell3>
        </TableRow3>
    )
}