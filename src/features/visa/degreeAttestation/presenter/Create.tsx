import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import DegreeAttestationList from "./DegreAttestationList";
import { DegreeAttestationInterface } from "../type/Index";
import { VendorInterface } from "../../../masters/vendor/type";
import { readVendorList } from "../../../masters/vendor/repository";
import { readRecruitCoordinatorList } from "../../../masters/user/repository";
import { readAgentList } from "../../../masters/agent/repository";
// import { AgencyInterface } from "../../../masters/agency/type";
import { UserInterface } from "../../../context/Model";
import { AgentInterface } from "../../../masters/agent/type";
import { CompanyInterface } from "../../../masters/company/type";
import { readCompanyList } from "../../../masters/company/repository";
import { addDegreeAttestationList } from "../repository";

export default function Main(props: {
    onClose: any,
}) {
    const [degreAttestationList, setDegreAttestationList] = useState<DegreeAttestationInterface[]>([])

    const [AgentList, setAgentList] = useState<AgentInterface[]>([])
    const fetchAgentList = async () => {
        const data = await readAgentList()
        setAgentList(data)
    }

    const [RecruitCoordinatorList, setRecruitCoordinatorList] = useState<UserInterface[]>([])
    const fetchRecruitCoordinatorList = async () => {
        const data = await readRecruitCoordinatorList()
        setRecruitCoordinatorList(data)
    }

    const [companyList, setCompanyList] = useState<CompanyInterface[]>([])
    const fetchcomapanyList = async () => {
        const data = await readCompanyList();
        if (data) {
            setCompanyList(data);
        }
    }

    const [VendorList, setVendorList] = useState<VendorInterface[]>([])
    const fetchVendorList = async () => {
        const data = await readVendorList();
        if (data) {
            setVendorList(data);
        }
    }

    useEffect(() => {
        fetchAgentList()
        fetchRecruitCoordinatorList()
        fetchcomapanyList()
        fetchVendorList()
    }, [])

    async function onClickAdd() {
        console.log(degreAttestationList);   // Only Dev
        const res = await addDegreeAttestationList(degreAttestationList)

        if (!res)
            return

        props.onClose()
    }
    return (
        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Degree Attestation"
            onClose={props.onClose}
        >

            <DegreeAttestationList
                degreAttestationList={degreAttestationList}
                actionType={"create"}
                onChange={(value) => setDegreAttestationList(value)}
                AgentList={AgentList}
                RecruitCoordinatorList={RecruitCoordinatorList}
                VendorList={VendorList}
                companyList={companyList}
            />

        </FullScreenModal>
    )
}
