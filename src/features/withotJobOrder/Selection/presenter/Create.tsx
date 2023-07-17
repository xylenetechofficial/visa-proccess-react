import { createSelection } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { SelectionInterface } from "../type";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CountryInterface } from "../../../masters/country/type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import SelectionTable from "./CandidateTable";


export default function Main(props: {
    onClose: any, fetchSelectionList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
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
        division: ''
    }
    const [selectionList, setSelectionList] = useState<SelectionInterface[]>([])
    const [company, setCompany] = useState()



    async function onClickAdd() {

        // call create
        const response = await createSelection(selectionList)

        if (response.code != 201) {
            return;
        }
        setSelectionList([])
        props.fetchSelectionList()
    }


    useEffect(() => {
        setSelectionList([])
    }, [company])
    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Selection List"
            onClose={props.onClose}
        >
            {/*  select company */}
            <div className=" grid grid-cols-1 py-3  gap-2 ">
                <UpdateContentBox>
                    <SubHeading1 text="Company :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setCompany(value)}
                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={company}
                    />
                </UpdateContentBox>
            </div>


            {/* candiate list */}
            {company ?
                <SelectionTable
                    onChange={(ele) => setSelectionList(ele)}
                    selectionList={selectionList}
                    company={company}
                /> : ""}
        </FullScreenModal>
    )
}