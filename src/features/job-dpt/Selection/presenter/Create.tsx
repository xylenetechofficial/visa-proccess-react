import { createSelection, readJobOrderList } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { SelectionInterface, SelectionJobOrderInterface } from "../type";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CountryInterface } from "../../../masters/country/type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import SelectionTable from "./CandidateTable";
import { JobOrderInterface } from "../../jobOrder/type";



export default function Main(props: {
    onClose: any, fetchSelectionList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
}) {


    const [selectionList, setSelectionList] = useState<SelectionInterface[]>([])
    const [company, setCompany] = useState<number>(0)



    async function onClickAdd() {

        // call create
        const response = await createSelection(selectionList)

        if (response.code != 201) {
            return;
        }
        setSelectionList([])
        props.fetchSelectionList()
    }

    const job_order_init = {
        job_order_actual_profession_list: [],
        job_order_sector_list: [],
        job_order_id: 0,
        job_order_no: "",
    }
    const [jobOrderList, setJobOrderList] = useState<SelectionJobOrderInterface[]>([]);
    const [joborder, setJoborder] = useState<SelectionJobOrderInterface>(job_order_init)
    const [job_order_id, set_job_order_id] = useState(0)

    const get_sector_and_actual_profession = (job_order_id: number) => {
        const matched_data = jobOrderList.find((jobOrder) => jobOrder.job_order_id == job_order_id);

        setJoborder(matched_data ?? job_order_init)

        // return matchingCode ?? party_code_init;
    };

    const fetchJobOrder = async () => {
        const data = await readJobOrderList({ companyId: company })
        if (data) {
            setJobOrderList(data)
            console.log(data);   // Only Dev
        }
    }
    useEffect(() => {
        fetchJobOrder()

    }, [company])

    useEffect(() => {
        get_sector_and_actual_profession(job_order_id)
        console.log("job_order_id: change");   // Only Dev
    }, [job_order_id])

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

                <UpdateContentBox>
                    <SubHeading1 text="JobOrder :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => set_job_order_id(value)}
                        options={selectOptionConveter({ options: jobOrderList, options_struct: { name: "job_order_no", value: "job_order_id" } })}
                        value={job_order_id}
                    />
                </UpdateContentBox>
            </div>


            {/* candiate list */}
            {company ?
                <SelectionTable
                    onChange={(ele) => setSelectionList(ele)}
                    selectionList={selectionList}
                    company={company}
                    joborder={joborder}
                /> : ""}
        </FullScreenModal>
    )
}