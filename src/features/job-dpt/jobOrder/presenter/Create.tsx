import { createJobOrder } from "../repository";
import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, FileInput, StandardInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { JobOrderInterface } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CountryInterface } from "../../../masters/country/type";
// import { BDEList, } from "../../db/user";
import ActualProfessionTable from "./ActualProfessionTable";
import { readBDEList } from "../../../masters/user/repository";
import { UserInterface } from "../../../context/Model";

const countryList_No_Mol_WorkPermit = ["ksa", "iraq", "uae", "qatar"]
export default function Main(props: {
    onClose: any, fetchJobOrderList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
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


    }
    const [jobOrder, setJobOrder] = useState(initValue)




    async function onClickAdd() {

        // call create
        const flag = await createJobOrder(jobOrder)

        if (!flag) {
            return;
        }
        setJobOrder(initValue)
        props.fetchJobOrderList()
        props.onClose()
    }
    const [BDEList, setBDEList] = useState<UserInterface[]>([])
    const fetchBDEList = async () => {
        const data = await readBDEList()
        setBDEList(data)
    }

    useEffect(() => {
        fetchBDEList()
    }, [])

    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Job Order"
            onClose={props.onClose}
        >

            <div className="grid grid-cols-1 gap-8 mt-10 md:mx-10 md:grid-cols-2">
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
                        <CustomRadioButton
                            inlined={true}

                            option={[{ name: "Company", value: "Company" }, { name: "Domestic", value: "Domestic" }]}
                            onChange={(value) => setJobOrder({ ...jobOrder, type: value })}
                            label="Type*"
                            value={jobOrder.type}
                        />

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
                            onChange={(value) => setJobOrder({ ...jobOrder, CountryId: parseInt(value) })}
                            label="Country"
                        />
                        {props.countryList.map((country, index) => {

                            if (jobOrder.CountryId == country.id) {
                                if (!countryList_No_Mol_WorkPermit.includes(country.name.toLowerCase())) {
                                    return (
                                        <CustomRadioButton
                                            option={[{ name: "yes", value: 1 }, { name: "No", value: 0 }]}
                                            value={jobOrder.MOL}
                                            onChange={(value) => {
                                                if (value == 1)
                                                    setJobOrder({ ...jobOrder, MOL: value })
                                                else
                                                    setJobOrder({ ...jobOrder, MOL: value, workPermit: 0 })

                                            }
                                            }
                                            label="MOL/QVC/E-VISA"
                                        />
                                    )
                                }
                            }

                        })}
                        {jobOrder.MOL == 1 ? <CustomRadioButton
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
                <div className="md:mx-auto ">
                    <div className="mt-4 space-y-4 md:mt-0">
                        <h6 className="text-lg font-medium text-gray-500 dark:text-white">Upload section</h6>
                        <FileInput label="File 1" required handleFileChange={(file) => setJobOrder({ ...jobOrder, file1: file })} />

                        <FileInput label="File 2" handleFileChange={(file) => setJobOrder({ ...jobOrder, file2: file })} />

                        <FileInput label="File 3" handleFileChange={(file) => setJobOrder({ ...jobOrder, file3: file })} />

                        <FileInput label="File 4" handleFileChange={(file) => setJobOrder({ ...jobOrder, file4: file })} />

                        <FileInput label="File 5" handleFileChange={(file) => setJobOrder({ ...jobOrder, file5: file })} />
                    </div>
                </div>

            </div>





            {jobOrder.type == "Domestic" ?
                <ActualProfessionTable
                    jobOrder={jobOrder}
                    onChange={(value) => setJobOrder({ ...jobOrder, acttualProfesionList: value })}
                /> : ""}
        </FullScreenModal>
    )
}