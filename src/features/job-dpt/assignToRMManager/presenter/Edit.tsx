import { useEffect, useState } from "react";

import ModalContent from "../../../../componenets/Modal";
import { SectorInterface } from "../../../masters/sector/type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { JobOrderInterface } from "../type";
import { assign_RM_manager } from "../repository";
import { UserInterface } from "../../../masters/user/type";
import { readBDEList, readRecruitManagerList } from "../../../masters/user/repository";


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
        recruitmentManagerId:0,

    }
    const [jobOrder, setJobOrder] = useState(initValue)




    async function onClickAdd() {

        // call create
        await assign_RM_manager(props.currentElement.id ?? 0, jobOrder)


        setJobOrder(initValue)

        props.fetchJobOrderList()
        props.onClose()
    }

    const [RecruitManagerList, setRecruitManagerList] = useState<UserInterface[]>([])
    const fetchRecruitManagerList = async () => {
        const data = await readRecruitManagerList()
        setRecruitManagerList(data)
    }
    
    useEffect(() => {
        fetchRecruitManagerList()
        setJobOrder(props.currentElement)

      
    }, [])
    return (

        <ModalContent
            buttonName="Assign "
            handleClick={onClickAdd}
            title="Assign Recruit Manager"
            onClose={props.onClose}
        >


            {/* jobOrder recruit manager */}
            <CustomSelectComponent
                value={jobOrder.recruitmentManagerId}
                options={selectOptionConveter({ options: RecruitManagerList, options_struct: { name: "name", value: "id" } })}
                onChange={(value) => setJobOrder({ ...jobOrder, recruitmentManagerId: value })}
                label="Recruitment Manager"
            />


        </ModalContent>
    )
}