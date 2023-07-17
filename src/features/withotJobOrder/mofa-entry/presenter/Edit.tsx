import { useEffect, useState } from "react";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { MofaEntryInterface } from "../type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
import { readAgentList } from "../../../masters/agent/repository";
import { AgentInterface } from "../../../masters/agent/type";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { GreenButton } from "../../../../componenets/CustomButton";
import { updateMofaEntry } from "../repository";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { NomineeRelationList, ReligionList, SelectionStatusList, VisaSubmissionList } from "../../../db";


export default function Main(props: {
    onClose: any, fetchMofaEntryList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
    currentElement: MofaEntryInterface,
}) {

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
    const [mofaEntryListEle, setMofaEntryListEle] = useState<MofaEntryInterface>(initValue)




    async function handleUpdate() {

        // call create
        await updateMofaEntry(props.currentElement.id ?? 0, mofaEntryListEle)


        setMofaEntryListEle(initValue)

        props.fetchMofaEntryList()
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
        const data = await readAgentList();
        if (data) {
            setAgentList(data);

        }
    }

    useEffect(() => {
        // setMofaEntry(props.currentElement)
        setMofaEntryListEle(props.currentElement)
        fetchvisaAuhorisationList()
        fetchAgentList()
        // fetchSectorList()
        fetchvisaAuhorisationList()
    }, [])
    return (

        <ModalContent
            buttonName="Update"
            handleClick={handleUpdate}
            title="Update Mofa Entry"
            onClose={props.onClose}
        >

            <div className=" grid grid-cols-1 py-3  gap-2 shadow">

                <UpdateContentBox >
                    <SubHeading1 text=" COMPANY :" />
                    {/* {mofaEntryListEle.company_name ?? ""} */}
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, company_id: value })}

                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={mofaEntryListEle.company_id}
                    />
                </UpdateContentBox>

                {/* <UpdateContentBox>
                    <SubHeading1 text="CANDIDATE  :" />

                </UpdateContentBox> */}
                <UpdateContentBox>

                    <SubHeading1 text="NAME  :" />
                    <UnlabeledInput
                        value={mofaEntryListEle.name}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, name: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PASSPORT NO :" />
                    <UnlabeledInput
                        value={mofaEntryListEle.passport_no}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, passport_no: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PP ISSUED DATE:" />
                    <DateInput
                        id='jbvh6d5r'
                        value={mofaEntryListEle.pp_issued_date}
                        onChange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, pp_issued_date: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PP EXPIRY DATE :" />
                    <DateInput
                        id='dkjbvh6d5r'
                        value={mofaEntryListEle.pp_expiry_date}
                        onChange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, pp_expiry_date: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PLACE OF ISSUE :" />
                    <UnlabeledInput
                        value={mofaEntryListEle.place_of_issue}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, place_of_issue: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text=" ACTUAL PROFESSION:" />
                    {mofaEntryListEle.actual_profession}
                    {/* <UnlabeledInput
                        value={mofaEntryListEle.actual_profession}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, actual_profession: value })}
                    /> */}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text=" SECTOR:" />
                    {mofaEntryListEle.sector_name ?? ""}
                    {/* <UnlabeledInput
                        value={mofaEntryListEle.actual_profession}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, actual_profession: value })}
                    /> */}
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text=" AGENT :" />
                    <CustomSelectComponentUnlabeled
                        value={mofaEntryListEle.agent}
                        onChange={(value: any) => setMofaEntryListEle({ ...mofaEntryListEle, agent: value })}
                        options={selectOptionConveter({ options: agentList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Visa profession :" />
                    <UnlabeledInput
                        value={mofaEntryListEle.visa_profession}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, visa_profession: value })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="Mofa number :" />
                    <UnlabeledInput
                        value={mofaEntryListEle.mofa_number}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, mofa_number: value })}
                    />
                </UpdateContentBox>



                <UpdateContentBox>

                    <SubHeading1 text="PP/COPY :" />
                    <CustomSelectComponentUnlabeled
                        value={mofaEntryListEle.pp_copy}
                        onChange={(value: any) => setMofaEntryListEle({ ...mofaEntryListEle, pp_copy: value })}
                        options={[
                            { name: "PP", value: "PP" },
                            { name: "COPY", value: "COPY" },
                            // { name: "RAISE INVOICE", value: "RAISE INVOICE" }
                        ]} />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="PLACE OF ISSUE  :" />
                    <UnlabeledInput
                        value={mofaEntryListEle.place_of_birth}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, place_of_birth: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="DATE OF BIRTH:" />

                    <DateInput
                        id='ajgdvf'
                        value={mofaEntryListEle.date_of_birth}
                        onChange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, date_of_birth: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PLACE OF BIRTH  :" />
                    <UnlabeledInput
                        value={mofaEntryListEle.place_of_birth}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, place_of_birth: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="ADDRESS   :" />
                    <UnlabeledInput
                        value={mofaEntryListEle.address}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, address: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="NOMINEE NAME  :" />

                    <UnlabeledInput
                        value={mofaEntryListEle.nominee_name}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, nominee_name: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="NOMINEE RELATION  :" />

                    <CustomSelectComponentUnlabeled
                        value={mofaEntryListEle.nominee_relation}
                        onChange={(value: any) => setMofaEntryListEle({ ...mofaEntryListEle, nominee_relation: value })}
                        options={NomineeRelationList}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="RELIGION   :" />
                    <CustomSelectComponentUnlabeled
                        value={mofaEntryListEle.religion}
                        onChange={(value: any) => setMofaEntryListEle({ ...mofaEntryListEle, religion: value })}
                        options={ReligionList} />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="VISA AUTHORIZATION:  :" />

                    <CustomSelectComponentUnlabeled
                        value={mofaEntryListEle.visa_authorization}
                        onChange={(value: any) => setMofaEntryListEle({ ...mofaEntryListEle, visa_authorization: value })}
                        options={selectOptionConveter({ options: visaAuhorisationList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="VISA SUBMISSION  :" />

                    <CustomSelectComponentUnlabeled
                        value={mofaEntryListEle.visa_submission}
                        onChange={(value: any) => setMofaEntryListEle({ ...mofaEntryListEle, visa_submission: value })}
                        options={VisaSubmissionList} />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Divisions :" />
                    <UnlabeledInput
                        value={mofaEntryListEle.division}
                        onchange={(value) => setMofaEntryListEle({ ...mofaEntryListEle, division: value })}
                    />
                </UpdateContentBox>






            </div>
            {/* <GreenButton text="Update" onClick={handleUpdate} /> */}
        </ModalContent>
    )
}