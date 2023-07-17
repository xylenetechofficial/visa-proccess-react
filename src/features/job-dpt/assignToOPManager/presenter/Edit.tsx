import { useEffect, useState } from "react";

import ModalContent from "../../../../componenets/Modal";
import { DateInput, FileInput, StandardInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { JobOrderInterface } from "../type";
import { assign_Op_manager, readJobOrder } from "../repository";
import { readBDEList, readOperationManagerist, readUserList } from "../../../masters/user/repository";
import { UserInterface } from "../../../masters/user/type";


export default function Main(props: {
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
        bde_name:'',
        companyId: 0,
        division: "",
        departureSectorId: 0,
        operationManagerId: 0,

    }
    const [jobOrder, setJobOrder] = useState(initValue)




    async function onClickAdd() {

        // call create
        await assign_Op_manager(props.currentElement.id ?? 0, jobOrder)


        setJobOrder(initValue)

        props.fetchJobOrderList()
        props.onClose()
    }

    const fetchJobOrder = async () => {
        const data = await readJobOrder(props.currentElement.id ?? 0)
        console.log(data);
        setJobOrder(data)
    }

    const [OperationManagerist, setOperationManagerist] = useState<UserInterface[]>([])
    const fetchOperationManagerist = async () => {
        const data = await readOperationManagerist()
        console.log(data);
        setOperationManagerist(data)
    }
    
    useEffect(() => {
        fetchOperationManagerist()
        setJobOrder(props.currentElement)

    }, [])
    return (

        <ModalContent
            buttonName="Assign "
            handleClick={onClickAdd}
            title="Assign Operation Manager"
            onClose={props.onClose}
        >


            {/* jobOrder operation manager */}
            <CustomSelectComponent
                value={jobOrder.operationManagerId}
                options={selectOptionConveter({ options: OperationManagerist, options_struct: { name: "name", value: "id" } })}
                onChange={(value) => setJobOrder({ ...jobOrder, operationManagerId: value })}
                label="Operational Manager"
            />


        </ModalContent>
    )
}