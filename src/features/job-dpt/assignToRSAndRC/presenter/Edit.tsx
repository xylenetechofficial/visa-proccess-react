import { useEffect, useState } from "react";

import ModalContent from "../../../../componenets/Modal";
// import { DateInput, FileInput, StandardInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
// import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { BDEList, OPManagerList, rcList, recruitManagerList, rsList } from "../../db/user";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { JobOrderInterface } from "../type";
import { assign_RC_RS } from "../repository";
import { UserInterface } from "../../../masters/user/type";
import { readRecruitCoordinatorList, readRecruitManagerList, readRecruitSuperVisorList } from "../../../masters/user/repository";


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
        companyId: 0,
        division: "",
        departureSectorId: 0,
        operationManagerId: 0,
        recruitmentManagerId: 0,
        rcId: 0,
        rsId: 0

    }
    const [jobOrder, setJobOrder] = useState(initValue)




    async function onClickAdd() {

        // call create
        await assign_RC_RS(props.currentElement.id ?? 0, jobOrder)


        setJobOrder(initValue)

        props.fetchJobOrderList()
        props.onClose()
    }


    const [RecruitSuperVisorList, setRecruitSuperVisorList] = useState<UserInterface[]>([])
    const fetchRecruitSuperVisorList = async () => {
        const data = await readRecruitSuperVisorList()
        setRecruitSuperVisorList(data)
    }

    const [RecruitCoordinatorList, setRecruitCoordinatorList] = useState<UserInterface[]>([])
    const fetchRecruitCoordinatorList = async () => {
        const data = await readRecruitCoordinatorList()
        setRecruitCoordinatorList(data)
    }
    
    useEffect(() => {
        fetchRecruitCoordinatorList()
        fetchRecruitSuperVisorList()

        setJobOrder(props.currentElement)


    }, [])
    return (

        <ModalContent
            buttonName="Assign "
            handleClick={onClickAdd}
            title="Assign RS and RC"
            onClose={props.onClose}
        >


         
            <CustomSelectComponent
                value={jobOrder.rsId}
                options={selectOptionConveter({ options: RecruitSuperVisorList, options_struct: { name: "name", value: "id" } })}
                onChange={(value) => setJobOrder({ ...jobOrder, rsId: value })}
                label="Recruitment Supervisor"
            />
            <CustomSelectComponent
                value={jobOrder.rcId}
                options={selectOptionConveter({ options: RecruitCoordinatorList, options_struct: { name: "name", value: "id" } })}
                onChange={(value) => setJobOrder({ ...jobOrder, rcId: value })}
                label="Recruitment Coordinator"
            />

        </ModalContent>
    )
}