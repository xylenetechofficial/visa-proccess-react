import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import DegreeAttestationList from "./DegreAttestationList";
import { AgentInterface } from "../../../masters/agent/type";
import { readAgentList } from "../../../masters/agent/repository";
import { DegreeAttestationInterface } from "../type/Index";
import { UserInterface } from "../../../context/Model";
import { readRecruitCoordinatorList } from "../../../masters/user/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { readCompanyList } from "../../../masters/company/repository";
import { readVendorList } from "../../../masters/vendor/repository";
import { VendorInterface } from "../../../masters/vendor/type";
import { readDegreeAttestationList } from "../repository";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";

export default function Main(props: {
    onClose: any,
    // fetchBlockVisaList: any,
    // sectorList: SectorInterface[],
    // companyList: CompanyInterface[],
    // countryList: CountryInterface[],
}) {
    const [degreAttestationList, setDegreAttestationList] = useState<DegreeAttestationInterface[]>([])
    const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
        {
            pagination: {
                page: 1,
                page_count: 1,
                item_count: 0,
                sno_base: 0,
            },
        }
    );

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

    const fetch_list = async (page?: number) => {
        const res = await readDegreeAttestationList({ page_number: page })
        setDegreAttestationList(res);
        setAdditionalData(await PaginationManager.getData());

    }

    useEffect(() => {
        fetch_list()

        fetchAgentList()
        fetchRecruitCoordinatorList()
        fetchcomapanyList()
        fetchVendorList()
    }, [])
    async function onClickEdit() {
        return
    }
    return (
        <FullScreenModal
            buttonName="Edit"
            handleClick={onClickEdit}
            title="Edit Degree Attestation"
            onClose={props.onClose}
        >

            <DegreeAttestationList
                degreAttestationList={degreAttestationList}
                actionType={"edit"}
                onChange={(value) => setDegreAttestationList(value)}
                AgentList={AgentList}
                RecruitCoordinatorList={RecruitCoordinatorList}
                VendorList={VendorList}
                companyList={companyList}
            />

        </FullScreenModal>
    )
}
