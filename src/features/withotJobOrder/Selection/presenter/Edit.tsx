import { useEffect, useState } from "react";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { SelectionInterface } from "../type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
import { readAgentList } from "../../../masters/agent/repository";
import { AgentInterface } from "../../../masters/agent/type";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { updateSelection } from "../repository";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { NomineeRelationList, ReligionList, SelectionStatusList } from "../../../db";


export default function Main(props: {
    onClose: any, fetchSelectionList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
    currentElement: SelectionInterface,
}) {

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
    const [selectionListEle, setSelectionListEle] = useState<SelectionInterface>(initValue)




    async function handleUpdate() {

        // call create
        await updateSelection(props.currentElement.id ?? 0, selectionListEle)


        setSelectionListEle(initValue)

        props.fetchSelectionList()
        props.onClose()
    }

    const [visaAuhorisationList, setvisaAuhorisationList] = useState<VisaAuthorisationInterface[]>([])
    const fetchvisaAuhorisationList = async () => {
        const data = await readVisaAuthorisationList();
        if (data) {
            setvisaAuhorisationList(data);
        }
    }

    const [agentList, setAgentList] = useState<AgentInterface[]>([])
    const fetchAgentList = async () => {
        const data = await readAgentList(false,'document_received');
        if (data) {
            setAgentList(data);

        }
    }

    useEffect(() => {
        // setSelection(props.currentElement)
        setSelectionListEle(props.currentElement)
        fetchvisaAuhorisationList()
        fetchAgentList()
        // fetchSectorList()
        fetchvisaAuhorisationList()
    }, [])
    return (

        <ModalContent
            buttonName="Update"
            handleClick={handleUpdate}
            title="Update Job Order"
            onClose={props.onClose}
        >

            <div className=" grid grid-cols-1 py-3  gap-2 shadow">

                <UpdateContentBox >
                    <SubHeading1 text=" COMPANY :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setSelectionListEle({ ...selectionListEle, company_id: value })}

                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={selectionListEle.company_id}
                    />
                </UpdateContentBox>

                {/* <UpdateContentBox>
                    <SubHeading1 text="CANDIDATE  :" />

                </UpdateContentBox> */}
                <UpdateContentBox>

                    <SubHeading1 text="NAME  :" />
                    <UnlabeledInput
                        value={selectionListEle.name}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, name: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PASSPORT NO :" />
                    <UnlabeledInput
                        value={selectionListEle.passport_no}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, passport_no: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PP ISSUED DATE:" />
                    <DateInput
                        id='jbvh6d5r'
                        value={selectionListEle.pp_issued_date}
                        onChange={(value) => setSelectionListEle({ ...selectionListEle, pp_issued_date: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PP EXPIRY DATE :" />
                    <DateInput
                        id='dkjbvh6d5r'
                        value={selectionListEle.pp_expiry_date}
                        onChange={(value) => setSelectionListEle({ ...selectionListEle, pp_expiry_date: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PLACE OF ISSUE :" />
                    <UnlabeledInput
                        value={selectionListEle.place_of_issue}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, place_of_issue: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text=" ACTUAL PROFESSION:" />
                    <UnlabeledInput
                        value={selectionListEle.actual_profession}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, actual_profession: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="TOTAL SALARY (SR):" />
                    <UnlabeledInput
                        type='number'
                        value={selectionListEle.total_salary}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, total_salary: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="BASIC SALARY (SR) :" />
                    <UnlabeledInput
                        type='number'
                        value={selectionListEle.basic_salary}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, basic_salary: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="HA/TA PROVIDED :" />
                    <CustomSingleCheckBox
                        value={selectionListEle.ha_or_ta_provided ? true : false}
                        onChange={(value) => setSelectionListEle({ ...selectionListEle, ha_or_ta_provided: value ? 1 : 0 })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="HA (SR) :" />
                    <UnlabeledInput
                        type="number"
                        disabled={selectionListEle.ha_or_ta_provided ? true : false}
                        value={selectionListEle.ha}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, ha: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="TA (SR) :" />
                    <UnlabeledInput
                        type="number"
                        disabled={selectionListEle.ha_or_ta_provided ? true : false}
                        value={selectionListEle.ta}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, ta: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="FA PROVIDED :" />
                    <CustomSingleCheckBox
                        value={selectionListEle.fa_provided ? true : false}
                        onChange={(value) => setSelectionListEle({ ...selectionListEle, fa_provided: value ? 1 : 0 })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="FA  :" />
                    <UnlabeledInput
                        type="number"
                        disabled={selectionListEle.fa_provided ? true : false}
                        value={selectionListEle.fa}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, fa: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="ALLOWANCE  :" />
                    <UnlabeledInput
                        type="number"
                        value={selectionListEle.other_allowance}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, other_allowance: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text=" AGENT :" />
                    <CustomSelectComponentUnlabeled
                        value={selectionListEle.agent}
                        onChange={(value: any) => setSelectionListEle({ ...selectionListEle, agent: value })}
                        options={selectOptionConveter({ options: agentList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="AGE  :" />
                    <UnlabeledInput
                        type="number"
                        value={selectionListEle.age}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, age: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="SECTOR  :" />
                    <CustomSelectComponentUnlabeled
                        value={selectionListEle.sector}
                        onChange={(value: any) => setSelectionListEle({ ...selectionListEle, sector: value })}
                        options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="SELECTION STATUS  :" />
                    <CustomSelectComponentUnlabeled
                        value={selectionListEle.selection_status}
                        onChange={(value: any) => setSelectionListEle({ ...selectionListEle, selection_status: value })}
                        options={SelectionStatusList}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="CONTACT :" />
                    <UnlabeledInput
                        type='tel'
                        value={selectionListEle.contact_no}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, contact_no: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="DATE OF BIRTH:" />

                    <DateInput
                        id='ajgdvf'
                        value={selectionListEle.date_of_birth}
                        onChange={(value) => setSelectionListEle({ ...selectionListEle, date_of_birth: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PLACE OF BIRTH  :" />
                    <UnlabeledInput
                        value={selectionListEle.place_of_birth}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, place_of_birth: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="ADDRESS   :" />
                    <UnlabeledInput
                        value={selectionListEle.address}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, address: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="NOMINEE NAME  :" />

                    <UnlabeledInput
                        value={selectionListEle.nominee_name}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, nominee_name: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="NOMINEE RELATION  :" />

                    <CustomSelectComponentUnlabeled
                        value={selectionListEle.nominee_relation}
                        onChange={(value: any) => setSelectionListEle({ ...selectionListEle, nominee_relation: value })}
                        options={NomineeRelationList}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="RELIGION   :" />
                    <CustomSelectComponentUnlabeled
                        value={selectionListEle.religion}
                        onChange={(value: any) => setSelectionListEle({ ...selectionListEle, religion: value })}
                        options={ReligionList} />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="VISA AUTHORIZATION:  :" />

                    <CustomSelectComponentUnlabeled
                        value={selectionListEle.visa_authorization}
                        onChange={(value: any) => setSelectionListEle({ ...selectionListEle, visa_authorization: value })}
                        options={selectOptionConveter({ options: visaAuhorisationList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="VISA SUBMISSION  :" />

                    <CustomSelectComponentUnlabeled
                        value={selectionListEle.visa_submission}
                        onChange={(value: any) => setSelectionListEle({ ...selectionListEle, visa_submission: value })}
                        options={[
                            { name: "Mumbai", value: "Mumbai" },
                            { name: "Delhi", value: "Delhi" },
                            // { name: "RAISE INVOICE", value: "RAISE INVOICE" }
                        ]} />
                </UpdateContentBox><UpdateContentBox>

                    <SubHeading1 text="Divisions :" />
                    <UnlabeledInput
                        value={selectionListEle.division}
                        onchange={(value) => setSelectionListEle({ ...selectionListEle, division: value })}
                    />
                </UpdateContentBox>




            </div>
            {/* <GreenButton text="Update" onClick={handleUpdate} /> */}
        </ModalContent>
    )
}