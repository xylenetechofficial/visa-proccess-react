import { useEffect, useState } from "react";

import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, FileInput, StandardInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { BDEList } from "../../db/user";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { JobOrderInterface } from "../type";
import { readJobOrder, updateJobOrder } from "../repository";
import ActualProfessionTable from "./ActualProfessionTable";
import { readBDEList } from "../../../masters/user/repository";
import { UserInterface } from "../../../context/Model";
import { ConsolidateChargeInterface } from "../../../masters/consolidateCharge/type";

const countryList_No_Mol_WorkPermit = ["ksa", "iraq", "uae", "qatar"]


export default function Main(props: {
    consolidateChargeList: ConsolidateChargeInterface[],

    onClose: any, fetchJobOrderList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
    currentElement: JobOrderInterface,
}) {

    const initValue: JobOrderInterface = {
        type: "",
        date: "",
        CountryId: 0,
        MOL: 0,
        workPermit: 0,
        sectorId: 0,
        bde_id: 0,
        companyId: 0,
        division: "",
        departureSectorId: 0,
        actualProfesionList: [],
    }
    const [jobOrder, setJobOrder] = useState(initValue)




    async function onClickAdd() {

        // call create
        await updateJobOrder(props.currentElement.id ?? 0, jobOrder)


        setJobOrder(initValue)

        props.fetchJobOrderList()
        props.onClose()
    }

    const fetchJobOrder = async () => {
        const data = await readJobOrder(props.currentElement.id ?? 0)
        console.log(data);
        setJobOrder(data)
    }

    const [BDEList, setBDEList] = useState<UserInterface[]>([])
    const fetchBDEList = async () => {
        const data = await readBDEList()
        setBDEList(data)
    }


    useEffect(() => {
        fetchBDEList()
        // setJobOrder(props.currentElement)

        fetchJobOrder()
    }, [])
    return (

        <FullScreenModal
            buttonName="Update"
            handleClick={onClickAdd}
            title="Update Job Order"
            onClose={props.onClose}
        >

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <div className="max-w-sm space-y-5">
                        {/* Date */}
                        <DateInput
                            inline={true}
                            id="dateInputJobOrder"
                            label="Date"
                            required
                            value={jobOrder.date}
                            onChange={(value) => {
                                setJobOrder({ ...jobOrder, date: value })
                            }}
                        />
                        {/* type */}
                        {/* <CustomRadioButton
                            inlined={true}

                            option={[{ name: "Company", value: "Company" }, { name: "Domestic", value: "Domestic" }]}
                            onChange={(value) => setJobOrder({ ...jobOrder, type: value })}
                            label="Type*"
                            value={jobOrder.type}
                        /> */}

                        {/* company */}
                        <CustomSelectComponent
                            required
                            value={jobOrder.companyId}
                            options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                            onChange={(value) => setJobOrder({ ...jobOrder, companyId: parseInt(value) })}
                            label="Company"
                        />
                        {/* client country */}
                        <CustomSelectComponent

                            required
                            value={jobOrder.CountryId}
                            options={selectOptionConveter({ options: props.countryList, options_struct: { name: "name", value: "id" } })}
                            onChange={(value) => setJobOrder({ ...jobOrder, MOL: 0, workPermit: 0, CountryId: parseInt(value) })}
                            label="Country"
                        />
                        {props.countryList.map((country, index) => {
                            if (jobOrder.CountryId == country.id) {
                                // if (countryList_No_Mol_WorkPermit.includes(country.name.toLowerCase())) {
                                // if KSA type country
                                if (country.type_id != 1) {
                                    return (
                                        <CustomRadioButton
                                            inlined
                                            option={[{ name: "yes", value: 1 }, { name: "No", value: 0 }]}
                                            value={jobOrder.MOL}
                                            onChange={(value) => {
                                                if (value == 1)
                                                    setJobOrder({ ...jobOrder, MOL: parseInt(value) })
                                                else
                                                    setJobOrder({ ...jobOrder, MOL: parseInt(value), workPermit: 0 })

                                            }
                                            }
                                            label="Mol"
                                        />
                                    )
                                }
                            }

                        })}
                        {jobOrder.MOL == 1 ? <CustomRadioButton
                            inlined
                            option={[{ name: "yes", value: 1 }, { name: "No", value: 0 }]}
                            value={jobOrder.workPermit}
                            onChange={(value) => setJobOrder({ ...jobOrder, workPermit: value })}
                            label="work Permit"
                        /> : ""}

                        {/* sector */}
                        <CustomSelectComponent
                            required
                            value={jobOrder.sectorId}
                            options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
                            onChange={(value) => setJobOrder({ ...jobOrder, sectorId: parseInt(value) })}
                            label="Sector"
                        />
                        {/* BDE name */}
                        <CustomSelectComponent
                            required
                            value={jobOrder.bde_id}
                            options={selectOptionConveter({ options: BDEList, options_struct: { name: "name", value: "id" } })}
                            onChange={(value) => setJobOrder({ ...jobOrder, bde_id: value })}
                            label="BDEName"
                        />

                        {/* division */}
                        <StandardInput
                            required
                            onChangeValue={(value: string) => setJobOrder({ ...jobOrder, division: value })}
                            label="Division"
                            value={jobOrder.division}
                        />
                        {/* depature sector */}
                        <CustomSelectComponent
                            required
                            value={jobOrder.departureSectorId}
                            options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
                            onChange={(value) => setJobOrder({ ...jobOrder, departureSectorId: value })}
                            label="Departure Sector"
                        />

                        {/* quantity */}
                        <StandardInput
                            
type="number"
                    
                            onChangeValue={(value: string) => setJobOrder({ ...jobOrder, quantity: parseInt(value) })}
                            label="Quantity"
                            value={jobOrder.quantity}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="mt-4 space-y-8 md:mt-0">
                        <FileInput
                            handleFileChange={(file) => setJobOrder({ ...jobOrder, file1: file })}
                            label="File 1"
                            url={jobOrder.file1_url}
                        />

                        <FileInput
                            label="File 2"
                            url={jobOrder.file2_url}
                            handleFileChange={(file) => setJobOrder({ ...jobOrder, file2: file })} />

                        <FileInput
                            label="File 3"
                            url={jobOrder.file3_url}
                            handleFileChange={(file) => setJobOrder({ ...jobOrder, file3: file })} />

                        <FileInput
                            label="File 4"
                            url={jobOrder.file4_url}
                            handleFileChange={(file) => setJobOrder({ ...jobOrder, file4: file })} />

                        <FileInput
                            label="File 5"
                            url={jobOrder.file5_url}
                            handleFileChange={(file) => setJobOrder({ ...jobOrder, file5: file })} />
                    </div>
                </div>

            </div>

            {jobOrder.type == "Domestic" ?
                <ActualProfessionTable
                    consolidateChargeList={props.consolidateChargeList}
                    jobOrder={jobOrder}
                    onChange={(value) => setJobOrder({ ...jobOrder, actualProfesionList: value })}
                    mode="edit"
                /> : ""}
        </FullScreenModal>
    )
}